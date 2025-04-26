import React from "react";
import { useState } from "react";
import { signup, login, logout } from "../firebase/auth";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <input
        type="text"
        name="username"
        placeholder="Masukkan nama"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        className="border px-4 py-2 w-80 rounded-md"
      />
      <input
        type="text"
        name="email"
        placeholder="Masukkan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-4 py-2 w-80 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Masukkan password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-4 py-2 w-80 rounded-md"
      />

      <button
        onClick={() => signup(username, email, password)}
        className="bg-blue-300 w-80 py-3 rounded-md mt-1 hover:bg-blue-400 active:bg-blue-500"
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginPage;
