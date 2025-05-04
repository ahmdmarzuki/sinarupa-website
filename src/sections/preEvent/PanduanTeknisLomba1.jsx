import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import Banner from "../../components/Banner";


const PanduanTeknisLomba1 = () => {
  return (
    <section id="latar-belakang" className="h-screen w-screen">
      <h1 className="font-oddval text-[#4A3D8F] text-5xl sm:text-5xl flex justify-center top-0 py-8">
        Panduan Teknis Lomba
      </h1>

      <div className="flex justify-center mb-3">
        <Banner className="w-[80vw] ">
        <div className="col-span-3">
        <p className="flex text-justify text-[#4A3D8F]  text-lg font-semibold">I. KETENTUAN PESERTA</p>

        <p className="col-span-2 list-inside space-y-2 text-base text-[#4A3D8F]  pl-6">
  Terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia
</p>

<p className="flex text-justify text-[#4A3D8F]  text-lg font-semibold mt-4">
  II. PERATURAN LOMBA
</p>


        <ul className="col-span-2 list-inside space-y-2 text-base text-[#4A3D8F]  pl-6">
        <li className="flex items-start">
        <span className="mr-3">•</span>
        Peserta wajib hadir tepat waktu dan melakukan registrasi sebelum lomba dimulai.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Karya akhir tidak boleh melebihi ukuran kanvas 30 × 40 cm.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Peserta wajib menggunakan palet warna yang disediakan panitia dalam hasil akhir karya.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Peserta hanya diperkenankan melihat referensi berupa print out atau sketsa dalam satu lembar kertas A4 saat lomba berlangsung.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Peserta bertanggung jawab atas alat dan bahan pribadi, panitia hanya menyediakan kanvas A3.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Peserta harus menyimpan perangkat digital di dalam tas masing-masing selama lomba.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Tidak ada perpanjangan waktu bagi peserta yang terlambat.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Karya akhir harus bersifat orisinal dan tidak mengandung unsur pornografi atau SARA.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Panitia berhak mendiskualifikasi peserta jika terjadi pelanggaran atau kecurangan.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Jika peserta mengundurkan diri, dana tidak akan dikembalikan.
  </li>
  <li className="flex items-start">
    <span className="mr-3">•</span>
    Keputusan panitia bersifat final dan tidak dapat diganggu gugat.
   </li>
   </ul>
          </div>
        </Banner>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          to="/panduan#detailrules"
          className="bg-[#4A3D8F] text-white px-6 py-2 rounded shadow-md hover:bg-[#3b3176] transition"
        >
          PANDUAN LEBIH RINCI
        </Link>
      </div>
    </section>
  );
};

export default PanduanTeknisLomba1;