
import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import PageWrapper from "../../components/PageWrapper";
import BannerOrange from "../../components/BannerOrange";
import Header from "../../components/Header";

const PanduanTeknisLomba1 = () => {
  return (
    <PageWrapper>
      <section id="panduan" className="min-h-screen w-screen py-30">
        {/* Judul Utama */}

        <div className="flex justify-center py-8">
          <BannerOrange className="flex justify-center items-center">
            <Header text="Panduan Teknis Lomba" />

          </BannerOrange>
        </div>

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
                II. PERATURAN LOMBA
              </p>
              <ul className="list-inside space-y-2 text-base text-[#4A3D8F] pl-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span> Peserta wajib hadir tepat
                  waktu dan melakukan registrasi sebelum lomba dimulai.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Karya akhir tidak boleh
                  melebihi ukuran kanvas 30 × 40 cm.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Peserta wajib menggunakan
                  palet warna yang disediakan panitia dalam hasil akhir karya.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Hanya boleh membawa referensi
                  berupa satu lembar print/sketsa ukuran A4.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Bertanggung jawab atas alat &
                  bahan pribadi. Panitia hanya menyediakan kanvas A3.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Perangkat digital harus
                  disimpan selama lomba berlangsung.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Tidak ada tambahan waktu bagi
                  peserta yang terlambat.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Karya harus orisinal dan tidak
                  mengandung unsur pornografi atau SARA.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Panitia berhak
                  mendiskualifikasi peserta jika melanggar aturan.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Pengunduran diri tidak
                  mendapat pengembalian dana.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span> Keputusan panitia bersifat
                  final dan tidak dapat diganggu gugat.
                </li>
              </ul>
            </div>
          </Banner>
        </div>


        {/* Tombol Menuju Detail */}
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
      </section>
    </PageWrapper>
  );
};

export default PanduanTeknisLomba1;