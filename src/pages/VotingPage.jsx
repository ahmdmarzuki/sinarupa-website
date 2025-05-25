import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const VotingPage = () => {
  const swiperWrapperRef = useRef(null);

  const adjustMargin = () => {
    const screenWidth = window.innerWidth;

    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.style.marginLeft =
        screenWidth <= 600 ? "-75px" : screenWidth <= 900 ? "-90px" : "-150px";
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-800 text-white">
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Mousewheel, Pagination]}
          grabCursor={true}
          initialSlide={0}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={10}
          speed={1000}
          slideToClickedSlide={true}
          pagination={{ clickable: true }}
          mousewheel={{ thresholdDelta: 30 }}
          onSwiper={(swiper) => {
            swiperWrapperRef.current = swiper.wrapperEl;
            swiper.on("resize", adjustMargin);
          }}
        >
          <SwiperSlide>
            <div className="">
              <div className="card bg-zinc-500">
                <p>tesss</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="card bg-zinc-500">
                <p>tesss</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default VotingPage;
