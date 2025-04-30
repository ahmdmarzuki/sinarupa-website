import React from "react";
import { Link } from "react-router-dom";
import { BlueButton } from "./Button";
import logo from "/images/logo.png";
import langkahSapa from "/images/langkah-sapa.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const navList = [
    { title: "Latar Belakang", href: "#" },
    { title: "Hadiah", href: "#" },
    { title: "Timeline", href: "/timeline" },
    { title: "Panduan", href: "/panduan" },
    { title: "FAQ", href: "#" },
    { title: "Hubungi Kami", href: "#" },
  ];

  return (

    <div className="fixed flex flex-col w-screen z-50">
      <div className="bg-[url('/images/bar1.png')] bg-cover bg-top bg-no-repeat flex justify-between min-h-[10vh] px-[80px] items-center">
        <div className="flex flex-row items-center relative h-[20%] gap-4">
          <img src={logo} className="h-10 aspect-square" />
          <img src={langkahSapa} className="h-10 aspect-auto" />

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
