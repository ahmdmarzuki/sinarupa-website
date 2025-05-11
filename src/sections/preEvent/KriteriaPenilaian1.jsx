import React from "react";
import BannerOrange from "../../components/BannerOrange";
import BannerUngu from "../../components/BannerUngu";
import Header from "../../components/Header";
import AnimatedDiv from "../../components/AnimatedDiv";

const KriteriaPenilaian1 = () => {
  return (
    <AnimatedDiv>
      <div className="w-screen flex flex-col justify-center items-center">
        <div className="relative w-full flex flex-col items-center mb-8 pt-90 md:pt-60">
          <BannerOrange className="w-[40vw] h-[5vh] flex justify-center items-center">
            <Header text="Kriteria" />
          </BannerOrange>
        </div>

        <div className="relative px-10 pt-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
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
    </AnimatedDiv>
  );
};

export default KriteriaPenilaian1;
