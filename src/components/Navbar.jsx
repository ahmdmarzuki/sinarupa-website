import React from "react";
import { BlueButton } from "./Button";
import logo from "/images/logo.png";
import langkahSapa from "/images/langkah-sapa.png";
import { motion } from "motion/react";

const Navbar = () => {
  const navList = [
    { title: "Latar Belakang", href: "#" },
    { title: "Hadiah", href: "#" },
    { title: "Timeline", href: "#" },
    { title: "Panduan", href: "#" },
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
        <div className="flex flex-row gap-4">
          <BlueButton label="Vote Sekarang" navigateTo="/vote" />
          <BlueButton label="Pendaftaran" />
        </div>
      </div>

      <div className="bg-[url('/images/bar2.png')] bg-cover bg-top bg-no-repeat min-h-[7vh] px-[80px] flex justify-end items-center">
        {navList.map((nav, index) => {
          return (
            <motion.div
              key={index}
              className="px-[16px] py-[10px] transform skew-x-[-15deg] text-[#FBD185]"
              whileHover={{
                backgroundColor: "#48368A80",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="transform skew-x-[15deg]">
                <a className="cursor-pointer font-medium transform skew-x-[30deg]">
                  {nav.title}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
