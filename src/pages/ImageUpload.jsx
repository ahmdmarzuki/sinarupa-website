import React, { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";
import { app } from "../firebase/firebaseConfig";
import {
  createArtToVote,
  getAllArtToVote,
  removeArt,
  resetVote,
  vote,
} from "../firebase/firestore";
import Banner from "../components/Banner";
import { motion } from "motion/react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { doc, getDoc } from "firebase/firestore";

import upload from "/images/upload.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../firebase/auth";

const imageDb = getStorage(app);

const ImageUpload = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [arts, setArts] = useState([]);

  const imgRef = useRef();

  const [visitorId, setVisitorId] = useState(null);

  const [isUser, setIsUser] = useState(false);

  // const [udahVote, setUdahVote] = useState(false);

  // const udahVote = async () => {
  //   const voteDoc = await getDoc(doc(db, "votes", visitorId));

  //   if (voteDoc.exists()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();

      setVisitorId(result.visitorId);
    };

    loadFingerprint();
  }, []);

  const clearFileInput = () => {
    imgRef.current.value = null;
  };

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, [arts]);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setImg(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const uploadImage = async () => {
    if (!img) return alert("Pilih gambar terlebih dahulu!");

    const imgRef = ref(imageDb, `artToVote/${img.name + v4()}`);
    try {
      await uploadBytes(imgRef, img).then(() => {
        setName("");
        setTitle("");
        setDesc("");
        setImg("");
        clearFileInput();
        // alert("berhasilll");
      });

      const url = await getDownloadURL(imgRef);

      await createArtToVote(name, title, desc, url);
    } catch (error) {
      alert("Gagal upload gambar: " + error.message);
    }
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

  return (
    <div className="flex flex-col justify-center p-20 gap-4 bg-[url('/images/bgDesktopRevisi.webp')] bg-cover bg-center bg-no-repeat min-h-screen ">
      <div className="flex flex-row justify-center items-center w-[100%]">
        <div className="flex flex-col gap-2 sm:w-[80vw] md:w-[40vw]">
          <div onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className="flex justify-end">
              {isUser ? (
                <button
                  onClick={() => logout()}
                  className="mb-20 px-20 py-2 w-[20vw] rounded-lg text-md font-semibold text-white bg-red-400 hover:bg-red-500 active:bg-red-600"
                >
                  <span className="z-10">Logout</span>
                </button>
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
            className="px-6 py-2 rounded-2xl border bg-blue-300 hover:bg-blue-400 active:bg-blue-500"
            onClick={uploadImage}
          >
            Kirimm ae
          </button>
        </div>
        {/* <button
          className="px-6 py-2 rounded-2xl border bg-red-300 hover:bg-red-400 active:bg-red-500"
          onClick={() => resetVote(visitorId)}
        >
          Reset vote (pencet ini biar bisa vote lagii)
        </button> */}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-4 ">
        {arts.map((art) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            key={art.id}
            className="p-2 rounded-xl bg-cover"
          >
            <img
              src={art.url}
              alt={art.name}
              className="h-20 lg:h-52 w-full rounded aspect-square object-contain"
            />
            <div className="flex flex-row justify-between items-end">
              <div className="w-full">
                <h3 className="mt-2 font-bold uppercase">{art.name}</h3>
                <h3 className="font-bold">{art.title}</h3>
                <p className="text-sm font-medium text-gray-800 truncate ">
                  {art.desc}
                </p>
                <p className="text-sm text-gray-600">
                  voteCount: {art.voteCount}
                </p>

                <div
                  onClick={async () => {
                    await vote(art.id, visitorId);
                    setTimeout(async () => {
                      await getVoteData(visitorId);
                    }, 500);
                  }}
                  className="px-4 py-0 mt-2 border rounded-md items-center flex justify-center font-medium cursor-pointer hover:bg-blue-100 active:bg-blue-200"
                >
                  Vote
                </div>
                <div
                  onClick={async () => {
                    await removeArt(art.id);
                    setTimeout(async () => {
                      await getVoteData(visitorId);
                    }, 500);
                  }}
                  className="px-4 py-0 mt-2 border rounded-md items-center flex justify-center font-medium cursor-pointer hover:bg-blue-100 active:bg-blue-200"
                >
                  Remove
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h1 className="mt-20 flex justify-center">Device ID kamu: {visitorId}</h1>
      <h1 className="mt-20 flex justify-center">
        UID: {auth.currentUser?.uid}
      </h1>
      {/* <h1>{udahVote ? "udah votee" : "belom votee"}</h1> */}
    </div>
  );
};

export default ImageUpload;
