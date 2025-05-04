import React from "react";
import Rundown2 from "/images/Rundown2.png";
import BannerOrange from "../../components/BannerOrange.jsx";


const Rundown1 = () => {
  return (
    <div className="h-screen w-screen">

      <div className="relative w-full flex justify-center">
        <BannerOrange className="w-[40vw] flex justify-center items-center">
          <h1 className="font-oddval text-[#4A3D8F] text-5xl">Rundown</h1>
        </BannerOrange>
      </div>

    <div className="flex justify-center items-center h-screen">
      <img src={Rundown2} className="lg:w-[75vw] sm:w-[90vw] flex"></img>
    </div>

    </div>
  );
};

export default Rundown1;
