import React, { useEffect, useState } from "react";
import { BlueButton } from "./Button";
import logo from "/images/logo.png";
import langkahSapa from "/images/langkah-sapa.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = [
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

  function scrollOffset(id, offset = 100) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className="fixed flex flex-col w-screen z-50 select-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: hide ? "-100%" : 0, // Membuat navbar bergerak ke atas saat di-scroll
        }}
        transition={{ duration: hide ? 0.3 : 0.5 }}
        className="bg-[url('/images/bar1.png')] bg-cover bg-top bg-no-repeat flex justify-between min-h-[10vh] px-[80px] items-center"
      >
        <div
          className="flex flex-row items-center relative h-[20%] gap-4"
          onClick={() => {
            const target = document.getElementById("home");
            target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={logo} className="h-10 aspect-square" />
          <img src={langkahSapa} className="h-10 aspect-auto" />
        </div>
        <div className="flex gap-4">
          <a
            href="https://voting.sinarupa.com"
            className="relative px-8 py-3 h-min text-md font-semibold text-purple-800 bg-blue-200 hover:bg-blue-300 active:bg-blue-400"
          >
            <span className="relative z-10">Vote Karya</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 1, y: 0, height: 0 }}
        animate={{
          y: hide ? "-10vh" : 0, // Membuat navbar bergerak ke atas saat di-scroll
          height: hide ? "10vh" : 0,
        }}
        transition={{ duration: hide ? 0.3 : 0.5 }}
        className="bg-[url('/images/bar2.png')] bg-cover bg-top bg-no-repeat min-h-[7vh] px-[80px] flex justify-between items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hide ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          onClick={() => {
            const target = document.getElementById("home");
            target?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={langkahSapa} className="h-10 aspect-auto" />
        </motion.div>

        <div className="flex justify-end">
          {navList.map((nav, index) => {
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
                  <a className="cursor-pointer font-medium transform skew-x-[30deg]">
                    {nav.title}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
