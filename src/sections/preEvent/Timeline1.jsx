import React from "react";
import BannerOrange from "../../components/BannerOrange";
import timeline from "/images/timeline.png";

const Timeline1 = () => {
  return (
    <div className="h-screen w-screen">

      <div className="relative w-full flex justify-center">
        <BannerOrange className="w-[40vw] flex justify-center items-center">
          <h1 className="font-oddval text-[#4A3D8F] text-5xl">Timeline</h1>
        </BannerOrange>
      </div>

    <div className="flex justify-center items-center h-screen">
      <img src={timeline} className="lg:w-[75vw] sm:w-[100vw] flex"></img>
    </div>

    </div>
  );
};

export default Timeline1;
