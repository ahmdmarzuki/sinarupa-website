import React, { useRef, useEffect } from "react";
import BannerOrange from "../../components/BannerOrange";
import bgCard from "/images/bgCard.png";
import Accordion from "../../components/Accordion";
import cardOrange from "/images/cardOrange.png";
import Header from "../../components/Header";
import AnimatedDiv from "../../components/AnimatedDiv";

const Faq1 = () => {
  const qnaRef = useRef(null);

  const qnaList1 = [
    {
      question: "Apa itu Langkah Sapa?",
      answer:
        "Langkah Sapa adalah pre-event dari pameran Sinarupa 2025 yang menghadirkan lomba mixed media art. Acara ini mengajak peserta menyelami makna perpisahan sebagai gestur awal menuju perubahan.",
    },
    {
      question: "Siapa saja yang boleh mengikuti lomba Mixed Media Art?",
      answer:
        "Lomba ini terbuka untuk pelajar tingkat SMA, SMK, dan sederajat dari seluruh Indonesia.",
    },
    {
      question: "Apa tema lomba tahun ini?",
      answer:
        "Tema ini merujuk pada kondisi transisi atau peralihan yang terjadi pada seseorang ataupun sesuatu.",
    },
    {
      question: "Kapan dan di mana lomba akan dilaksanakan?",
      answer:
        "Lomba akan dilaksanakan secara luring (offline) pada Sabtu, 31 Mei 2025, bertempat di Gedung Serba Guna (GSG), ITB Jatinangor, Jawa Barat.",
    },
    {
      question: "Apa saja ketentuan media lomba?",
      answer: (
        <>
          <p>
            Peserta diwajibkan untuk membawa alat dan bahan pribadi yang
            mendukung pelaksanaan lomba. Peserta diwajibkan menggunakan minimal
            satu media dari tiap kategori media yang dipaparkan:
          </p>
          <br />
          <p>1. Media A</p>
          <ul className="list-disc pl-6">
            <li>Cat akrilik</li>
            <li>Cat poster</li>
            <li>Oil pastel</li>
            <li>Pilox</li>
          </ul>
          <br />
          <p>2. Media B (lembaran)</p>
          <ul className="list-disc pl-6">
            <li>Plastik</li>
            <li>Kertas tekstur</li>
            <li>Kain perca</li>
            <li>Kardus</li>
            <li>Koran</li>
            <li>Majalah</li>
            <li>Kemasan makanan</li>
          </ul>
        </>
      ),
    },
    {
      question: "Berapa biaya pendaftaran lomba?",
      answer:
        "Biaya pendaftaran adalah Rp 50.000, dengan fasilitas berupa kanvas 30 x 30 cm dan e-sertifikat.",
    },
  ];

  const qnaList2 = [
    {
      question: "Apa saja kriteria penilaian lomba?",
      answer:
        "Penilaian karya didasarkan pada tiga aspek utama: kesesuaian dengan tema, orisinalitas, dan kerapian.",
    },
    {
      question: "Apakah peserta boleh membawa referensi saat lomba?",
      answer:
        "Ya, peserta boleh membawa satu lembar referensi print-out atau sketsa di kertas A4.",
    },
    {
      question: "Apakah peserta dapat menggunakan ponsel saat lomba?",
      answer:
        "Tidak. Seluruh perangkat digital harus disimpan di dalam tas selama lomba berlangsung.",
    },
    {
      question: "Bagaimana alur kegiatan pada hari lomba?",
      answer:
        "Kegiatan dimulai dengan registrasi ulang dan pengarahan, dilanjutkan persiapan dan pengerjaan karya selama 240 menit, lalu diakhiri dengan pengumpulan karya dan dokumentasi.",
    },
    {
      question: "Apa saja yang harus dikumpulkan peserta?",
      answer:
        "Peserta harus mengumpulkan karya kolase abstrak 2D di atas kanvas 30 x 30 cm serta deskripsi singkat karya sesuai format yang disediakan panitia.",
    },
    {
      question: "Apa hadiah yang disediakan untuk para pemenang?",
      answer:
        "Juara I: Rp 1.000.000, Juara II: Rp 600.000, Juara III: Rp 400.000, Juara Favorit: Rp 200.000",
    },
  ];

  return (
    <AnimatedDiv>
      <div id="faq" className="w-screen flex flex-col items-center py-4">
        <div className="relative w-full flex justify-center mb-13">
          <BannerOrange className="w-[40vw] flex justify-center items-center">
            <Header text="FAQ" />
          </BannerOrange>
        </div>

        <div
          className="
      relative bg-cover bg-center w-[90vw] p-8"
          style={{
            backgroundImage: `url(${bgCard})`,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            // overflowY: "scroll",
          }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              {qnaList1.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  cardBackground={`url(${bgCard})`}
                />
              ))}
            </div>
            <div>
              {qnaList2.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default Faq1;
