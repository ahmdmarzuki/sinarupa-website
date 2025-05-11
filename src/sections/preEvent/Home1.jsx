import React from "react";
import AnimatedDiv from "../../components/AnimatedDiv";

const Home1 = () => {
  return (
    <AnimatedDiv>
      <div
        id="home"
        className="w-full h-[100vh]  md:h-[130dvh] px-6 lg:pt-20 pb-10 flex flex-col items-center justify-center"
      >
        {/* TITLE: LANGKAH SAPA */}
        <img
          src="/images/Langkah Sapa.svg"
          alt="Langkah Sapa"
          className="w-[80%] sm:w-[90%] md:w-[80%] lg:w-[60%] max-w-[650px] mb-6"
        />

        {/* Tombol Gambar */}
        <a
          href="https://bit.ly/LangkahSapa"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[200px] sm:w-[240px] md:w-[260px] lg:w-[312px] transition-transform transform hover:scale-105"
        >
          <img
            src="/images/blue-button.png"
            alt="Tombol Daftar"
            className="w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center text-[#4A3D8F] font-semibold text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">
            Daftar Sekarang
          </div>
        </a>
      </div>
    </AnimatedDiv>
  );
};

export default Home1;
