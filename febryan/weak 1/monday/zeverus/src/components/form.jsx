// src/components/Form.jsx
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
                    Nomer Telfon:
                </label>
                <input
                    type="number"
                    id="Phone"
                    name="Phone"
                    value={formData.Phonenum}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="tingkatan" className="block text-gray-600 font-bold mb-2">
                    Jenis Kelamin:
                </label>

                <div className="flex items-center mb-2" >
                    <input
                        type="radio"
                        name="tingkatan"
                        id="radioPria"
                        value="Pria"
                        checked={formData.tingkatan === 'Pria'}
                        onChange={handleChange}
                        className="mr-2 cursor-pointer"
                    />
                    <label
                        htmlFor="radioPria"
                        className="cursor-pointer"
                        style={{ color: formData.tingkatan === 'Pria' ? '#fff' : '#000' }}
                    >
                        Pria
                    </label>
                </div>
                <div className="flex items-center mb-2" >
                    <input
                        type="radio"
                        name="tingkatan"
                        id="radioPerempuan"
                        value="Perempuan"
                        checked={formData.tingkatan === 'Perempuan'}
                        onChange={handleChange}
                        className="mr-2 cursor-pointer"
                    />
                    <label
                        htmlFor="radioSMP"
                        className="cursor-pointer"
                        style={{ color: formData.tingkatan === 'Perempuan' ? '#fff' : '#000' }}
                    >
                        Perempuan
                    </label>
                </div>


            </div>


            <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-600 font-bold mb-2">
                    pendidikan terakhir:
                </label>
                <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                >
                    <option value="" >
                        Tingakatan Ilmu
                    </option>
                    <option value="Sudah Kerja">Sudah Kerja</option>
                    <option value="SMA/SMK-Sederajat">SMA/SMK-Sederajat</option>
                    <option value="SMP">SMP</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Kirim
            </button>
        </form>
    );
};

export default Form;