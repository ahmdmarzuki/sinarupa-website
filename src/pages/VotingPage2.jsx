import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "./styleVotingPage2.css";
import "swiper/css/pagination";
import "swiper/css";

import {
  createArtToVote,
  getAllArtToVote,
  resetVote,
  vote,
} from "../firebase/firestore";

const slidesData = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "INI TITLEE",
    desc: "ini descc, gatauu mau nulis apaa",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "INI TITLEE",
    desc: "ini descc, gatauu mau nulis apaa",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "INI TITLEE",
    desc: "ini descc, gatauu mau nulis apaa",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "INI TITLEE",
    desc: "ini descc, gatauu mau nulis apaa",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "INI TITLEE",
    desc: "ini descc, gatauu mau nulis apaa",
  },
];

const VotingPage2 = () => {
  const swiperWrappedRef = useRef(null);

  const [arts, setArts] = useState([]);

  const adjustMargin = () => {
    const screenWidth = window.innerWidth;

    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  };

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, []);

  return (
    <main className="main2">
      <div className="container2">
        <Swiper
          className=""
          modules={[Pagination]}
          grabCursor
          initialSlide={0}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            620: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperWrappedRef.current = swiper.wrapperEl;
          }}
        >
          {arts.map((art) => (
            <SwiperSlide key={art.id} className=" bg-teal-300">
              <div className="flex flex-row justify-center items-center h-[100%]">
                <img
                  src={art.url}
                  alt={art.name}
                  className="aspect-square w-60"
                />

                <div className="flex flex-col">
                  <div className="">
                    <h1>{art.name}</h1>
                  </div>
                  <div className="">
                    <p>{art.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default VotingPage2;
