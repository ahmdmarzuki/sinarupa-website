import React, { useRef, useEffect } from "react";
import BannerOrange from "../../components/BannerOrange";
import bgCard from "/images/bgCard.png";
import Accordion from "../../components/Accordion";
import cardOrange from "/images/cardOrange.png";


const Faq1 = () => {
  const qnaRef = useRef(null);


const qnaList = [
  {
    question: "Apa itu Langkah Sapa?",
    answer: "Langkah Sapa adalah pre-event dari pameran Sintesa Rupa 2025 yang menghadirkan lomba mixed media art. Acara ini mengajak peserta menyelami makna perpisahan sebagai gestur awal menuju perubahan."
  },
  {
    question: "Siapa saja yang boleh mengikuti lomba Mixed Media Art?",
    answer: "Lomba ini terbuka untuk pelajar tingkat SMA, SMK, dan sederajat dari seluruh Indonesia."
  },
  {
    question: "Apa tema lomba tahun ini?",
    answer: "Tema lomba adalah “Perubahan”, yang mencakup berbagai bentuk transisi dalam kehidupan seperti pertumbuhan manusia, perubahan musim, regulasi emosi, hingga metamorfosis makhluk hidup."
  }
  ,
  {
    question: "Kapan dan di mana lomba akan dilaksanakan?",
    answer: "Lomba akan dilaksanakan secara luring (offline) pada Sabtu, 31 Mei 2025, bertempat di Gedung Serba Guna (GSG), ITB Jatinangor, Jawa Barat."
  },
  {
    question: "Apa saja media dan alat yang diperbolehkan digunakan?",
    answer: "Peserta hanya boleh menggunakan cat akrilik, cat poster, oil pastel, dan pilox. Panitia menyediakan kanvas 30 x 30 cm, tetapi peserta wajib membawa alat dan bahan pribadi."
  },
  {
    question: "Berapa biaya pendaftaran lomba?",
    answer: "Biaya pendaftaran adalah Rp 50.000, dengan fasilitas berupa kanvas 30 x 30 cm dan e-sertifikat."
  },
  {
    question: "Apa saja kriteria penilaian lomba?",
    answer: "Penilaian karya didasarkan pada tiga aspek utama: kesesuaian dengan tema, orisinalitas, dan kerapian."
  },
  {
    question: "Apakah peserta boleh membawa referensi saat lomba?",
    answer: "Ya, peserta boleh membawa satu lembar referensi print-out atau sketsa di kertas A4."
  },
  {
    question: "Apakah peserta dapat menggunakan ponsel saat lomba?",
    answer: "Tidak. Seluruh perangkat digital harus disimpan di dalam tas selama lomba berlangsung."
  },
  {
    question: "Bagaimana alur kegiatan pada hari lomba?",
    answer: "Kegiatan dimulai dengan registrasi ulang dan pengarahan, dilanjutkan persiapan dan pengerjaan karya selama 240 menit, lalu diakhiri dengan pengumpulan karya dan dokumentasi."
  },
  {
    question: "Apa saja yang harus dikumpulkan peserta?",
    answer: "Peserta harus mengumpulkan karya kolase abstrak 2D di atas kanvas 30 x 30 cm serta deskripsi singkat karya sesuai format yang disediakan panitia."
  },
  {
    question: "Apa hadiah yang disediakan untuk para pemenang?",
    answer: "Juara I: Rp 1.000.000, Juara II: Rp 600.000, Juara III: Rp 400.000, Juara Favorit: Rp 200.000"
  },
];

  return (
    <div id="faq" className="h-screen w-screen flex flex-col items-center py-4">
      <div className="relative w-full flex justify-center mb-13">
        <BannerOrange className="w-[40vw] flex justify-center items-center">
          <h1 className="font-oddval text-[#4A3D8F] text-5xl">FAQ</h1>
        </BannerOrange>
      </div>

      <div
        className=" relative bg-cover bg-center w-[90vw] h-[400vw] overflow-y-scroll p-6"
        style={{ backgroundImage: `url(${bgCard})`,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        overflowY: "scroll", 
      }}
      >
        <div
       className="grid grid-cols-2 gap-4">
        {qnaList.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
            cardBackground={cardOrange}
          />
        ))}
       </div>
      </div>
    </div>
  );
};

export default Faq1;
