import React, { useEffect, useState } from "react";

import bgDesktop from "/images/bgDesktopRevisi.webp";
import bgMobile from "/images/bgMobileRevisi_11zon.jpg";
import { useMediaQuery } from "../useMediaQuery";

import {
  createArtToVote,
  getAllArtToVote,
  resetVote,
  vote,
} from "../firebase/firestore";

import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { app } from "../firebase/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

const ArtListPage = () => {
  const [arts, setArts] = useState([]);

  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [visitorId, setVisitorId] = useState(null);

  const [hasVoted, setHasVoted] = useState(false);

  const [artVotedId, setArtVotedId] = useState(null);

  const handleImgClick = (name, title, desc, src) => {
    setImg(src);
    setName(name);
    setTitle(title);
    setDesc(desc);
  };

  const closePopup = () => {
    setImg(null);
    setName(null);
    setTitle(null);
    setDesc(null);
  };

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();

      setVisitorId(result.visitorId);
    };

    loadFingerprint();
  }, []);

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, []);

  useEffect(() => {
    const checkVote = async () => {
      if (!visitorId) return;

      const voteDoc = await getDoc(doc(db, "votes", visitorId));

      if (voteDoc.exists()) {
        setHasVoted(true);
        setArtVotedId(voteDoc.data().id);
      } else {
        setHasVoted(false);
      }
    };

    checkVote();
  }, [visitorId, artVotedId]);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen px-20 py-40"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      {img && (
        <div
          className="fixed inset-0 bg-[#000000BF] flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="rounded-lg max-w-full max-h-full">
            <img
              src={img}
              alt="Full view"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} // biar klik gambar tidak menutup modal
            />
          </div>
        </div>
      )}
      <div className="grid grid-cols-5 gap-8">
        {arts.map((art) => (
          <div>
            <div
              key={art.id}
              className="aspect-square bg-[#48368A] items-center flex justify-center rounded-2xl"
            >
              <img
                src={art.url}
                alt={art.name}
                className="object-cover h-[90%] w-[90%]"
                onClick={() =>
                  handleImgClick(art.name, art.title, art.desc, art.url)
                }
              />
            </div>
            <div className="mt-4">
              {!hasVoted ? (
                <button
                  onClick={async () => {
                    await vote(art.id, visitorId);
                    setArtVotedId(art.id);
                    setTimeout(async () => {
                      await getVoteData(visitorId);
                    }, 500);
                  }}
                  className="relative px-8 py-2 rounded-lg w-full text-md font-semibold text-[#48368A] bg-white hover:bg-blue-300 active:bg-blue-400"
                >
                  <span className="z-10">Vote</span>
                </button>
              ) : artVotedId == art.id ? (
                <button
                  onClick={() =>
                    resetVote(visitorId, art.id).then(setArtVotedId(null))
                  }
                  className="relative px-8 py-2 rounded-lg w-full text-md font-semibold text-white bg-green-400 hover:bg-green-500 active:bg-green-600"
                >
                  <span className="z-10">Vote</span>
                </button>
              ) : (
                <button className="relative px-8 py-2 rounded-lg w-full text-md font-semibold text-white bg-gray-400 ">
                  <span className="z-10">Vote</span>
                </button>
              )}

              {/* <p>{`total voting: ${art.voteCount}`}</p> */}
              {/* <p>{`status: ${hasVoted.valueOf}`}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtListPage;
