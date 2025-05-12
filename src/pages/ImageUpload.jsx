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
  resetVote,
  vote,
} from "../firebase/firestore";
import Banner from "../components/Banner";
import { motion } from "motion/react";
import { doc, getDoc } from "firebase/firestore";

const imageDb = getStorage(app);

const ImageUpload = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [arts, setArts] = useState([]);

  const imgRef = useRef();

  const [visitorId, setVisitorId] = useState(null);

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
      const fpModule = await import("@fingerprintjs/fingerprintjs");
      const fp = await fpModule.load();
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
  }, []);

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
    <div className="flex flex-col w-full justify-center p-20 gap-4 bg-[url('/images/bg-full.png')] bg-cover bg-top bg-no-repeat min-h-screen ">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2 sm:w-[80vw] md:w-80">
          <input
            ref={imgRef}
            type="file"
            className="bg-blue-200 border px-6 py-2 rounded-2xl"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <input
            value={name}
            placeholder="Isi titlenya dungs"
            type="text"
            className="border px-6 py-2 rounded-2xl"
            onChange={(e) => setName(e.target.value)}
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
        <button
          className="px-6 py-2 rounded-2xl border bg-red-300 hover:bg-red-400 active:bg-red-500"
          onClick={() => resetVote(visitorId)}
        >
          Reset vote (pencet ini biar bisa vote lagii)
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-4 ">
        {arts.map((art) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            key={art.id}
            className="p-2 border border-blue-500 rounded-xl bg-[url('/images/bgCard.png')] bg-cover"
          >
            <img
              src={art.url}
              alt={art.name}
              className="h-20 lg:h-52 w-full object-cover rounded"
            />
            <div className="flex flex-row justify-between items-end">
              <div>
                <h3 className="mt-2 font-bold">{art.name}</h3>
                <p className="text-sm font-medium text-gray-800">{art.desc}</p>
                <p className="text-sm text-gray-600">
                  voteCount: {art.voteCount}
                </p>
              </div>
              <div
                onClick={async () => {
                  await vote(art.id, visitorId);
                  setTimeout(async () => {
                    await getVoteData(visitorId);
                  }, 500);
                }}
                className="px-4 py-0 border rounded-md items-center flex justify-center font-medium cursor-pointer hover:bg-blue-100 active:bg-blue-200"
              >
                Vote
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Banner text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque, deleniti tempore iure eveniet, magnam ratione dolore reprehenderit est similique rem quam aut veritatis debitis temporibus aperiam quibusdam optio ducimus." />
      <h1>Device ID kamu: {visitorId}</h1>
      {/* <h1>{udahVote ? "udah votee" : "belom votee"}</h1> */}
    </div>
  );
};

export default ImageUpload;
