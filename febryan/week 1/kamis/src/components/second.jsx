import React, { useState } from 'react';
import Navbar from './fragments/navbar';
import Footer from './fragments/footer';
import Navigation2 from './fragments/Bottnav2';

const Second = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    tingkatan: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/schlcls.png')" }}>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6 rounded-md shadow-md bg-orange-900">

          <h1 className="text-4xl font-poppins font-bold mb-4 text-white text-center">Pendaftaran</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Nama:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input border-2 border-solid border-black rounded-md p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input border-2 border-solid border-black rounded-md p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-white font-bold mb-2">
                Umur:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="form-input border-2 border-solid border-black rounded-md p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block text-white font-bold mb-2">
                Jenis Kelamin:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-input border-2 border-solid border-black rounded-md p-2"
                required
              >
                <option value="" disabled>
                  Pilih Jenis Kelamin
                </option>
                <option value="male">Laki-laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="tingkatan" className="block text-white font-bold mb-2">
                Tingkatan:
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['SD', 'SMP', 'SMK'].map((tingkatan) => (
                  <div
                    key={tingkatan}
                    className={`flex items-center p-2 rounded-md cursor-pointer ${formData.tingkatan === tingkatan ? 'bg-blue-500 text-white' : 'bg-white'
                      }`}
                  >
                    <input
                      type="radio"
                      name="tingkatan"
                      id={`radio${tingkatan}`}
                      value={tingkatan}
                      checked={formData.tingkatan === tingkatan}
                      onChange={handleChange}
                      className="mr-2 cursor-pointer"
                    />
                    <label
                      htmlFor={`radio${tingkatan}`}
                      className={`cursor-pointer ${formData.tingkatan === tingkatan ? 'text-white' : 'text-black'}`}
                    >
                      {tingkatan}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="submit-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>

      <Navigation2 />

    </div>
  );
};

export default Second;
