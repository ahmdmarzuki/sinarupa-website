import React from "react";
import Podium from "../../components/Podium";
import BannerOrange from "../../components/BannerOrange";

const Hadiah1 = () => {
  return (
   
      <div className="bg-blue-300 h-screen w-screen">
        <div className="relative w-full flex justify-center mb-5 pt-10">
          <BannerOrange className="w-[40vw] h-[5vh] flex justify-center items-center">
            <h1 className="relative font-oddval mb-[10px] text-5xl text-[#4a3d8f] z-10 text-center">Hadiah</h1>
          </BannerOrange>
        </div>

        <div className="relative container mx-auto px-20 pt-15 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-8">
          <Podium></Podium>
        </div>
        <div>
          
        </div>
      </div>
  
  )
};

export default Hadiah1;
