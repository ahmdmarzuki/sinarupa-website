import React from "react";
import BannerOrange from "../../components/BannerOrange";
import Header from "../../components/Header";
import { useMediaQuery } from "../../useMediaQuery";

const RincianLomba1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="md:h-screen w-screen flex flex-col justify-center items-center">
      <div className="relative w-full flex justify-center mb-5">
        <BannerOrange className="flex justify-center items-center">
          <Header text="Rincian Lomba" />
        </BannerOrange>
      </div>
      <div className="relative container mx-auto px-20 pt-15 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-8">
        {/* Lokasi */}
        <div
          className="flex flex-col items-center text-center gap-6"
          style={{ transform: isMobile ? "translateX(-80px)" : "" }}
        >
          <div className="text-3xl md:text-5xl text-[#4a3d8f] font-host font-bold">
            Lokasi
          </div>
          <img
            src="/images/lokasi.png"
            className="object-contain w-[40vw] md:w-[19vw] max-w-full h-auto"
          />
          <div className="text-lg md:text-3xl text-[#4a3d8f] font-host font-bold whitespace-pre-line">
            Gedung Serba Guna,{"\n"} ITB Jatinangor
          </div>
        </div>

        {/* Waktu */}
        <div
          className="flex flex-col items-center text-center gap-6"
          style={{ transform: isMobile ? "translateX(80px)" : "" }}
        >
          <div className="text-3xl md:text-5xl text-[#4a3d8f] font-host font-bold">
            Waktu
          </div>
          <img
            src="/images/waktu.png"
            className="object-contain w-[40vw] md:w-[20vw] max-w-full h-auto"
          />
          <div className="text-lg md:text-3xl text-[#4a3d8f] font-host font-bold whitespace-pre-line">
            240 menit
          </div>
        </div>

        {/* Dimensi */}
        <div
          className="flex flex-col items-center text-center gap-6"
          style={{ transform: isMobile ? "translateX(-80px)" : "" }}
        >
          <div className="text-3xl md:text-5xl text-[#4a3d8f] font-host font-bold">
            Dimensi
          </div>
          <img
            src="/images/dimensi.png"
            className="object-contain w-[40vw] md:w-[17vw] max-w-full h-auto"
          />
          <div className="text-lg md:text-3xl text-[#4a3d8f] font-host font-bold whitespace-pre-line">
            Canvas{"\n"}30x30cm
          </div>
        </div>
      </div>
    </div>
  );
};

export default RincianLomba1;
