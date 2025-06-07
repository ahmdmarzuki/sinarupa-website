import React, { useEffect, useRef, useState } from "react";
import {
  createArtToVote,
  createVoteCount,
  getAllArtToVote,
  getArtWithVotes,
  removeArt,
  updateArtToVote,
} from "../firebase/firestore";
import { ToastContainer } from "react-toastify";
import { auth, logout } from "../firebase/auth";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { app } from "../firebase/firebaseConfig";
import { v4 } from "uuid";
import {
  getDownloadURL,
  uploadBytes,
  ref,
  deleteObject,
} from "firebase/storage";
import upload from "/images/upload.png";
import { onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { confirmAlert } from "react-confirm-alert";

const imageDb = getStorage(app);

// Fungsi untuk mengambil storage path dari Firebase Storage URL
function getPathFromUrl(url) {
  // Firebase Storage URL format: https://firebasestorage.googleapis.com/v0/b/<bucket>/o/<path>?alt=media&token=...
  // Kita ambil bagian setelah '/o/' dan sebelum '?'
  try {
    const match = url.match(/\/o\/(.*?)\?/);
    if (match && match[1]) {
      // URL encode -> decode
      return decodeURIComponent(match[1]);
    }
    return null;
  } catch {
    return null;
  }
}

const UpdateDbPanel = () => {
  const [artList, setArtList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModal, setEditModal] = useState({ open: false, art: null });

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const imgRef = useRef();

  const [isUser, setIsUser] = useState(false);
  const [visitorId, setVisitorId] = useState(null);

  const [editImg, setEditImg] = useState(null);

  const clearFileInput = () => {
    imgRef.current.value = null;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setImg(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    });
  }, []);

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();

      setVisitorId(result.visitorId);
    };

    loadFingerprint();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getArtWithVotes();
      setArtList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleRemove = async (id, name) => {
    confirmAlert({
      title: "Yakin pengen dihapus nihh😔",
      message: `Hapus "${name}" dari daftar karya?`,
      buttons: [
        {
          label: "Ya",
          onClick: async () => {
            await removeArt(id);
            setArtList((prev) => prev.filter((art) => art.id !== id));
          },
        },
        {
          label: "Batal",
          onClick: () => {
            console.log("batal");
          },
        },
      ],
    });
  };

  const handleEditClick = (art) => {
    setEditModal({ open: true, art });
  };

  const handleEditChange = (e) => {
    setEditModal((prev) => ({
      ...prev,
      art: { ...prev.art, [e.target.name]: e.target.value },
    }));
  };

  const handleEditSave = async () => {
    confirmAlert({
      title: "Simpan perubahann?",
      buttons: [
        {
          label: "Ya",
          onClick: async () => {
            const { id, name, title, desc } = editModal.art;
            let url = editModal.art.url;

            // Jika ada gambar baru, hapus gambar lama lalu upload baru
            if (editImg) {
              // Hapus gambar lama jika ada
              if (editModal.art.url) {
                const oldPath = getPathFromUrl(editModal.art.url);
                if (oldPath) {
                  try {
                    const oldImgRef = ref(imageDb, oldPath);
                    await deleteObject(oldImgRef);
                  } catch (err) {
                    console.log("Gagal hapus gambar lama:", err);
                  }
                }
              }
              // Upload gambar baru
              const imgRef = ref(imageDb, `artToVote/${editImg.name + v4()}`);
              await uploadBytes(imgRef, editImg);
              url = await getDownloadURL(imgRef);
            }

            await updateArtToVote(id, { name, title, desc, url });
            setArtList((prev) =>
              prev.map((art) =>
                art.id === id ? { ...art, name, title, desc, url } : art
              )
            );
            setEditModal({ open: false, art: null });
            setEditImg(null);
          },
        },
        {
          label: "Batal",
          onClick: () => {
            console.log("batal");
          },
        },
      ],
    });
  };

  const handleEditClose = () => {
    setEditModal({ open: false, art: null });
    setEditImg(null);
  };

  const uploadImage = async () => {
    if (!img) return alert("Pilih gambar terlebih dahulu!");

    const imgRef = ref(imageDb, `artToVote/${img.name + v4()}`);
    try {
      await uploadBytes(imgRef, img);

      const url = await getDownloadURL(imgRef);

      const artId = await createArtToVote(name, title, desc, url); // 🔥 dapetin ID
      await createVoteCount(artId); // gunakan ID yg sama

      setName("");
      setTitle("");
      setDesc("");
      setImg("");
      clearFileInput();
    } catch (error) {
      // alert("Gagal upload gambar: " + error.message);
      console.log(error);
    }
  };

  // Tambahkan efek untuk disable scroll body saat modal edit terbuka
  useEffect(() => {
    if (editModal.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup saat unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [editModal.open]);

  return (
    <main className="bg-[url('/images/bgDesktopRevisi.webp')] bg-cover min-h-screen bg-bottom flex flex-col py-20 gap-20 justify-center items-center">
      <div className="flex flex-col gap-2 sm:w-[80vw] md:w-[40vw]">
        <div onDrop={handleDrop} onDragOver={handleDragOver}>
          <div className="flex justify-end">
            {isUser ? (
              <div className="mb-20 gap-4 flex flex-col justify-end items-end">
                {" "}
                <button
                  onClick={() => logout()}
                  className="px-20 py-2 w-[20vw] rounded-lg text-md font-semibold text-white bg-red-400 hover:bg-red-500 active:bg-red-600"
                >
                  <span className="z-10">Logout</span>
                </button>
                <p>UID: {auth.currentUser?.uid}</p>
              </div>
            ) : (
              <button
                onClick={() => (window.location.href = "/login")}
                className="mb-20 px-20 py-2 w-[20vw] rounded-lg text-md font-semibold text-[#48368A] bg-white hover:bg-blue-300 active:bg-blue-400"
              >
                <span className="z-10">Login as Admin</span>
              </button>
            )}
          </div>
          <input
            id="upload"
            ref={imgRef}
            type="file"
            className="hidden"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label
            htmlFor="upload"
            className="bg-white hover:bg-gray-100 text-gray-800 flex flex-col justify-center items-center font-semibold px-6 py-10 rounded-2xl cursor-pointer"
          >
            <img src={upload} alt="upload" className="w-16" />
            {img ? (
              <p className="">{img.name}</p>
            ) : (
              <p className="">Drag & Drop file here or click to upload</p>
            )}
          </label>
        </div>
        <input
          value={name}
          placeholder="Isi namaa"
          type="text"
          className="border px-6 py-2 rounded-2xl"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={title}
          placeholder="Isi titlenya dungs"
          type="text"
          className="border px-6 py-2 rounded-2xl"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={desc}
          placeholder="inii deskripsii"
          type="text"
          className="border px-6 py-2 rounded-2xl"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="px-6 py-2 rounded-2xl text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-600"
          onClick={uploadImage}
        >
          Kirimm ae
        </button>
        <ToastContainer />
      </div>

      <div className="p-6 w-[80vw] mx-auto">
        <h1 className="text-2xl font-bold mb-6">{`Daftar Karya (${artList.length})`}</h1>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : artList.length === 0 ? (
          <div className="text-center">Tidak ada data karya.</div>
        ) : (
          <div className="flex flex-col gap-4">
            {artList
              .slice()
              .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
              .map((art) => (
                <div
                  key={art.id}
                  className="flex items-center justify-between bg-[#ffffff80] shadow rounded-lg p-4 hover:shadow-lg transition"
                >
                  <div className="flex flex-row gap-10 items-center">
                    <div>
                      {art.url && (
                        <img
                          src={art.url}
                          alt={art.name}
                          className="h-[100px] aspect-square rounded object-cover"
                        />
                      )}
                    </div>
                    <div className="max-w-[60%] flex flex-col gap-2">
                      <div className="text-gray-900 text-lg font-bold uppercase">
                        {art.name}
                      </div>
                      <div className="text-gray-500 text-sm mt-1 overflow-ellipsis line-clamp-2">
                        {art.desc}
                      </div>
                      <div className="text-blue-700 font-semibold mt-2">
                        Total Vote:{" "}
                        {Array.isArray(art.voteBy) ? art.voteBy.length : 0}
                      </div>
                    </div>
                  </div>
                  {isUser && (
                    <div className="flex flex-col gap-2 ml-4">
                      <button
                        className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                        onClick={() => handleEditClick(art)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition"
                        onClick={() => handleRemove(art.id, art.name)}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Modal Edit */}
        {editModal.open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000BF]"
            onClick={handleEditClose}
          >
            <div
              className="bg-white rounded-lg h-[96%] shadow-lg p-8 w-[60%] relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                onClick={handleEditClose}
              >
                &times;
              </button>
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-xl font-bold mb-4">Edit Karya</h2>
                <button
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  onClick={handleEditSave}
                >
                  Save
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-sm font-semibold">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={editModal.art.name || ""}
                  onChange={handleEditChange}
                  className="border rounded px-3 py-2"
                />
                <label className="text-sm font-semibold">Judul</label>
                <input
                  type="text"
                  name="title"
                  value={editModal.art.title || ""}
                  onChange={handleEditChange}
                  className="border rounded px-3 py-2"
                />
                <label className="text-sm font-semibold">Deskripsi</label>
                <textarea
                  name="desc"
                  value={editModal.art.desc || ""}
                  onChange={handleEditChange}
                  className="border rounded px-3 py-2"
                  rows={3}
                />
                {/* <label className="text-sm font-semibold">URL Gambar</label>
                <input
                  type="text"
                  name="url"
                  value={editModal.art.url || ""}
                  onChange={handleEditChange}
                  className="border rounded px-3 py-2"
                /> */}
                <label className="text-sm font-semibold">Ganti Gambar</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEditImg(e.target.files[0])}
                  className="bg-gray-300 py-4 px-2 rounded"
                />
                {(editImg || editModal.art.url) && (
                  <img
                    src={
                      editImg ? URL.createObjectURL(editImg) : editModal.art.url
                    }
                    alt="Preview"
                    className="mt-2 rounded object-cover aspect-square"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default UpdateDbPanel;
