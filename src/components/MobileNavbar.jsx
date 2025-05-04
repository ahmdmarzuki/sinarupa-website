import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BlueButton } from "./Button";
import logo from "/images/logo.png";
import langkahSapa from "/images/langkah-sapa.png";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const navBarList = [
    { title: "Latar Belakang", href: "latar-belakang" },
    { title: "Hadiah", href: "hadiah" },
  ];
  const burgerMenuList = [
    { title: "Latar Belakang", href: "latar-belakang" },
    { title: "Hadiah", href: "hadiah" },
    { title: "Timeline", href: "timeline" },
    { title: "Panduan", href: "panduan" },
    { title: "FAQ", href: "faq" },
    { title: "Hubungi Kami", href: "footer" },
  ];

  return (
    <div className="fixed flex flex-col w-screen z-50">
      <div className="bg-[url('/images/bar1.png')] bg-cover bg-top bg-no-repeat flex justify-between min-h-[10vh] px-[20px] items-center">
        <div className="flex flex-row items-center relative h-[5vh] gap-4">
          <img src={logo} className="h-6 aspect-square" />
        </div>
        <div className="flex gap-2">
          <BlueButton label="Vote Sekarang" navigateTo="/vote" />
          <BlueButton label="Pendaftaran" navigateTo="/pendaftaran" />
        </div>
      </div>

      <div className="bg-[url('/images/bar2.png')] bg-cover bg-top bg-no-repeat min-h-[7vh] px-[20px] flex justify-end items-center">
        {navBarList.map((nav, index) => {
          return (
            <motion.div
              key={index}
              className="px-[16px] py-[10px] transform skew-x-[-15deg] text-[#FBD185]"
              whileHover={{
                backgroundColor: "#48368A80",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => {
                const target = document.getElementById(nav.href);
                target?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="transform skew-x-[15deg]">
                <a className="text-sm cursor-pointer font-medium transform skew-x-[30deg]">
                  {nav.title}
                </a>
              </div>
            </motion.div>
          );
        })}

        <Hamburger color="white" size={18} toggle={setOpen} toggled={open} />
      </div>
      <AnimatePresence>
        {open && (
          <div className="w-screen  flex justify-end">
            <motion.div
              initial={{ x: 48, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: 48, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="w-fit bg-blue-200 py-4 m-2 rounded-md bg-[url('/images/bar2.png')] bg-no-repeat bg-cover bg-top"
            >
              {burgerMenuList.map((nav, index) => (
                <motion.div
                  initial={{ x: 48, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{ x: 48, opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  key={index}
                  onClick={() => {
                    const target = document.getElementById(nav.href);
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-end pl-10 pr-8 py-2 active:bg-gray-400 text-[#FBD185]"
                  whileHover={{
                    backgroundColor: "#48368A80",
                  }}
                >
                  {nav.title}
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
