import React, { useEffect, useState } from "react";

import bgDesktop from "/images/bgDesktopRevisi.webp";
import bgMobile from "/images/bgMobileRevisi_11zon.jpg";
import { useMediaQuery } from "../useMediaQuery";

import {
  createArtToVote,
  getAllArtToVote,
  getArtWithVotes,
  resetVote,
  vote,
} from "../firebase/firestore";

import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { app } from "../firebase/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import AnimatedDiv from "../components/AnimatedDiv";
import Loading from "../components/Loading";
import ImageLoad from "../components/ImageLoad";
import { confirmAlert } from "react-confirm-alert";

const db = getFirestore(app);

const ArtListPage = () => {
  const [arts, setArts] = useState([]);

  const [img, setImg] = useState(null);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const [visitorId, setVisitorId] = useState(null);

  const [hasVoted, setHasVoted] = useState(false);

  const [artVotedId, setArtVotedId] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [imagesLoaded, setImagesLoaded] = useState(0);

  const [isHover, setIsHover] = useState(false);
  const [isHoverId, setIsHoverId] = useState(null);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => {
      console.log("image loaded");
      return prev + 1;
    });
  };

  const handleMouseEnter = (id) => {
    setIsHover(true);
    setIsHoverId(id);
    console.log("mouse enter");
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    console.log("mouse leave");
  };

  const handleImgClick = (id, name, title, desc, src) => {
    setId(id);
    setImg(src);
    setName(name);
    setTitle(title);
    setDesc(desc);
  };

  const closePopup = () => {
    setId(null);
    setImg(null);
    setName(null);
    setTitle(null);
    setDesc(null);
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
    const fetchArts = async () => {
      const result = await getArtWithVotes();
      setArts(result);

      // Preload all images
      const preloadImages = result.map((art) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = art.imgUrl;
          img.onload = img.onerror = () => resolve(); // handle cache or broken img
        });
      });

      await Promise.all(preloadImages);
      setIsLoading(false); // hanya setelah semua gambar siap
    };

    fetchArts();
  }, []); // dijalankan sekali saat mount

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();

      setVisitorId(result.visitorId);
    };

    loadFingerprint();
  }, []);

  // useEffect(() => {
  //   const fetchArts = async () => {
  //     const result = await getAllArtToVote();
  //     setArts(result);
  //   };
  //   fetchArts();
  // }, []);

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
      className="relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat min-h-screen px-10 py-20 md:px-20 md:py-40"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      {isLoading ? <Loading /> : <></>}
      {img && (
        <div
          className="fixed inset-0 bg-[#000000BF] flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div className="rounded-lg max-w-full h-full flex flex-col items-center justify-center">
            <div
              className="bg-[#48368A] flex flex-col md:flex-row justify-between px-8 py-8 lg:px-30 items-start md:items-center w-[80%] h-[80%] text-white gap-6 md:gap-12 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={img}
                alt="art image"
                className="w-[30%] aspect-square object-cover"
                // onClick={(e) => e.stopPropagation()} // biar klik gambar tidak menutup modal
              />
              <div className="flex flex-col h-full items-start w-[100%] justify-center text-ellipsis">
                <h1 className="font-oddval md:mb-2 text-lg lg:text-2xl">
                  {name}
                </h1>

                <div className="max-h-[60%] overflow-y-auto mb-2 md:mb-8">
                  <p className="text-gray-300 break-words whitespace-pre-wrap w-full max-w-full overflow-wrap break-word  text-sm md:text-lg">
                    {desc}
                  </p>
                </div>
                <div>
                  {!hasVoted ? (
                    <button
                      onClick={async () => {
                        await vote(id, visitorId);
                        setArtVotedId(id);
                        setTimeout(async () => {
                          await getVoteData(visitorId);
                        }, 500);
                      }}
                      className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-[#48368A] bg-white hover:bg-blue-300 active:bg-blue-400"
                    >
                      <span className="z-10">Vote</span>
                    </button>
                  ) : artVotedId == id ? (
                    <button
                      onClick={() => cancelVote(id)}
                      className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-green-400 hover:bg-green-500 active:bg-green-600"
                    >
                      <span className="z-10">Voted</span>
                    </button>
                  ) : (
                    <button className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-gray-400 ">
                      <span className="z-10">udah vote yang lain</span>
                    </button>
                  )}

                  {/* <p>{`total voting: ${art.voteCount}`}</p> */}
                  {/* <p>{`total voting: ${getVoteCount(art.id)}`}</p> */}
                  {/* <p>{`status: ${hasVoted.valueOf}`}</p> */}
                  {/* <p>{isHover ? "hoverrr" : "keluarr"}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-8">
        {arts.map((art) => (
          <AnimatedDiv>
            <div>
              <div
                key={art.id}
                className="relative aspect-square items-center flex justify-center"
              >
                {isHover && art.id === isHoverId ? (
                  <div
                    onClick={() =>
                      handleImgClick(
                        art.id,
                        art.name,
                        art.title,
                        art.desc,
                        art.url
                      )
                    }
                    onMouseEnter={() => handleMouseEnter(art.id)}
                    onMouseLeave={() => handleMouseLeave()}
                    className="absolute bg-[#00000040] w-[100%] md:w-[100%] aspect-square flex justify-center items-center text-xl"
                  >
                    Click to View
                  </div>
                ) : (
                  <></>
                )}
                <ImageLoad
                  key={art.id}
                  src={art.url}
                  alt={art.name}
                  className="object-cover h-[100%] w-[100%]"
                  onClick={() =>
                    handleImgClick(
                      art.id,
                      art.name,
                      art.title,
                      art.desc,
                      art.url
                    )
                  }
                  onImageLoad={handleImageLoad}
                  onMouseEnter={() => handleMouseEnter(art.id)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              </div>
            </div>
          </AnimatedDiv>
        ))}
      </div>
      <button
        onClick={() => (window.location.href = "/voting")}
        className="relative mt-20 px-20 py-2 rounded-lg w-auto text-md font-semibold text-white bg-[#48368A] hover:bg-[#5a5375] active:bg-[#49435f] max-w-[30%]"
      >
        <span className="z-10">Kembali</span>
      </button>
    </div>
  );
};

export default ArtListPage;
