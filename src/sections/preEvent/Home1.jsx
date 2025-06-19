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
        <button
          onClick={() => (window.location.href = "/voting")}
          className="relative w-[240px] md:w-[340px] transition-transform transform hover:scale-105"
        >
          <img
            src="/images/blue-button.png"
            alt="Tombol Voting"
            className="w-full"
          />
          <div className="font-oddval absolute inset-0 flex items-center justify-center text-[#4A3D8F] font-semibold text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem]">
            Vote Karya
          </div>
        </button>
      </div>
    </AnimatedDiv>
  );
};

export default Home1;
