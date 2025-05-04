import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import PageWrapper from "../../components/PageWrapper";
import { BlueButton } from "../../components/Button";
import BannerOrange from "../../components/BannerOrange";

const PanduanTeknisLomba1 = () => {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/rules");
  };

  return (
    <section id="latar-belakang" className="h-screen w-screen">
    
    <div id="panduan" className="flex justify-center py-8">
      <BannerOrange className="text-5xl sm:text-5xl font-oddval px-8 py-4 text-justify font-host text-[#4A3D8F] pointer-events-none">
        Panduan Teknis Lomba
      </BannerOrange>
    </div>
  
  
      <div className="flex justify-center mb-3">
        <Banner className="w-[80vw]">
          <div className="col-span-3">
            <p className="flex text-justify text-[#4A3D8F] text-lg font-semibold">
              I. KETENTUAN PESERTA
            </p>

            <p className="text-justify font-host text-[#4A3D8F]">
              Terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia
            </p>

            <p className="flex text-justify text-[#4A3D8F] text-lg font-semibold mt-4">
              II. PERATURAN LOMBA
            </p>

            <ul className="col-span-2 list-inside space-y-2 text-base text-[#4A3D8F] pl-6">
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

      {/* Tombol navigasi */}
      <div className="flex justify-center mt-4">
        <BlueButton label="Panduan Teknis" navigateTo="/rules" />
      </div>
    </section>
  );

};

export default PanduanTeknisLomba1;
