import React, { useEffect, useState } from "react";
// import { imageDb } from "../firebase/storage";
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
  //   const [url, setUrl] = useState("");
  //   const [imgUrl, setImgUrl] = useState([]);

  //   const fetchImages = async () => {
  //     const imgs = await listAll(ref(imageDb, "artToVote"));
  //     const urls = await Promise.all(
  //       imgs.items.map((item) => getDownloadURL(item))
  //     );
  //     setImgUrl(urls);
  //   };

  //   useEffect(() => {
  //     fetchImages();
  //   }, []);

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, []);

  const uploadImage = async () => {
    if (!img) return alert("Pilih gambar terlebih dahulu!");

    const imgRef = ref(imageDb, `artToVote/${img.name + v4()}`);
    try {
      await uploadBytes(imgRef, img).then(() => {
        setName("");
        setDesc("");
        setImg("");
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
      <div className="flex flex-col gap-2 w-80">
        <input
          //   value={img}
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
      <div className="grid grid-cols-5 mt-10 gap-4">
        {arts.map((art) => (
          <div key={art.id} className="p-2 border rounded-xl">
            <img
              src={art.url}
              alt={art.name}
              className="h-52 w-full object-cover rounded"
            />
            <div className="flex flex-row justify-between items-center">
              <div>
                <h3 className="mt-2 font-bold">{art.name}</h3>
                <p className="text-sm text-gray-600">{art.desc}</p>
                <p className="text-sm text-gray-600">
                  voteCount: {art.voteCount}
                </p>
              </div>
              <div
                onClick={vote}
                className="p-4 w-12 h-12 border rounded-full items-center flex justify-center font-medium text-2xl cursor-pointer"
              >
                +
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
