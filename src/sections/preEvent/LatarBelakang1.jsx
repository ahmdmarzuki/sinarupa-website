import React from "react";
import LatarBelakang from "../../components/LatarBelakang";
import LatarBelakangMobile from "../../components/LatarBelakangMobile";
import BannerOrange from "../../components/BannerOrange";

import { useMediaQuery } from "../../useMediaQuery";
import AnimatedDiv from "../../components/AnimatedDiv";
import Header from "../../components/Header";

const LatarBelakang1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <AnimatedDiv>
      <div id="latar-belakang" className="h-30"></div>
      <div className="sm:mt-0 lg:mt-0 flex flex-col items-center mt-60 min-h-screen w-screen">
        <div className="relative w-full flex justify-center mb-17">
          <BannerOrange className="flex justify-center items-center">
            <Header text="Latar Belakang" />
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
