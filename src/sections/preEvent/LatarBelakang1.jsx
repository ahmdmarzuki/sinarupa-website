import React from "react";
import LatarBelakang from "../../components/LatarBelakang";
import LatarBelakangMobile from "../../components/LatarBelakangMobile";
import BannerOrange from "../../components/BannerOrange";

import { useMediaQuery } from "../../useMediaQuery";
import AnimatedDiv from "../../components/AnimatedDiv";

const LatarBelakang1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AnimatedDiv>
      <div id="latar-belakang" className="h-30"></div>
      <div className="sm:mt-0 lg:mt-0 flex flex-col items-center mt-60 min-h-screen w-screen">
        <div className="relative w-full flex justify-center mb-17">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <h1 className="font-oddval text-[#4A3D8F] lg:text-5xl sm:text-4xl">
              Latar Belakang
            </h1>
          </BannerOrange>
        </div>

        <div className="mb-4 items-center">
          {isMobile ? <LatarBelakangMobile /> : <LatarBelakang />}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default LatarBelakang1;
