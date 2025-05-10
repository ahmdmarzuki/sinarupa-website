import React from "react";
import podium1 from "/images/podium1.png";
import podium2 from "/images/podium2.png";
import podium3 from "/images/podium3.png";
import BannerOrange from "../../components/BannerOrange";
import Header from "../../components/Header";
import { useMediaQuery } from "../../useMediaQuery";
import AnimatedDiv from "../../components/AnimatedDiv";

const Hadiah1 = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div id="hadiah" className="py-16 md:px-40">
      <AnimatedDiv>
        <div className="flex justify-center mb-18">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <Header text="Hadiah" />
          </BannerOrange>
        </div>
      </AnimatedDiv>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <AnimatedDiv>
          <div className="md:order-2 flex flex-col items-center">
            <div className="mb-2 text-center">
              <h3 className="text-[#4A3D8F] text-3xl font-bold mb-6">
                Juara 1
              </h3>
              <p className="bg-[#4A3D8F] text-[#FAA363] text-2xl font-bold px-6 py-2 mb-12 rounded-none">
                Rp1.000.000
              </p>
            </div>
            <img src={podium1} alt="juara1" className="w-[50vw]" />
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="md:order-1 md:mt-20 flex flex-col items-center">
            <h3 className="text-[#4A3D8F] text-center text-3xl font-bold mb-6">
              Juara 2
            </h3>
            <p className="bg-[#4A3D8F] text-[#FAA363] text-2xl font-bold px-6 py-2 mb-12  rounded-none">
              Rp1.000.000
            </p>
            <img src={podium2} alt="juara2" className="w-[50vw]" />
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="md:order-3 md:mt-20 flex flex-col items-center">
            <h3 className="text-[#4A3D8F] text-center text-3xl font-bold mb-6">
              Juara 3
            </h3>
            <p className="bg-[#4A3D8F] text-[#FAA363] text-2xl font-bold px-6 py-2 mb-12  rounded-none">
              Rp1.000.000
            </p>
            <img src={podium3} alt="juara3" className="w-[50vw]" />
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default Hadiah1;
