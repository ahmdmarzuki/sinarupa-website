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
import { createArtToVote, getAllArtToVote, vote } from "../firebase/firestore";

const imageDb = getStorage(app);

const ImageUpload = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [arts, setArts] = useState([]);

  const imgRef = useRef();

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

  const uploadImage = async () => {
    if (!img) return alert("Pilih gambar terlebih dahulu!");

    const imgRef = ref(imageDb, `artToVote/${img.name + v4()}`);
    try {
      await uploadBytes(imgRef, img).then(() => {
        setName("");
        setDesc("");
        setImg("");
        clearFileInput();
        alert("berhasilll");
      });

      const url = await getDownloadURL(imgRef);

      await createArtToVote(name, desc, url);
    } catch (error) {
      alert("Gagal upload gambar: " + error.message);
    }
  };

  return (
    <div className="flex flex-col w-screen justify-center p-20 gap-4">
      <div className="flex flex-col gap-2 sm:w-[80vw] md:w-80">
        <input
          ref={imgRef}
          type="file"
          className="bg-gray-200 px-6 py-2 rounded-2xl"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <input
          value={name}
          placeholder="Masukkan Nama"
          type="text"
          className="border px-6 py-2 rounded-2xl"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={desc}
          placeholder="Masukkan Deskripsi"
          type="text"
          className="border px-6 py-2 rounded-2xl"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="px-6 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
          onClick={uploadImage}
        >
          Upload
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-4 ">
        {arts.map((art) => (
          <div key={art.id} className="p-2 border rounded-xl">
            <img
              src={art.url}
              alt={art.name}
              className="h-20 lg:h-52 w-full object-cover rounded"
            />
            <div className="flex flex-row justify-between items-end">
              <div>
                <h3 className="mt-2 font-bold">{art.name}</h3>
                <p className="text-sm text-gray-600">{art.desc}</p>
                <p className="text-sm text-gray-600">
                  voteCount: {art.voteCount}
                </p>
              </div>
              <div
                onClick={() => vote(art.id, art.voteCount)}
                className="px-1 py-0 border  rounded-full items-center flex justify-center font-medium cursor-pointer hover:bg-blue-100 active:bg-blue-200"
              >
                Vote
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
