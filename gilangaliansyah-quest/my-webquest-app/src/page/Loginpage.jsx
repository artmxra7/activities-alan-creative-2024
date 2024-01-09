import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logika autentikasi dapat ditambahkan di sini
    console.log("Login clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            alamat Email
          </label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
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
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
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
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 w-80"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
