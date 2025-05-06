import React from "react";
import Header from "../../components/Header";
import AnimatedDiv from "../../components/AnimatedDiv";

const PanduanPendaftaran = ({ className }) => {
  return (
    <AnimatedDiv>
      <div className="w-full flex flex-col justify-center items-center pt-10 pb-6 min-h-[120px] px-4 sm:px-6 md:px-8 text-[#4a3d8f]">
        {/* Banner Judul */}
        <div className="relative w-full max-w-[724px]">
          {/* Layer belakang 1 */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "url('/images/Box Orange.png')",
              backgroundSize: "cover",
              opacity: 0.6,
              zIndex: 0,
            }}
          />
          {/* Layer belakang 2 */}
          <div
            className="absolute -left-2 -bottom-2 w-full h-full"
            style={{
              backgroundImage: "url('/images/Box Orange.png')",
              backgroundSize: "cover",
              opacity: 0.8,
              zIndex: 0,
            }}
          />
          {/* Konten */}
          <div
            className="relative flex justify-center  z-10 py-4"
            style={{
              backgroundImage: "url('/images/Box Orange.png')",
              backgroundSize: "cover",
            }}
          >
            <h1
              className={`font-oddval text-2xl sm:text-3xl md:text-4xl text-center w-full ${className}`}
            >
              Panduan Pendaftaran
            </h1>
          </div>
        </div>

        {/* Informasi */}
        <section className="w-full flex flex-col items-center px-4 md:px-8 lg:px-20 pt-10 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
            {/* Biaya Pendaftaran */}
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

            {/* Dokumen */}
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

            {/* Ketentuan Pendaftaran */}
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

            {/* Link Pendaftaran */}

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
          </div>
        </section>
      </div>
    </AnimatedDiv>
  );
};

export default PanduanPendaftaran;
