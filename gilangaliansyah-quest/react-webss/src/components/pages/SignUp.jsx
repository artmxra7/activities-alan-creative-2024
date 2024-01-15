import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika autentikasi dapat ditambahkan di sini
    console.log("Login clicked");
  };

  return (
    <div className="flex items-center justify-center" style={{ marginTop: "8%" }}> 
      <div className="border rounded-lg border-gray-400 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            alamat Email
          </label>
          <input
            style={{ width: "100%" }}
            className="border rounded py-2 px-4 focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="email anda disini"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Kata sandi
          </label>
          <input
            style={{ width: "100%" }}
            className="border rounded py-2 px-4 focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            placeholder="kata sandi anda disini"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-700">ingat saya</label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Lupa kata sandi?
          </a>
        </div>

        <div>
          <div
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline w-full text-center cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignUp;
