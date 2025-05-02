
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import PageWrapper from "../../components/PageWrapper";

const PanduanTeknisLomba1 = () => {
  return (
    <PageWrapper>
      <motion.div
      id="panduan"

      >
        <div className="flex flex-col items-center gap-10">

          <h1 className="text-6xl font-oddval mb-[80px] text-center text-purple-900">
          PANDUAN TEKNIS LOMBA
          </h1>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl w-full">

            {/* Box 2 */}
            <motion.div
              className="flex-1 bg-[#808080] shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#a9d8ff] h-[250px] p-6 text-black text-base">
              <div style={{ fontFamily: "Host Grotesk" }} className="bg-[#5B5B5B] text-white text-center py-2 mb-4 rounded">
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

export default PanduanTeknisLomba1;
