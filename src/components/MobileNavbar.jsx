import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlueButton } from "./Button";
import logo from "/images/logo.png";
import langkahSapa from "/images/langkah-sapa.png";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const burgerMenuList = [
    { title: "Latar Belakang", href: "latar-belakang" },
    { title: "Hadiah", href: "hadiah" },
    { title: "Timeline", href: "timeline" },
    { title: "Panduan", href: "panduan" },
    { title: "FAQ", href: "faq" },
    { title: "Hubungi Kami", href: "footer" },
  ];

  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHide(true); // Scroll ke bawah
      } else {
        setHide(false); // Scroll ke atas
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed flex flex-col w-screen z-50">
      <div className="bg-[url('/images/bar1.png')] bg-cover bg-top bg-no-repeat flex justify-between min-h-[10vh] px-[20px] items-center">
        <div
          onClick={() => {
            const target = document.getElementById("home");
            target?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-row items-center relative h-[5vh] gap-4"
        >
          <img src={logo} className="h-10 aspect-square" />
        </div>
        <div className="flex">
          <a
            href="https://bit.ly/LangkahSapa"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[200px] sm:w-[240px] md:w-[260px] lg:w-[312px] transition-transform transform -right-2"
          >
            <img
              src="/images/blue-button.png"
              alt="Tombol Daftar"
              className="w-full"
            />
            <div className="font-oddval absolute inset-0 flex items-center justify-center text-[#4A3D8F] font-semibold text-[0.86rem]">
              Daftar Sekarang
            </div>
          </a>
        </div>
      </div>

      <div className="bg-[url('/images/bar2.png')] bg-cover bg-top bg-no-repeat h-[5vh] px-[20px] flex justify-end items-center">
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
