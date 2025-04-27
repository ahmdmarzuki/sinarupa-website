import React from "react";
import { BlueButton } from "./Button";
import logo from "/images/logo.png";
import langkahSapa from "/images/langkah-sapa.png";

const Navbar = () => {
  const navList = [
    { title: "tess", href: "#" },
    { title: "tess2", href: "#" },
    { title: "tess3", href: "#" },
  ];
  return (
    <div className="fixed flex flex-col w-screen">
      <div className="bg-[url('/images/bar1.png')] bg-cover bg-top bg-no-repeat flex justify-between min-h-[10vh] px-[80px] items-center">
        <div className="flex flex-row items-center relative h-[20%] gap-4">
          <img src={logo} className="h-full aspect-square" />
          <span>Langkah Sapa</span>
        </div>
        <div className="flex flex-row gap-4">
          <BlueButton label="Vote Sekarang" />
          <BlueButton label="Pendaftaran" />
        </div>
      </div>

      <div className="bg-[url('/images/bar2.png')] bg-cover bg-top bg-no-repeat min-h-[7vh] px-[80px] flex gap-4 justify-end items-center">
        {navList.map((nav) => {
          return <h1>{nav.title}</h1>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
