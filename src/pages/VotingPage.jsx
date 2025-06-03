import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import { ArrowLeft } from "react-feather";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // ← ini wajib

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
  getArtWithVotes,
  getVoteCount,
  resetVote,
  vote,
} from "../firebase/firestore";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { app } from "../firebase/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "../components/Loading";
import ImageLoad from "../components/ImageLoad";
import { auth } from "../firebase/auth";

const db = getFirestore(app);

const VotingPage = () => {
  const swiperWrapperRef = useRef(null);
  const [arts, setArts] = useState([]);
  const [voteCount, setVoteCount] = useState([]);

  const [selectedImg, setSelectedImg] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [visitorId, setVisitorId] = useState(null);

  const [hasVoted, setHasVoted] = useState(false);

  const [artVotedId, setArtVotedId] = useState(null);

  const [isHover, setIsHover] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      console.log("image loaded");
      return prev + 1;
    });
  };

  const handleImgClick = (src) => {
    setSelectedImg(src);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
    console.log("mouse enter");
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setIsHoverId(null);
    console.log("mouse leave");
  };

  const closePopup = () => {
    setSelectedImg(null);
  };

  const cancelVote = (id) => {
    confirmAlert({
      title: "Batal vote",
      message: "Apakah kamu yakin ingin membatalkan vote karya ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            // Lanjutkan vote
            resetVote(visitorId, id).then(setArtVotedId(null));
            console.log("Vote dibatalkan");
          },
        },
        {
          label: "Batal",
          onClick: () => {
            // Vote dibatalkan
            console.log("batal");
          },
        },
      ],
    });
  };

  useEffect(() => {
    if (arts.length > 0 && imagesLoaded === arts.length) {
      setIsLoading(false);
    }
  }, [imagesLoaded, arts.length]);

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getArtWithVotes();
      setArts(result);
    };
    fetchArts();
  }, []);

  useEffect(() => {
    const fetchVoteCount = async () => {
      const result = await getVoteCount();
      setVoteCount(result);
    };
    fetchVoteCount();
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

  // if (isLoading) {
  //   return <Loading imageLoaded={imagesLoaded} total={arts.length} />;
  // }

  return (
    <div
      className="relative flex justify-center items-center flex-col h-[100dvh] bg-cover bg-top bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      {/* {isLoading ? (
        <Loading imageLoaded={imagesLoaded} total={arts.length} />
      ) : (
        <></>
      )} */}
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

      <div className="w-[100%] md:w-[80%] flex flex-col justify-center items-center">
        {/* <p>click image to see full</p> */}
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          grabCursor={true}
          initialSlide={0}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={10}
          speed={isMobile ? 100 : 500}
          slideToClickedSlide={true}
          // allowTouchMove={false}
          // pagination={{ clickable: true }}
          // mousewheel={{ thresholdDelta: 30 }}
          onSwiper={(swiper) => {
            swiperWrapperRef.current = swiper.wrapperEl;
          }}
        >
          {arts.map((art) => (
            <SwiperSlide key={art.id}>
              <div className=" bg-[#48368A] flex flex-col md:flex-row justify-between px-8 py-8 lg:px-30 items-start md:items-center h-[100%] text-white gap-6 md:gap-12">
                <div className="relative min-w-[90%] md:min-w-[36%] md:max-w-[40%] aspect-square">
                  {isHover ? (
                    <div
                      onClick={() => handleImgClick(art.url)}
                      onMouseEnter={() => handleMouseEnter()}
                      onMouseLeave={() => handleMouseLeave()}
                      className="absolute bg-[#00000040] w-[100%] md:w-[100%] aspect-square flex justify-center items-center text-xl"
                    >
                      Click to View
                    </div>
                  ) : (
                    <></>
                  )}
                  {/* <img
                    key={index}
                    src={art.url}
                    alt={art.name}
                    className="w-[100%] md:w-[100%] aspect-square"
                    // onLoad={() => {
                    //   alert("Placeholder loaded");
                    //   handleImageLoad();
                    // }}
                    onClick={() => handleImgClick(art.url)}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                  /> */}
                  <ImageLoad
                    key={art.id}
                    src={art.url}
                    alt={art.name}
                    onImageLoad={handleImageLoad}
                    className="w-[100%] md:max-w-[100%] aspect-square"
                    onClick={() => handleImgClick(art.url)}
                    onMouseEnter={() => handleMouseEnter(art.id)}
                    onMouseLeave={() => handleMouseLeave()}
                  />
                </div>

                <div className="flex flex-col h-full items-start w-[100%] md:w-[60%] justify-center text-ellipsis">
                  <h1 className="font-oddval md:mb-2 text-lg lg:text-2xl">
                    {art.name}
                  </h1>
                  <h1 className="font-oddval md:mb-2 text-lg lg:text-2xl text-gray-200">
                    {art.title}
                  </h1>
                  <p className="text-gray-300 break-words whitespace-pre-wrap md:max-h-[50%] w-full max-w-full overflow-wrap break-word mb-2 md:mb-8 text-sm md:text-lg overflow-y-scroll">
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
                        onClick={() => cancelVote(art.id)}
                        className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-green-400 hover:bg-green-500 active:bg-green-600"
                      >
                        <span className="z-10">Voted</span>
                      </button>
                    ) : (
                      <button className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-gray-400 ">
                        <span className="z-10">Vote</span>
                      </button>
                    )}

                    {/* <p>{`total voting: ${art.voteCount}`}</p> */}
                    {/* <p>{`status: ${hasVoted.valueOf}`}</p> */}
                    {/* <p>{isHover ? "hoverrr" : "keluarr"}</p> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isLoading ? (
          ""
        ) : (
          <div className="w-[100%] flex justify-center items-center gap-10">
            <button
              onClick={() => (window.location.href = "/")}
              className="relative px-20 py-2 rounded-lg w-auto text-md font-semibold text-white bg-gray-400 hover:bg-gray-500 active:bg-gray-600 max-w-[30%]"
            >
              <span className="z-10">Kembali</span>
            </button>
            <button
              onClick={() => (window.location.href = "/art")}
              className="relative px-20 py-2 rounded-lg w-auto text-md font-semibold text-white bg-[#48368A] hover:bg-[#5a5375] active:bg-[#49435f] max-w-[30%]"
            >
              <span className="z-10">Show All</span>
            </button>
          </div>
        )}
        {/* <h1 className="mt-2 flex justify-center">
          UID: {auth.currentUser?.uid}
        </h1> */}
      </div>
    </div>
  );
};

export default VotingPage;
