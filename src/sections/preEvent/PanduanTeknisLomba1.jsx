import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";

const PanduanTeknisLomba1 = () => {

  return (

    <PageWrapper>
      <motion.div id="panduan">
        <div className="flex flex-col items-center gap-7 relative">
          <h1 className="text-6xl font-oddval mb-[80px] text-center text-purple-900">
            PANDUAN TEKNIS LOMBA
          </h1>

          <div className="relative w-[850px]">
            <div className="relative w-full">
              <img
                src="/images/Box Biru 2.png"
                alt="Panduan Teknis"
                className="w-full h-full object-cover absolute inset-0 z-0"
                style={{ borderRadius: 0 }}
              />
              <div
                className="relative z-10 px-12 py-10"
                style={{ fontFamily: "Host Grotesk" }}
              >
                <p className="text-lg font-bold text-purple-900 mb-2">
                  I. KETENTUAN PESERTA
                </p>
                <p className="text-black text-base mb-4">
                  Terbuka untuk tingkat SMA, SMK, dan setara se-Indonesia
                </p>

                <p className="text-lg font-bold text-purple-900 mb-2">
                  II. PERATURAN LOMBA
                </p>
                <ul className="list-disc text-black text-base pl-6 space-y-1">
                  <li>Peserta wajib hadir tepat waktu dan melakukan registrasi sebelum lomba dimulai.</li>
                  <li>Karya akhir tidak boleh melebihi ukuran kanvas 30 × 40 cm.</li>
                  <li>Peserta wajib menggunakan palet warna yang disediakan panitia dalam hasil akhir karya (link pdf copal).</li>
                  <li>Peserta hanya diperkenankan melihat referensi berupa print out atau sketsa dalam satu lembar kertas A4 saat lomba berlangsung.</li>
                  <li>Peserta bertanggung jawab atas alat dan bahan pribadi, panitia hanya menyediakan kanvas A3.</li>
                  <li>Peserta harus menyimpan perangkat digital di dalam tas masing-masing selama lomba.</li>
                  <li>Tidak ada perpanjangan waktu bagi peserta yang terlambat.</li>
                  <li>Karya akhir harus bersifat orisinal dan tidak mengandung unsur pornografi atau SARA.</li>
                  <li>Panitia berhak mendiskualifikasi peserta jika terjadi pelanggaran atau kecurangan.</li>
                  <li>Jika peserta mengundurkan diri, dana tidak akan dikembalikan.</li>
                  <li>Keputusan panitia bersifat final dan tidak dapat diganggu gugat.</li>
                </ul>
              </div>
            </div>
          </div>

          <Link to="/rules">
  <div className="relative w-fit">
    <img
      src="/images/blue-button.png"
      alt="Tombol Panduan"
      className="w-[300px]"
    />
    <p className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-purple-900">
      Panduan Lebih Rinci
    </p>
  </div>
</Link>

        </div>
      </motion.div>
    </PageWrapper>

  );

};

export default PanduanTeknisLomba1;
