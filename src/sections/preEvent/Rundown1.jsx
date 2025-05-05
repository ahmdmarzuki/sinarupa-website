import React from "react";
import Rundown2 from "/images/Rundown2.png";
import BannerOrange from "../../components/BannerOrange.jsx";
import Header from "../../components/Header.jsx";
import AnimatedDiv from "../../components/AnimatedDiv.jsx";

const Rundown1 = () => {
  return (
    <AnimatedDiv>
      <div className="h-screen w-screen items-center flex flex-col justify-center">
        <div className="relative w-full flex justify-center">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <Header text="Rundown" />
          </BannerOrange>
        </div>

        <div className="flex justify-center items-center mt-10 mb-10">
          <img
            src={Rundown2}
            className="md:w-[70vw] w-[90vw] object-center"
          ></img>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Rundown1;
