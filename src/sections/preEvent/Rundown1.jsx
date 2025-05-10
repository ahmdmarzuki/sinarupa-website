import React from "react";
import Rundown2 from "/images/Rundown2.png";
import rundownMobile from "/images/rundownMobile.png";
import BannerOrange from "../../components/BannerOrange.jsx";
import Header from "../../components/Header.jsx";
import AnimatedDiv from "../../components/AnimatedDiv.jsx";
import { useMediaQuery } from "../../useMediaQuery.js";

const Rundown1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <AnimatedDiv>
      <div className="w-screen items-center flex flex-col justify-center py-30">
        <div className="relative w-full flex justify-center">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <Header text="Rundown" />
          </BannerOrange>
        </div>

        <div className="flex justify-center items-center mt-16 mb-10">
          <img
            src={isMobile ? rundownMobile : Rundown2}
            className="w-[75vw] md:w-[70vw] lg:w-[90vw] object-center"
          ></img>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Rundown1;
