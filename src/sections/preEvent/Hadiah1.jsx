import React from "react";
import tes from "/images/tes.png";
import Banner from "../../components/Banner";

const Hadiah1 = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-oddval mb-[80px]">Hadiah</h1>
      <div className="grid grid-cols-4 bg-white w-[80vw] h-60 ">
        <div className="bg-blue-200 w-full h-full" />
        <div className="bg-red-300 w-full h-full" />
      </div>
    </div>
  );
};

export default Hadiah1;
