import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import PageWrapper from "../../components/PageWrapper";

const PanduanPendaftaran1 = () => {
  return (
    <PageWrapper>
      <motion.div
        className="min-h-screen bg-yellow-100 py-10 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/06.png')" }}
      >
        <div className="flex flex-col items-center gap-10">
          {/* Gambar di atas judul */}
          <img
            src="/images/06.png"
            alt="Panduan"
            className="w-32 h-auto mb-4"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-[#4A3D8F] text-center">
            PANDUAN TEKNIS LOMBA
          </h1>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl w-full">
            {/* Box 1 */}
            <motion.div
              className="flex-1 bg-[#a9d8ff] shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#a9d8ff] h-[250px] p-6 text-black text-base flex items-center justify-center">
                <p className="text-center">
                  Lomba terbuka untuk tingkat{" "}
                  <strong>SMA, SMK, dan setara</strong> se-Indonesia.
                </p>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              className="flex-1 bg-[#808080] shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#a9d8ff] h-[250px] p-6 text-black text-base">
                <div className="bg-[#5B5B5B] text-white text-center font-bold py-2 mb-4 rounded">
                  PELAKSANAAN
                </div>
                <p>
                  Pelaksanaan lomba bersifat <strong>individu</strong> dan akan
                  berjalan secara
                  <strong> luring (offline)</strong> pada{" "}
                  <strong>Sabtu, 31 Mei 2025</strong> di
                  <strong> Gedung Serba Guna, ITB Jatinangor</strong>.
                </p>
              </div>
            </motion.div>
          </div>

          <Link to="/rules">
            <button className="bg-[#4A3D8F] text-white px-6 py-2 rounded shadow-md hover:bg-[#3a2f6b] transition duration-300">
              PANDUAN LEBIH RINCI
            </button>
          </Link>
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default PanduanPendaftaran1;
