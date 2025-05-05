import React from "react";
import BannerOrange from "../../components/BannerOrange";
import Header from "../../components/Header";

const RincianLomba1 = () => {
  return (
    <div className="md:h-screen w-screen flex flex-col justify-center items-center">
      <div className="relative w-full flex justify-center mb-5">
        <BannerOrange className="w-[40vw] h-[5vh] flex justify-center items-center">
          <Header text="Rincian Lomba" />
        </BannerOrange>
      </div>
      <div className="relative container mx-auto px-5 pt-15 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-8">
        {/* Lokasi */}
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl text-[#4a3d8f] font-host font-bold">
            Lokasi
          </div>
          <img
            src="/images/lokasi.png"
            className="w-[30vw] object-contain max-w-md"
          />
          <div className="text-3xl text-[#4a3d8f] font-host font-bold -mt-10 whitespace-pre-line">
            Gedung Serba Guna,{"\n"} ITB Jatinangor
          </div>
        </div>

        {/* Waktu */}
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl text-[#4a3d8f] font-host font-bold">
            Waktu
          </div>
          <img src="/images/waktu.png" className="object-contain max-w-md" />
          <div className="text-3xl text-[#4a3d8f] font-host font-bold -mt-10">
            240 menit
          </div>
        </div>

        {/* Dimensi */}
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl text-[#4a3d8f] font-host font-bold">
            Dimensi
          </div>
          <img src="/images/dimensi.png" className="object-contain max-w-md" />
          <div className="text-3xl text-[#4a3d8f] font-host font-bold -mt-10 whitespace-pre-line">
            Canvas{"\n"}30x30cm
          </div>
        </div>
      </div>
    </div>
  );
};

export default RincianLomba1;
