import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="absolute h-screen w-screen flex flex-col justify-center items-center inset-0 bg-[#000000BF] z-20 gap-8">
      <ClipLoader color="#36d7b7" size={100} />
    </div>
  );
};

export default Loading;
