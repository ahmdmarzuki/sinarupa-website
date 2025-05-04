import React from "react";
import BannerOrange from "../../components/BannerOrange";
import timeline from "/images/timeline.png";

const Timeline1 = () => {
  return (
    <div className="h-screen w-screen items-center flex flex-col justify-center">

      <div className="relative w-full flex justify-center">
        <BannerOrange className="w-[40vw] flex justify-center items-center">
          <h1 className="font-oddval text-[#4A3D8F] text-5xl ">Timeline</h1>
        </BannerOrange>
      </div>

    <div className="flex justify-center items-center object-center mt-15">
      <img src={timeline} className="lg:w-[60vw] sm:w-[80vw] flex items-center object-center"></img>
    </div>

    </div>
  );
};

export default Timeline1;
