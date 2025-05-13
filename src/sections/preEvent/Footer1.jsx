import React from "react";
import logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-[#4a3d8f] text-white text-sm py-12 px-4 flex flex-col gap-6 md:flex-row justify-between items-start mt-10 border-t border-white/30"
    >
      {/* Logo dan Informasi */}
      <div className="flex flex-col items-start text-left mb-4 pl-4 sm:pl-6 md:pl-8">
        <img src={logo} alt="Langkah Sapa Logo" className="w-16 h-16 mb-2" />
        <p>&copy; 2025 Langkah Sapa. All rights reserved.</p>
        <p>TPB FSRD ITB 2024</p>
        <p className="mt-2">
          Lokasi:{" "}
          <a
            href="https://goo.gl/maps/EFNy9GeCZKFMvX3U9"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:underline hover:opacity-80"
          >
            GSG, ITB Jatinangor, Jl Let. Jen. Purn. Dr. (HC). Mashudi No. 1
          </a>
        </p>
      </div>

      {/* Ikon Sosial Media */}
      <div className="flex justify-center lg:justify-end md:justify-end gap-4 w-full px-4 mt-6">
        <a
          href="https://www.instagram.com/sinarupa2025?igsh=MWtvbWxuMm8wbTIxbg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/IG.png"
            alt="Instagram"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>
        <a
          href="https://x.com/tpbfsrditb2024?s=21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/X.png"
            alt="X"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>
        <a
          href="https://www.tiktok.com/@sinarupa25?_t=ZS-8w2XQtbq1DE&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/Tiktok.png"
            alt="TikTok"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>
      </div>

      {/* Navigasi */}
      <div className="flex flex-wrap gap-4 justify-center sm:justify-center md:justify-end text-sm border-t border-white/30 pt-12 mt-4">
        <a
          href="#latarbelakang"
          className="transition duration-200 hover:opacity-80 hover:underline"
        >
          Latar Belakang
        </a>
        <a
          href="#hadiah"
          className="transition duration-200 hover:opacity-80 hover:underline"
        >
          Hadiah
        </a>
        <a
          href="#timeline"
          className="transition duration-200 hover:opacity-80 hover:underline"
        >
          Timeline
        </a>
        <a
          href="#panduan"
          className="transition duration-200 hover:opacity-80 hover:underlinee"
        >
          Panduan
        </a>
        <a
          href="#faq"
          className="transition duration-200 hover:opacity-80 hover:underline"
        >
          FAQ
        </a>
        <a
          href="#hubungikami"
          className="transition duration-200 hover:opacity-80 hover:underline"
        >
          Hubungi Kami
        </a>
        <a
          href="#vote"
          className="transition duration-200 hover:opacity-80 hover:underline"
        >
          Vote
        </a>
        <a
          href="#pendaftaran"
          className="transition duration-200 hover:opacity-80 hover:underline"
        >
          Pendaftaran
        </a>
      </div>
    </footer>
  );
};

export default Footer;
