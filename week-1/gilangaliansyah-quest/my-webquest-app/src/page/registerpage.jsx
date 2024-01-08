import React, { useState } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Logika pendaftaran dapat ditambahkan di sini
    console.log("Register clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 rounded shadow-md w-96">

        <h2 className="text-2xl font-bold mb-6">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Nama lengkap
          </label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            type="text"
            id="fullName"
            placeholder="Nama Lengkap anda"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            type="tel"
            id="phoneNumber"
            placeholder="Nomor Handphone anda"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            placeholder="masukan kata sanda anda"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 w-80"
          onClick={handleRegister} 
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Register;
