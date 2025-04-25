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

const imageDb = getStorage(app);

const ImageUpload = () => {
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState([]);

  const fetchImages = async () => {
    const imgs = await listAll(ref(imageDb, "artToVote"));
    const urls = await Promise.all(
      imgs.items.map((item) => getDownloadURL(item))
    );
    setImgUrl(urls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const uploadImage = async () => {
    if (!img) return alert("Pilih gambar terlebih dahulu!");

    const imgRef = ref(imageDb, `artToVote/${img.name + v4()}`);
    try {
      await uploadBytes(imgRef, img).then(() => {
        alert("berhasilll");

        fetchImages();
      });
    } catch (error) {
      alert("Gagal upload gambar: " + error.message);
    }
  };

  return (
    <div className="flex flex-col w-screen justify-center p-20 gap-4">
      <div>
        <input
          type="file"
          className="bg-blue-200 px-6 py-2 rounded-2xl"
          onChange={(e) => setImg(e.target.files[0])}
        ></input>
        <button
          className="px-6 py-2 border rounded-2xl hover:bg-gray-100 active:bg-gray-200"
          onClick={uploadImage}
        >
          Upload
        </button>
      </div>
      <div className="grid grid-cols-5 mt-10">
        {imgUrl.map((dataVal, i) => (
          <div key={i}>
            <img
              src={dataVal}
              alt=""
              className="h-52 w-32 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
