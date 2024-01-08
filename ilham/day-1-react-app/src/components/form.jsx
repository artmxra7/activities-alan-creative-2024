import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 font-bold mb-2">
          Nama:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-600 font-bold mb-2">
          Umur:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-600 font-bold mb-2">
          Jenis Kelamin:
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-md"
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
        <label htmlFor="tingkatan" className="block text-gray-600 font-bold mb-2">
          Tingkatan:
        </label>
     
        <div className="flex items-center mb-2" style={{ background: formData.tingkatan === 'SD' ? '#3490dc' : '#FFFFFF' }}>
  <input
    type="radio"
    name="tingkatan"
    id="radioSD"
    value="SD"
    checked={formData.tingkatan === 'SD'}
    onChange={handleChange}
    className="mr-2 cursor-pointer"
  />
  <label
    htmlFor="radioSD"
    className="cursor-pointer"
    style={{ color: formData.tingkatan === 'SD' ? '#fff' : '#000' }}
  >
    SD
  </label>
</div>
<div className="flex items-center mb-2" style={{ background: formData.tingkatan === 'SMP' ? '#3490dc' : '#FFFFFF' }}>
  <input
    type="radio"
    name="tingkatan"
    id="radioSMP"
    value="SMP"
    checked={formData.tingkatan === 'SMP'}
    onChange={handleChange}
    className="mr-2 cursor-pointer"
  />
  <label
    htmlFor="radioSMP"
    className="cursor-pointer"
    style={{ color: formData.tingkatan === 'SMP' ? '#fff' : '#000' }}
  >
    SMP
  </label>
</div>
<div className="flex items-center" style={{ background: formData.tingkatan === 'SMK' ? '#3490dc' : '#FFFFFF' }}>
  <input
    type="radio"
    name="tingkatan"
    id="radioSMK"
    value="SMK"
    checked={formData.tingkatan === 'SMK'}
    onChange={handleChange}
    className="mr-2 cursor-pointer"
  />
  <label
    htmlFor="radioSMK"
    className="cursor-pointer"
    style={{ color: formData.tingkatan === 'SMK' ? '#fff' : '#000' }}
  >
    SMK
  </label>
</div>


      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Kirim
      </button>
    </form>
  );
};

export default Form;
