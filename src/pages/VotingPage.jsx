import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./style.css";

const VotingPage = () => {
  const swiperWrapperRef = useRef(null);

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

  return (
    <div className="relative flex justify-center items-center flex-col h-[100vh] *:p-0 *:m-0">
      <div className="w-[90%]">
        <Swiper
          // install Swiper modules
          modules={[Mousewheel, Pagination]}
          grabCursor={true}
          initialSlide={0}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={10}
          speed={1000}
          slideToClickedSlide={true}
          pagination={{ clickable: true }}
          mousewheel={{ thresholdDelta: 30 }}
          onSwiper={(swiper) => {
            swiperWrapperRef.current = swiper.wrapperEl;
            // swiper.on("resize", adjustMargin);
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900 flex justify-center items-center h-[100%] text-white gap-8">
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="w-[40%] aspect-square"
                />
                <p>{slide.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VotingPage;
