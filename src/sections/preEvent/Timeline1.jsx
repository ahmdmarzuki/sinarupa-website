import React from "react";
import BannerOrange from "../../components/BannerOrange";
import timeline from "/images/timeline.png";
import timelineMobile from "/images/timelineMobile.png";
import Header from "../../components/Header";
import AnimatedDiv from "../../components/AnimatedDiv";
import { useMediaQuery } from "../../useMediaQuery";

const Timeline1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <AnimatedDiv>
      <div id="timeline" className="h-30" />
      <div className="w-screen items-center flex flex-col justify-center">
        <div className="relative w-full flex justify-center">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <Header text="Timeline" />
          </BannerOrange>
        </div>

        <div className="flex justify-center items-center object-center mt-15">
          <img
            src={isMobile ? timelineMobile : timeline}
            className="md:w-[60vw] w-[80vw] flex items-center object-center"
          ></img>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Timeline1;
