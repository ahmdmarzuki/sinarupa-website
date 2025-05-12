import React from "react";
import Header from "../../components/Header";
import AnimatedDiv from "../../components/AnimatedDiv";
import BannerOrange from "../../components/BannerOrange";

const PanduanPendaftaran = ({ className }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 pb-6 min-h-[120px] px-4 sm:px-6 md:px-8 text-[#4a3d8f]">
      {/* Banner Judul */}
      <div className="relative w-full max-w-[724px]">
        {/* Konten */}
        <div className="relative w-full flex justify-center mb-8">
          <AnimatedDiv>
            <BannerOrange className="flex justify-center items-center">
              <Header text="Panduan Pendaftaran" />
            </BannerOrange>
          </AnimatedDiv>
        </div>
      </div>

      {/* Informasi */}
      <section className="w-full flex flex-col items-center px-4 md:px-8 lg:px-20 pt-10 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {/* Biaya Pendaftaran */}
          <AnimatedDiv>
            <div
              className="p-6 rounded-none"
              style={{
                backgroundImage: "url('/images/Box Biru (1).png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="font-bold text-lg mb-2">I. BIAYA PENDAFTARAN</h2>

              <p className="text-sm mb-1">
                Pendaftaran dibuka dengan biaya sebesar{" "}
                <strong>Rp 50.000,00</strong>, semua peserta lomba akan
                mendapatkan:
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>Kanvas 30 x 30 cm</li>
                <li>
                  <em>E-Certificate</em>
                </li>
              </ul>
            </div>
          </AnimatedDiv>

          {/* Dokumen */}
          <AnimatedDiv>
            <div
              className="p-6 rounded-none"
              style={{
                backgroundImage: "url('/images/Box Biru (1).png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="font-bold text-lg mb-2">II. DOKUMEN</h2>

              <p className="text-sm">
                Peserta diwajibkan untuk mengunggah bukti identitas diri (Kartu
                Pelajar atau Surat Keterangan Aktif SMA/sederajat) dan
                membawanya untuk registrasi ulang di hari pelaksanaan lomba.
              </p>
            </div>
          </AnimatedDiv>

          {/* Ketentuan Pendaftaran */}
          <AnimatedDiv>
            <div
              className="p-6 rounded-none"
              style={{
                backgroundImage: "url('/images/Box Biru (1).png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="font-bold text-lg mb-2">
                III. KETENTUAN PENDAFTARAN
              </h2>

              <ul className="list-disc pl-5 text-sm">
                <li>Ikuti akun Instagram @sinarupa2025 dan @tpbfsrditb2024</li>
                <li>Pastikan akun Instagram peserta dalam kondisi publik</li>
                <li>
                  Bagikan unggahan twibbon di <em>insta story</em> dan tag akun
                  @sinarupa2025
                </li>
              </ul>
            </div>
          </AnimatedDiv>

          {/* Link Pendaftaran */}

          <AnimatedDiv>
            <div
              className="p-6 rounded-none"
              style={{
                backgroundImage: "url('/images/Box Ungu.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="font-bold text-lg mb-2 text-[#FAA363]">
                IV. LINK PENDAFTARAN
              </h2>
              <p className="text-sm text-[#FAA363]">
                Pendaftaran dapat dilakukan melalui tautan berikut:
              </p>
              <a
                href="https://bit.ly/LangkahSapa"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm"
                style={{ color: "#FAA363" }}
              >
                https://bit.ly/LangkahSapa
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </section>
    </div>
  );
};

export default PanduanPendaftaran;
