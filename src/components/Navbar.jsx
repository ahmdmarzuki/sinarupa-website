import React from "react";
import { Link } from "react-router-dom";
import { BlueButton } from "./Button";
import logo from "/images/logo.png";
import langkahSapa from "/images/langkah-sapa.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const navList = [
    { title: "Latar Belakang", href: "/latar-belakang" },
    { title: "Hadiah", href: "/hadiah" },
    { title: "Timeline", href: "/timeline" },
    { title: "Panduan", href: "/panduan" },
    { title: "FAQ", href: "/faq" },
    { title: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[url('/images/bar1.png')] bg-cover bg-top bg-no-repeat flex justify-between items-center px-20 py-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <img src={langkahSapa} alt="Langkah Sapa" className="h-10 object-contain" />
        </div>
        <div className="flex gap-4">
          <BlueButton label="Vote Sekarang" navigateTo="/vote" />
          <BlueButton label="Pendaftaran" navigateTo="/pendaftaran" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[url('/images/bar2.png')] bg-cover bg-top bg-no-repeat flex justify-end items-center px-20 h-[7vh]">
        {navList.map((nav) => (
          <motion.div
            key={nav.title}
            className="px-4 py-2 transform skew-x-[-15deg] text-[#FBD185]"
            whileHover={{ backgroundColor: "#48368A80" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="transform skew-x-[15deg]">
              <Link
                to={nav.href}
                className="cursor-pointer font-medium text-sm sm:text-base"
              >
                {nav.title}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
