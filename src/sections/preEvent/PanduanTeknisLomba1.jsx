import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import PageWrapper from "../../components/PageWrapper";
import BannerOrange from "../../components/BannerOrange";
import Header from "../../components/Header";
import AnimatedDiv from "../../components/AnimatedDiv";

const PanduanTeknisLomba1 = () => {
  return (
    <PageWrapper>
      <section id="panduan" className="min-h-screen w-screen py-15 my-15">
        {/* Judul Utama */}

        <div className="flex justify-center pt-20 pb-16">
          <AnimatedDiv>
            <BannerOrange className="flex justify-center items-center">
              <Header text="Panduan Teknis Lomba" />
            </BannerOrange>
          </AnimatedDiv>
        </div>

        <AnimatedDiv>
          <div className="flex justify-center mb-3">
            <Banner className="w-[60vw] md:w-[80vw]">
              <div className="col-span-3">
                <p className="text-justify text-[#4A3D8F] text-lg font-semibold">
                  I. KETENTUAN PESERTA
                </p>
                <p className="text-justify font-host text-[#4A3D8F]">
                  Terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia.
                </p>

                <p className="text-justify text-[#4A3D8F] text-lg font-semibold mt-4">
                  II. KETENTUAN KARYA
                </p>
                <ul className="list-inside space-y-2 text-base text-[#4A3D8F] pl-6">
                  <li className="">
                    <span className="mr-3">•</span> Karya mengangkat teknik{" "}
                    <b>Visual Abstrak.</b>
                  </li>
                  <li className="">
                    <span className="mr-3">•</span> Peserta wajb memanfaatkan
                    kanvas 30 x 30 cm, kertas A4 dan medium.
                  </li>
                  <li className="flex">
                    <span className="mr-3">•</span> Peserta wajib menggunakan
                    media campuran dangan pilihan media terbatas yang ditentukan
                    panitia. Panitia tidak menyediakan media atau alat
                    menggambar/lukis dalam bentuk apapun selain kanvas.
                  </li>
                  <li className="">
                    <span className="mr-3">•</span> Karya akhir tidak boleh
                    melebihi dimensi <b>30 cm x 30 cm x 1 cm</b> di atas kanvas.
                  </li>
                </ul>
              </div>
            </Banner>
          </div>
        </AnimatedDiv>

        {/* Tombol Menuju Detail */}
        <AnimatedDiv>
          <div className="flex justify-center py-6">
            <button
              onClick={() => (window.location.href = "/rules")}
              style={{
                backgroundImage: "url('/images/Box Ungu.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "200px", // atau sesuaikan
                height: "50px", // atau sesuaikan
              }}
              className="text-white font-semibold transition flex items-center justify-center"
            >
              Lihat Panduan Lengkap
            </button>
          </div>
        </AnimatedDiv>
      </section>
    </PageWrapper>
  );
};

export default PanduanTeknisLomba1;
