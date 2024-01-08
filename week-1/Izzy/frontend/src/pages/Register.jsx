import { Link } from "react-router-dom";
import AuthLayouts from "../layouts/AuthLayouts"
import api from "../api";
import { useState } from "react";
import { IoIosLock } from 'react-icons/io';


const Register = () => {
    const [ErrorRegister, setErrorRegister] = useState(false);
    const [SalahPassword, setSalahPassword] = useState(false);
    const [Password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return(
        <AuthLayouts type="Register">
            <form onSubmit={handleRegister}>
                {ErrorRegister && <p className="text-red-500 mb-6">Ada Kesalahan Saat Registrasi</p>}
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Nama Lengkap</label>
                    <input
                    type="text" name="namauser" aria-label="Nama User" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder="Nama Lengkap Anda" style={{borderRadius: '45px'}}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Email</label>
                    <input
                    type="email" name="email" aria-label="Email" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder="Email Anda di sini" style={{borderRadius: '45px'}}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">No. Handphone</label>
                    <input
                    type="number" name="no_telp" aria-label="No Telp" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder="No. Handphone Anda" style={{borderRadius: '45px'}}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Kata Sandi</label>
                    <input
                    type="password" name="password" aria-label="Password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" 
                    placeholder="Masukkan Kata sandi Anda"
                    onChange={(e) => setPassword(e.target.value)} style={{borderRadius: '45px'}}/>
                </div>
                <div className="mb-6">
                    {!SalahPassword ? ( 
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Konfirmasi Kata Sandi</label>
                    ) : (
                    <label htmlFor="" className="block text-red-500 text-sm font-bold mb-2">Konfirmasi Kata Sandi Tidak Sesuai</label>
                    )}
                    <input
                    type="password" name="konfirmasipassword" aria-label="Konfirmasi Password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" 
                    placeholder="Masukkan Kembali Kata Sandi Anda" onChange={(e) => e.target.value !== Password ? setSalahPassword(true) : setSalahPassword(false)} style={{borderRadius: '45px'}}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Jenis Kelamin</label> 
                    <div className="flex space-x-3">
                        <div className="flex space-x-1">
                            <label htmlFor="">Pria </label><input type="radio" name="kelamin" id="kelaminpria" className="form-radio h-6 w-3" checked/>
                        </div>
                        <div className="flex space-x-1">
                            <label htmlFor="">Wanita </label><input type="radio" name="kelamin" id="kelaminwanita" className="form-radio h-6 w-3"/>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Tanggal Lahir</label>
                    <div className="container flex justify-between items-center">
                        <div className="w-2/3">
                            <select name="Tahun" id="tahun" className="text-sm border rounded w-full py-2 px-3 text-gray-300">
                                <option value="" disabled selected>Tahun Lahir</option>
                            </select>
                        </div>
                        <div className="w-1/3 space-x-2 p-2">
                            <select name="Bulan" id="bulan" className="text-sm border rounded w-full py-2 px-3 text-gray-300">
                                <option value="" disabled selected>Bulan Lahir</option>
                            </select>
                        </div>
                        <div className="w-1/3 space-x-2">
                            <select name="Hari" id="hari" className="text-sm border rounded w-full py-2 px-3 text-gray-300">
                                <option value="" disabled selected>Hari Lahir</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-sm inline">Dengan mendaftar, Anda setuju dengan </p><Link to={""} className="text-sm inline font-semibold text-blue-600" style={{fontFamily: 'Montserrat'}}>Syarat dan Ketentuan.</Link>
                </div>
                <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 w-full text-white" type="submit" style={{borderRadius: '45px'}}>Register</button>
            </form>
        </AuthLayouts>
    )
}

export default Register