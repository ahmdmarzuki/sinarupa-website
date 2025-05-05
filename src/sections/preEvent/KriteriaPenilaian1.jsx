import React from "react";
import BannerOrange from "../../components/BannerOrange";
import BannerUngu from "../../components/BannerUngu";
import Header from "../../components/Header";

const KriteriaPenilaian1 = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="relative w-full flex flex-col items-center mb-8 pt-90 md:pt-40">
        <BannerOrange className="w-[40vw] h-[5vh] flex justify-center items-center">
          <Header text="Kriteria" />
        </BannerOrange>
      </div>

      <div className="relative container mx-auto mr-15 px-10 pt-10 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:gap-10">
        {/* Tema */}
        <BannerUngu className="w-full h-[auto] md:w-[15vw] flex flex-col items-center text-center">
          <div className="text-xl md:text-4xl text-[#fbf5ae] font-oddval mt-4 whitespace-pre-line object-contain">
            Tema
          </div>

          <div className="text-lg md:text-2xl text-[#f9b363] font-oddval mt-5 whitespace-pre-line object-contain text-center">
            Kesesuaian {"\n"} pengembangan {"\n"} konsep karya {"\n"} dengan
            tema utama
          </div>
        </BannerUngu>

        {/* Orisinalitas */}
        <BannerUngu className="w-full h-[auto] md:w-[15vw] flex flex-col items-center text-center">
          <div className="text-xl md:text-4xl text-[#fbf5ae] font-oddval mt-4 whitespace-pre-line object-contain">
            Orisinalitas
          </div>
          <div className="text-lg md:text-2xl text-[#f9b363] font-oddval mt-5 whitespace-pre-line object-contain text-center">
            Keunikan karya {"\n"} dalam menyajikan {"\n"} konsep dan ide
          </div>
        </BannerUngu>

        {/* Kerapian */}
        <BannerUngu className="w-full h-[auto] md:w-[15vw] flex flex-col items-center text-center">
          <div className="text-xl md:text-4xl text-[#fbf5ae] font-oddval mt-4 whitespace-pre-line object-contain">
            Kerapian
          </div>

          <div className="text-lg md:text-2xl text-[#f9b363] font-oddval mt-5 whitespace-pre-line object-contain text-center">
            Kebersihan dari hasil {"\n"} karya serta proporsi {"\n"} dari
            komposisi
          </div>
        </BannerUngu>
      </div>
    </div>
  );
};

export default KriteriaPenilaian1;
