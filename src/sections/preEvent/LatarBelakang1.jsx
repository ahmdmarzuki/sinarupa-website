import React from "react";
import Banner from "../../components/Banner";
import logo from "/images/logo.png";
import BannerOrange from "../../components/BannerOrange";
import Header from "../../components/Header";
import AnimatedDiv from "../../components/AnimatedDiv";

const LatarBelakang1 = () => {
  return (
    <AnimatedDiv>
      <div
        id="latar-belakang"
        className="h-screen w-screen flex flex-col items-center py-17"
      >
        <div className="relative w-full flex justify-center mb-17">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <Header text="Latar Belakang" />{" "}
          </BannerOrange>
        </div>

        <div className="mb-4 items-center">
          <Banner className="w-[60vw] md:w-[80vw] grid grid-cols-3 py-10 items-center">
            {/* Row 1 */}

            <div className="col-span-2">
              <p className="text-justify font-host text-[#4A3D8F] md:leading-loose">
                <b>Langkah Sapa</b> hadir sebagai titik awal dari setiap
                perubahan. Pengunjung diajak untuk keluar dari zona nyaman dan
                menyelami dunia baru yang penuh ketidakpastian dan potensi.
                Dengan menghadirkan lomba mixed media art, kami mengajak peserta
                untuk menuangkan kreativitas dan mendalami proses perpisahan
                dengan{" "}
                <b>
                  menciptakan suatu karya yang menggambarkan perjalanan penuh
                  perubahan.
                </b>{" "}
                Langkah Sapa mempersembahkan ruang terbuka kepada para
                pengunjung untuk membenamkan diri pada perpisahan sebagai gestur
                awal untuk melangkah menuju transisi pada suatu perubahan.
              </p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img src={logo} className="w-[15vw] h-[15vw]" />
            </div>
          </Banner>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default LatarBelakang1;
