import React from "react";
import LatarBelakang from "../../components/LatarBelakang";
import LatarBelakangMobile from "../../components/LatarBelakangMobile";
import BannerOrange from "../../components/BannerOrange";
import { useMediaQuery } from "../../useMediaQuery";

const LatarBelakang1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (

    <div className="sm:mt-25 lg:mt-10 w-screen flex flex-col items-center py-17">
      <div className="relative w-full flex justify-center mb-17">
              <BannerOrange className="w-[40vw] flex justify-center items-center">
                <h1 className="font-oddval text-[#4A3D8F] lg:text-5xl sm:text-4xl">Latar Belakang</h1>
              </BannerOrange>
        </div>


      <div className="mb-4 items-center">
       {isMobile ? <LatarBelakangMobile /> : <LatarBelakang />}
      </div>
    </div>
  );
};

export default LatarBelakang1;
