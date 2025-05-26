import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
import { BlueButton } from "../components/Button";
import gsap from "gsap";

const VotingPage = () => {
  const swiperWrapperRef = useRef(null);
  const [arts, setArts] = useState([]);

  const isMobile = useMediaQuery("(max-width: 768px)");

  // const adjustMargin = () => {
  //   const screenWidth = window.innerWidth;

  //   if (swiperWrapperRef.current) {
  //     swiperWrapperRef.current.style.marginLeft =
  //       screenWidth <= 600 ? "-75px" : screenWidth <= 900 ? "-90px" : "-150px";
  //   }
  // };

  const slidesData = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "INI TITLEE",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus blanditiis vel, libero quae distinctio, facilis voluptatum explicabo quaerat fugit hic aspernatur fuga dicta, consequuntur itaque doloremque. Ipsum, deserunt sapiente! Rem!",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "INI TITLEE",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus blanditiis vel, libero quae distinctio, facilis voluptatum explicabo quaerat fugit hic aspernatur fuga dicta, consequuntur itaque doloremque. Ipsum, deserunt sapiente! Rem!",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "INI TITLEE",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus blanditiis vel, libero quae distinctio, facilis voluptatum explicabo quaerat fugit hic aspernatur fuga dicta, consequuntur itaque doloremque. Ipsum, deserunt sapiente! Rem!",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "INI TITLEE",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus blanditiis vel, libero quae distinctio, facilis voluptatum explicabo quaerat fugit hic aspernatur fuga dicta, consequuntur itaque doloremque. Ipsum, deserunt sapiente! Rem!",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "INI TITLEE",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus blanditiis vel, libero quae distinctio, facilis voluptatum explicabo quaerat fugit hic aspernatur fuga dicta, consequuntur itaque doloremque. Ipsum, deserunt sapiente! Rem!",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "INI TITLEE",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus blanditiis vel, libero quae distinctio, facilis voluptatum explicabo quaerat fugit hic aspernatur fuga dicta, consequuntur itaque doloremque. Ipsum, deserunt sapiente! Rem!",
    },
  ];

  useEffect(() => {
    const fetchArts = async () => {
      const result = await getAllArtToVote();
      setArts(result);
    };
    fetchArts();
  }, []);

  return (
    <div
      className="relative flex justify-center items-center flex-col h-[100dvh] bg-cover bg-top bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      <div className="w-[80%]">
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
          onSlideChange={(swiper) => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            gsap.fromTo(
              activeSlide,
              { scale: 0.5 },
              { scale: 1, duration: 0.5, ease: "power2.out" }
            );
          }}
        >
          {/* {arts.map((art, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#48368A] flex justify-between px-40 py-32 items-center h-[100%] text-white gap-8 ">
                <img
                  src={art.url}
                  alt={art.name}
                  className="w-[40%] aspect-square"
                />

                <div className="w-[40%] flex flex-col gap-8 h-[100%]">
                  <h1 className="font-oddval text-4xl">{art.name}</h1>
                  <p>{art.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))} */}

          {arts.map((art, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#48368A] flex flex-col md:flex-row justify-between px-10 sm:py-8 lg:px-30 items-start md:items-center h-[100%] text-white gap-20 md:gap-12 ">
                <img
                  src={art.url}
                  alt={art.name}
                  className="w-[90%] md:w-[40%] aspect-square"
                />

                <div className="flex flex-col gap-4 md:gap-8 h-[100%] items-start w-[100%]  justify-center ">
                  <h1 className="font-oddval text-xl lg:text-4xl">
                    {art.name}
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum reiciendis sapiente nisi nemo architecto sed placeat
                    doloribus id suscipit quam, quis quidem iusto cumque
                    molestiae est, dicta obcaecati asperiores sint.
                  </p>
                  <button
                    // onClick={handleClick}
                    className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-[#48368A] bg-white hover:bg-blue-300 active:bg-blue-400"
                  >
                    <span className="z-10">Vote</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        // onClick={handleClick}
        className="relative px-8 py-2 rounded-lg w-auto text-md font-semibold text-white bg-[#48368A] hover:bg-blue-300 active:bg-blue-400"
      >
        <span className="z-10">Show More</span>
      </button>
    </div>
  );
};

export default VotingPage;
