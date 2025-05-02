import React from 'react'
import BannerOrange from "../../components/BannerOrange";
import bgCard from "/images/bgCard.png";
import cardOrange from "/images/cardOrange.png";
import Banner from "../../components/Banner";


const qnaList = [
  {
    question: "Q: Apa itu Langkah Sapa?",
    answer: "A: Langkah Sapa adalah pre-event dari pameran Sintesa Rupa 2025 yang menghadirkan lomba mixed media art. Acara ini mengajak peserta menyelami makna perpisahan sebagai gestur awal menuju perubahan."
  },
  {
    question: "Q: Siapa saja yang boleh mengikuti lomba Mixed Media Art?",
    answer: "A: Lomba ini terbuka untuk pelajar tingkat SMA, SMK, dan sederajat dari seluruh Indonesia."
  },
  {
    question: "Q: Apa tema lomba tahun ini?",
    answer: "A: Tema lomba adalah “Perubahan”, yang mencakup berbagai bentuk transisi dalam kehidupan seperti pertumbuhan manusia, perubahan musim, regulasi emosi, hingga metamorfosis makhluk hidup."
  }
  ,
  {
    question: "Q:  Kapan dan di mana lomba akan dilaksanakan?",
    answer: "A: Lomba akan dilaksanakan secara luring (offline) pada Sabtu, 31 Mei 2025, bertempat di Gedung Serba Guna (GSG), ITB Jatinangor, Jawa Barat."
  },
  {
    question: "Q: Apa saja media dan alat yang diperbolehkan digunakan?",
    answer: "A: Peserta hanya boleh menggunakan cat akrilik, cat poster, oil pastel, dan pilox. Panitia menyediakan kanvas 30 x 30 cm, tetapi peserta wajib membawa alat dan bahan pribadi."
  },
  {
    question: "Q: Berapa biaya pendaftaran lomba?",
    answer: "A: Biaya pendaftaran adalah Rp 50.000, dengan fasilitas berupa kanvas 30 x 30 cm dan e-sertifikat."
  },
  {
    question: "Q: Apa saja kriteria penilaian lomba?",
    answer: "A: Penilaian karya didasarkan pada tiga aspek utama: kesesuaian dengan tema, orisinalitas, dan kerapian."
  },
  {
    question: "Q: Apakah peserta boleh membawa referensi saat lomba?",
    answer: "A: Ya, peserta boleh membawa satu lembar referensi print-out atau sketsa di kertas A4."
  },
  {
    question: "Q: Apakah peserta dapat menggunakan ponsel saat lomba?",
    answer: "A: Tidak. Seluruh perangkat digital harus disimpan di dalam tas selama lomba berlangsung."
  },
  {
    question: "Q:  Bagaimana alur kegiatan pada hari lomba?",
    answer: "A: Kegiatan dimulai dengan registrasi ulang dan pengarahan, dilanjutkan persiapan dan pengerjaan karya selama 240 menit, lalu diakhiri dengan pengumpulan karya dan dokumentasi."
  },
  {
    question: "Q: Apa saja yang harus dikumpulkan peserta?",
    answer: "A: Peserta harus mengumpulkan karya kolase abstrak 2D di atas kanvas 30 x 30 cm serta deskripsi singkat karya sesuai format yang disediakan panitia."
  },
  {
    question: "Q: Apa hadiah yang disediakan untuk para pemenang?",
    answer: "A: Juara I: Rp 1.000.000, Juara II: Rp 600.000, Juara III: Rp 400.000, Juara Favorit: Voucher Artemedia Rp 200.000"
  },
];

const Faq1 = () => {
  return (

    <div id="faq" className="h-screen w-screen flex flex-col items-center py-4">

      <div className="relative w-full flex justify-center mb-13">
        <BannerOrange className="w-[40vw] flex justify-center items-center">
          <h1 className="font-oddval text-[#4A3D8F] text-4xl">FAQ</h1>
        </BannerOrange>
      </div>

      <div
        className="relative bg-cover bg-center w-[90vw] h-[400vw] overflow-y-scroll p-6"
        style={{ backgroundImage: `url(${bgCard})`,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
       {qnaList.map((item, index) => (
          <div
            key={index}
            className="bg-no-repeat bg-cover w-full h-auto mb-6 p-4 text-left text-[#4A3D8F] font-host font-semibold"
            style={{
              backgroundImage: `url(${cardOrange})`,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              minHeight: "90px",
            }}
          >
            <p className="mb-2">{item.question}</p>
            <p className="text-sm font-normal">{item.answer}</p>
          </div>
        ))}

      </div>
   
    </div>
  )
}

export default Faq1


