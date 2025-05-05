import React from "react";
import BannerOrange from "../../components/BannerOrange";
import Header from "../../components/Header";
import { useMediaQuery } from "../../useMediaQuery";
import AnimatedDiv from "../../components/AnimatedDiv";

const Hadiah = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const renderPodium = (layerCount, label, amount, offsetY = 0) => (
    <div
      className=" relative w-full max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] flex flex-col items-center justify-end"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {/* Teks di atas */}
      <div className="mb-2 text-center">
        <h3 className="text-[#FAA363] text-3xl font-bold">{label}</h3>
        <p className="bg-[#4A3D8F] text-[#FAA363] text-2xl font-bold px-6 py-2 rounded-none">
          {amount}
        </p>
      </div>

      {/* Podium stack */}
      <div className="relative w-full h-[300px] md:h-[360px] flex items-end justify-center">
        {[...Array(layerCount)].map((_, index) => (
          <img
            key={index}
            src="/images/Podium Hadiah.png"
            alt={`Layer ${index + 1}`}
            className="absolute w-[126%] h-auto"
            style={{
              top: `${index * 20}px`,
              opacity: 1 - index * 0.1,
              transform: `scale(${0.8 - index * 0.02})`,
              zIndex: 10 - index,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <AnimatedDiv>
      <div className="my-15">
        <div className="relative w-full flex justify-center mb-18">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <Header text="Hadiah" />{" "}
          </BannerOrange>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center h-fit md:py-20">
          {renderPodium(6, "Juara 1", "Rp 1.000.000", isMobile ? 0 : -40)}
          {renderPodium(6, "Juara 2", "Rp 600.000", isMobile ? -100 : 0)}
          {renderPodium(6, "Juara 3", "Rp 400.000", isMobile ? -200 : 40)}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Hadiah;
