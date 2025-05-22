import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css";
import "./style.css";

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

const VotingPage = () => {
  const swiperWrappedRef = useRef(null);

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

  return (
    <main>
      <div className="container">
        <Swiper
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
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={slide.imgSrc} alt={slide.title} />

              <div className="content">
                <div className="title">
                  <h1>{slide.title}</h1>
                </div>
                <div className="text-box">
                  <p>{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default VotingPage;
