import React from "react";
import { useState } from "react";
import { signup, login, logout } from "../firebase/auth";

import bgDesktop from "/images/bgDesktopRevisi.webp";
import bgMobile from "/images/bgMobileRevisi_11zon.jpg";
import { useMediaQuery } from "../useMediaQuery";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("berhasil login");
      window.location.href = "/vote";
    } catch (error) {
      alert(`gagal login: ${error}`);
    }
  };

  return (
    <div
      className="flex flex-col gap-2 items-center justify-center h-screen bg-cover bg-bottom bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})` }}
    >
      <input
        type="text"
        name="email"
        placeholder="Masukkan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" px-4 py-2 w-80 rounded-md bg-white"
      />
      <input
        type="password"
        name="password"
        placeholder="Masukkan password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=" px-4 py-2 w-80 rounded-md bg-white"
      />

      <button
        onClick={() => handleLogin()}
        className="bg-blue-300 w-80 py-3 rounded-md mt-1 hover:bg-blue-400 active:bg-blue-500"
      >
        Login
      </button>
      {/* <button
        onClick={() => signup(email, password)}
        className="bg-blue-300 w-80 py-3 rounded-md mt-1 hover:bg-blue-400 active:bg-blue-500"
      >
        Sign Up
      </button> */}
    </div>
  );
};

export default LoginPage;
