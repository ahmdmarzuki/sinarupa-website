import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { v4 } from "uuid";

import "./style.css";
import { useMediaQuery } from "../useMediaQuery";

import bgDesktop from "/images/bgDesktopRevisi.webp";
import bgMobile from "/images/bgMobileRevisi_11zon.jpg";

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

const VotingPage = () => {
  const swiperWrapperRef = useRef(null);
  const [arts, setArts] = useState([]);

  const [selectedImg, setSelectedImg] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [visitorId, setVisitorId] = useState(null);

  const [hasVoted, setHasVoted] = useState(false);

  const [artVotedId, setArtVotedId] = useState(null);

  const handleImgClick = (src) => {
    setSelectedImg(src);
  };

  const closePopup = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
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
      className="relative flex justify-center items-center flex-col h-[100dvh] bg-cover bg-top bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      {selectedImg && (
        <div
          className="fixed inset-0 bg-[#000000BF] flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="rounded-lg max-w-full max-h-full">
            <img
              src={selectedImg}
              alt="Full view"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} // biar klik gambar tidak menutup modal
            />
          </div>
        </div>
      )}
      <div className="w-[80%]">
        {/* <p>click image to see full</p> */}
        <Swiper
          // install Swiper modules
          modules={[Mousewheel, Pagination]}
          grabCursor={true}
          initialSlide={0}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={10}
          speed={500}
          slideToClickedSlide={true}
          // pagination={{ clickable: true }}
          mousewheel={{ thresholdDelta: 30 }}
          onSwiper={(swiper) => {
            swiperWrapperRef.current = swiper.wrapperEl;
          }}
        >
          {arts.map((art) => (
            <SwiperSlide key={art.id}>
              <div className="bg-[#48368A] flex flex-col md:flex-row justify-between px-10 sm:py-8 lg:px-30 items-start md:items-center h-[100%] text-white gap-20 md:gap-12 ">
                <img
                  src={art.url}
                  alt={art.name}
                  className="w-[90%] md:w-[40%] aspect-square"
                  onClick={() => handleImgClick(art.url)}
                />

                <div className="flex flex-col h-full items-start w-full max-w-[60%] justify-center ">
                  <h1 className="font-oddval md:mb-8 text-xl lg:text-4xl">
                    {art.name}
                  </h1>
                  <h1 className="font-oddval md:mb-2 text-xl lg:text-2xl">
                    {art.title}
                  </h1>
                  <p className="break-words whitespace-pre-wrap w-full max-w-full overflow-wrap break-word md:mb-8 ">
                    {art.desc}
                  </p>
                  <div>
                    {!hasVoted ? (
                      <button
                        onClick={async () => {
                          await vote(art.id, visitorId);
                          setArtVotedId(art.id);
                          setTimeout(async () => {
                            await getVoteData(visitorId);
                          }, 500);
                        }}
                        className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-[#48368A] bg-white hover:bg-blue-300 active:bg-blue-400"
                      >
                        <span className="z-10">Vote</span>
                      </button>
                    ) : artVotedId == art.id ? (
                      <button
                        onClick={() =>
                          resetVote(visitorId, art.id).then(setArtVotedId(null))
                        }
                        className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-green-400 hover:bg-green-500 active:bg-green-600"
                      >
                        <span className="z-10">Voted</span>
                      </button>
                    ) : (
                      <button className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-gray-400 ">
                        <span className="z-10">udah vote yang lain</span>
                      </button>
                    )}

                    <p>{`total voting: ${art.voteCount}`}</p>
                    {/* <p>{`status: ${hasVoted.valueOf}`}</p> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={() => (window.location.href = "/art")}
        className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-[#48368A] hover:bg-[#5a5375] active:bg-[#49435f]"
      >
        <span className="z-10">Show All</span>
      </button>
    </div>
  );
};

export default VotingPage;
