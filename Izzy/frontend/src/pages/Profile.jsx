import React, { useEffect, useRef, useState, useCallback } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { LoginCheck } from '../services/LoginCheck';
import { debounce } from 'lodash';
import { FaCheck } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdEdit } from "react-icons/md";


const debouncedDataProfile = debounce(async (setDataProfile, setLoading, navigate) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await api.get('/profile/' + token);

      if (response.data === 401) {
        navigate('/Login');
      } else {
        const { namauser, email, no_telp, Jenis_Kelamin, tgllahir, gambar } = response.data;
        setDataProfile({
          namauser,
          email,
          no_telp,
          jeniskelamin: Jenis_Kelamin,
          tgllahir,
          gambar,
          previewGambar: `http://localhost:8000/images/${gambar}`
        });
      }

    } catch (err) {
      if(err.response.status === 401 || err.response.status === 500) {
        navigate('/Login');
      }
    } finally {
      setLoading(false);
    }
  }, 300); 


const Profile = () => {
    const [DataProfile, setDataProfile] = useState({namauser: '', email: '', no_telp: '', jeniskelamin: '', tgllahir: '', gambar: '', previewGambar: null});
    const inputRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [loading, setLoading] = useState(true);
    const [UploadStatus, setUploadStatus] = useState(2);
    const Navigate = useNavigate();

    // Ubah
    const [ubahNama, setUbahNama] = useState(0);
    const [ubahJenisKelamin, setUbahJenisKelamin] = useState(0);
    const [ubahTglLahir, setUbahTglLahir] = useState(0);
    const [suksesubahNama, setSuksesubahNama] = useState(0);
    const [suksesubahJenisKelamin, setSuksesubahJenisKelamin] = useState(0);
    const [suksesubahTglLahir, setSuksesubahTglLahir] = useState(0);

    // Window Resize
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    
    useEffect(() => {
        document.title = 'Profil';
        window.addEventListener('resize', handleWindowSizeChange);
        debouncedDataProfile(setDataProfile, setLoading, Navigate);
        LoginCheck(Navigate)

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [debouncedDataProfile]);

    const handleClick = () => {
        inputRef.current.click();
    }

    const isMobile = width <= 768;

    // Update Data Profile
    const handleFileChange = async event => {
        const {name} = event.target;

        const fileObj = event.target.files && event.target.files[0];
        if(fileObj){
            setDataProfile((prevItems) => ({
                ...prevItems,
                [name]: fileObj,
                previewGambar: URL.createObjectURL(fileObj)
            }))
            try{
                const token = localStorage.getItem('token');
                const formData = new FormData();
                formData.append('image', fileObj);
                const [ImageUpload] = await Promise.all([
                    api.post(`/UploadImageProfile/${token}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                ]);

                if(ImageUpload.data === 200){
                    setUploadStatus(1);
                    setTimeout(() => {
                        setUploadStatus(2);
                    }, 2000)
                }else{
                    setUploadStatus(0);
                    setTimeout(() => {
                       setUploadStatus(2); 
                    }, 2000);
                }
            }catch(err){
                console.log(err)
            }
        }else{
            setDataProfile((prevItems) => ({
                ...prevItems,
                [name]: '',
                previewGambar: null
            }))
        }

        event.target.value = null;
    }



    const handleUpdateProfile = (index) => {
        const Update = async (token, data, index) => {
            const response = await api.post('/UpdateProfile/' + token, data);
    
            switch(index) {
                case 0:
                    response.data === 200 ? [setUbahNama(0), setSuksesubahNama(1), setTimeout(() => setSuksesubahNama(0), 2000)] : [setUbahNama(1), setSuksesubahNama(2), setTimeout(() => setSuksesubahNama(0), 2000)];
                    break;
                case 1:
                    response.data === 200 ? [setUbahJenisKelamin(0), setSuksesubahJenisKelamin(1), setTimeout(() => setSuksesubahJenisKelamin(0), 2000)] : [setUbahJenisKelamin(1), setSuksesubahJenisKelamin(2), setTimeout(() => setSuksesubahJenisKelamin(0), 2000)];
                    break;
                case 2:
                    response.data === 200 ? [setUbahTglLahir(0), setSuksesubahTglLahir(1), setTimeout(() => setSuksesubahTglLahir(0), 2000)] : [setUbahTglLahir(1), setSuksesubahTglLahir(2), setTimeout(() => setSuksesubahTglLahir(0), 2000)];
                    break;
            }
        }
    
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    let value;
                    switch(index) {
                        case 0:
                            setUbahNama(2);
                            value = DataProfile.namauser;
                            break;
                        case 1:
                            setUbahJenisKelamin(2);
                            value = DataProfile.jeniskelamin;
                            break;
                        case 2:
                            setUbahTglLahir(2);
                            value = DataProfile.tgllahir;
                            break;
                    }
                    Update(token, {value, ChangedIndex: index}, index);
                } else {
                    Navigate('/Login');
                }
            } catch(err) {
                console.log(err);
            }
    }

    // Logout
    const logout = () => {
        localStorage.removeItem('token')
        sessionStorage.removeItem('buttonIndex')
        sessionStorage.removeItem('role')
        window.location.href = '/';
    }

    return(
        <>
        
        <div style={{backgroundColor: 'rgba(239, 242, 251, 1)'}}>
        {isMobile ? (
            <>
            <div>

            </div>
            <div className='flex justify-center items-center min-h-screen' style={{width: '100%'}}>
                <div className="container border bg-white border-gray-700 mt-4   mb-5" style={{width: '90%', borderRadius: '25px'}}>
                    {loading ? (
                    <div className='p-4 flex justify-center items-center'>
                        <p>Memuat...</p>
                    </div>
                    ) : (   
                    <>
                    <div className="p-4 flex justify-center items-center">
                        <input type="file" name="gambar" accept='image/*' style={{display: 'none'}} onChange={handleFileChange} ref={inputRef}/>
                        <img src={DataProfile.gambar ? DataProfile.previewGambar : "No-image-found.jpg"} className='rounded-lg w-50 border shadow-md' onClick={handleClick}/>
                    </div>
                    <div className="p-4">
                        <h1 className='text-xl text-center mb-2 font-bold'>Biodata Diri</h1>
                            <div className='flex justify-center'>
                                <div style={{width: '130px'}}>
                                    <p className='text-md mb-2'>Nama</p>
                                    {suksesubahNama === 1 ? (
                                    <p className='mb-2 text-green-500' style={{fontSize: '10px'}}>*Nama Berhasil di ubah</p>
                                    ) : suksesubahNama === 2 ? (
                                    <p className='mb-2 text-red-700' style={{fontSize: '10px'}}>Nama Gagal di ubah</p>
                                    ) : (
                                    <></>
                                    )}
                                    <p className='text-md mb-2'>Jenis Kelamin</p>
                                    {suksesubahJenisKelamin === 1 ? (
                                    <p className='mb-2 text-green-500' style={{fontSize: '10px'}}>*Jenis Kelamin Berhasil di ubah</p>
                                    ) : suksesubahJenisKelamin === 2 ? (
                                    <p className='mb-2 text-red-700' style={{fontSize: '10px'}}>*Jenis Kelamin Gagal di ubah</p>
                                    ) : (
                                    <></>
                                    )}
                                    <p className='text-md mb-2'>Tanggal Lahir</p>
                                    {suksesubahTglLahir === 1 ? (
                                    <p className='mb-2 text-green-500' style={{fontSize: '10px'}}>*Tgl. Lahir Berubah</p>
                                    ) : suksesubahTglLahir === 2 ? (
                                    <p className='mb-2 text-red-700' style={{fontSize: '10px'}}>*Tgl. Lahir Gagal di ubah</p>
                                    ) : (
                                    <></>
                                    )}
                                </div>
                                <div style={{width: '140px'}}>
                                    {ubahNama === 0 ? (
                                    <p className='text-md mb-2'>{DataProfile.namauser}</p>   
                                    ) : ubahNama === 1 ? (
                                    <input type="text" name='namauser' 
                                    className='mb-2 text-md border ps-1 pe-1 border-gray-200 rounded-lg' value={DataProfile.namauser} 
                                    style={{fontFamily: 'MontSerrat', width: '90%'}}
                                    onChange={(e) => setDataProfile((prevData) => ({ ...prevData, namauser: e.target.value }))}/>    
                                    ) : (
                                    <span className='flex items-center space-x-2'>
                                        <p className="text-md mb-2">Memuat</p>
                                    </span>
                                    )}
                                    {ubahJenisKelamin === 0 ? (
                                    <p className='text-md mb-2'>{DataProfile.jeniskelamin}</p>
                                    ) : ubahJenisKelamin === 1 ? (
                                    <div className=''>
                                        <div className='flex space-x-1'>
                                            <input type="radio" name="jeniskelamin" id="jeniskelaminPria" value="Pria" checked={DataProfile.jeniskelamin === 'Pria'} onChange={(e) => setDataProfile((prevData) => ({ ...prevData, jeniskelamin: e.target.value }))}/>
                                            <label htmlFor='jeniskelaminPria' className='text-md'>Pria</label>
                                        </div>
                                        <div className='flex space-x-1'>
                                            <input type="radio" name="jeniskelamin" id="jeniskelaminperempuan" value="Wanita" checked={DataProfile.jeniskelamin === 'Wanita'} onChange={(e) => setDataProfile((prevData) => ({ ...prevData, jeniskelamin: e.target.value }))}/>
                                            <label htmlFor='jeniskelaminperempuan' className='text-md'>Wanita</label>
                                        </div>
                                    </div>
                                    ) : (
                                    <span className='flex items-center space-x-2'>
                                        <p className="text-md mb-2">Memuat</p>
                                    </span>
                                    )}
                                    {ubahTglLahir === 0 ? (
                                    <p className='text-md mb-2'>{DataProfile.tgllahir}</p>                        
                                    ) : ubahTglLahir === 1 ? (
                                    <input type="date" name="tgllahir" id="" style={{fontFamily: 'MontSerrat', width: '90%'}} className='mb-2 text-md border border-gray-200 rounded-lg' value={DataProfile.tgllahir} 
                                    onChange={(e) => setDataProfile((prevData) => ({ ...prevData, tgllahir: e.target.value }))}/>      
                                    ) : (
                                    <span className='flex items-center space-x-2'>
                                        <p className="text-md mb-2">Memuat</p>
                                    </span>
                                    )}
                                </div>
                                <div>
                                    {ubahNama === 0 ? (
                                    <MdEdit className='cursor-pointer mb-2 mt-1'
                                    onClick={() => setUbahNama(1)}/>    
                                    ) : ubahNama === 1 ? (
                                    <FaCheck className='cursor-pointer mb-2 mt-1'
                                    onClick={() => handleUpdateProfile(0)}/>
                                    ) : ubahNama === 2 ? (
                                    <AiOutlineLoading3Quarters className='animate-spin mb-2 mt-1'/>
                                    ) : (
                                    <></>
                                    )}
                                    {ubahJenisKelamin === 0 ? (
                                    <MdEdit className='cursor-pointer mb-2 mt-4'
                                    onClick={() => setUbahJenisKelamin(1)}/>
                                    ) : ubahJenisKelamin === 1 ? (
                                    <FaCheck className='cursor-pointer mb-2 mt-4'
                                    onClick={() => handleUpdateProfile(1)}/>
                                    ) : ubahJenisKelamin === 2 ? (
                                    <AiOutlineLoading3Quarters className='animate-spin mb-2 mt-4'/>
                                    ) : (
                                    <></>  
                                    )}
                                    {ubahTglLahir === 0 ? (
                                    <MdEdit className='cursor-pointer mb-2 mt-4'
                                    onClick={() => setUbahTglLahir(1)}/>
                                    ) : ubahTglLahir === 1 ? (
                                    <FaCheck className='cursor-pointer mb-2 mt-4'
                                    onClick={() => handleUpdateProfile(2)}/>
                                    ) : ubahTglLahir === 2 ? (
                                    <AiOutlineLoading3Quarters className='animate-spin mb-2 mt-4'/>
                                    ) : (
                                    <></>
                                    )}
                                </div>
                            </div>
                        <h1 className="text-xl mb-2 mt-8 font-bold text-center">Kontak Diri</h1>
                            <div className="flex justify-center">
                                <div style={{width: '130px'}}>
                                    <p className='text-md mb-2'>Email</p>
                                    <p className='text-md mb-2'>No. Telp</p>
                                </div>
                                <div style={{width: '140px'}}>
                                    <p className='text-md mb-2'>{DataProfile.email}</p>
                                    <p className='text-md mb-2'>{DataProfile.no_telp}</p>
                                </div>
                            </div>
                    </div>
                    <button type="button" className='flex justify-center items-center mx-auto border border-gray-200 text-white font-bold shadow-md rounded-full m-4 bg-blue-500 p-4 hover:shadow-lg' style={{width: '200px'}}
                    onClick={() => logout()}>Logout</button>
                    </>
                    )}
                </div>
            </div>
            </>
        ) : (
            <>
            <div>
                {UploadStatus === 0 ? (
                    <div className="p-1 mt-10 rounded-lg" 
                    style={{width: '50%', position: 'absolute', left: '50%', right: '50%', marginTop: '120px',
                    transform: 'translate(-50%, -50%)', backgroundColor: 'rgb(25, 25, 26)'}}>
                        <div className='flex justify-center items-center'>
                            <h1 className="text-white font-bold">Gambar Gagal di simpan</h1>
                        </div>
                    </div>
                ) : UploadStatus === 1 ? (
                    <div className="p-1 mt-10 rounded-lg motion-reduce:animate-bounce" 
                    style={{width: '50%', position: 'absolute', left: '50%', right: '50%', marginTop: '120px',
                    transform: 'translate(-50%, -50%)', backgroundColor: 'rgb(25, 25, 26)'}}>
                        <div className='flex justify-center items-center'>
                            <h1 className="text-white font-bold">Gambar Berhasil di simpan</h1>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className='flex justify-center items-center min-h-screen'>
                {loading ? (
                <div className='p-4 flex justify-center items-center'>
                    <p className=''>Memuat...</p>
                </div>  
                ) : (
                <>
                <div className="w-3/4 container flex justify-between border bg-gray-50 p-5 shadow-lg">
                    <div className="p-4">
                        <input type="file" name='gambar' accept='image/*' ref={inputRef} style={{display: 'none'}} onChange={handleFileChange}/>
                        <img src={DataProfile.gambar ? DataProfile.previewGambar : "No-image-found.jpg"} className="rounded-lg border shadow-md hover:cursor-pointer" style={{width: '200px', height: '200px'}} onClick={handleClick} />
                        <button type="button" onClick={() => logout()} className='flex justify-center items-center mx-auto border border-gray-200 text-white font-bold shadow-md rounded-lg m-4 bg-red-600 p-4 hover:shadow-lg' style={{width: '200px'}}>Logout</button>
                    </div>
                    <div className='w-3/4 p-5'>
                        <h1 className='text-xl mb-2 font-bold'>Biodata Diri</h1>
                            <div className='flex'>
                                <div style={{width: '150px'}}>
                                    <p className='text-md mb-2'>Nama</p>
                                    <p className='text-md mb-2'>Jenis Kelamin</p>
                                    <p className='text-md mb-2'>Tanggal Lahir</p>
                                </div>
                                <div style={{width: '250px'}}>
                                    {ubahNama === 1 ? (
                                    <input type="text" name='namauser' className='mb-2 text-md border border-gray-200 rounded-lg' value={DataProfile.namauser} style={{fontFamily: 'MontSerrat'}}
                                    onChange={(e) => setDataProfile((prevData) => ({ ...prevData, namauser: e.target.value }))}/>
                                    ) : ubahNama === 0 ? (
                                    <p className='text-md mb-2'>{DataProfile.namauser}</p>
                                    ):(
                                    <span className='flex items-center space-x-2'>
                                        <p className="text-md mb-2">Memuat</p>
                                        <AiOutlineLoading3Quarters className='animate-spin mb-2' size={15} color='black'/>
                                    </span>
                                    )}
                                    {ubahJenisKelamin === 1 ? (
                                    <div className='flex space-x-2 mb-2 items-center'>
                                        <div className='flex space-x-1'>
                                            <input type="radio" name="jeniskelamin" id="jeniskelaminPria" value="Pria" checked={DataProfile.jeniskelamin === 'Pria'} onChange={(e) => setDataProfile((prevData) => ({ ...prevData, jeniskelamin: e.target.value }))}/>
                                            <label htmlFor='jeniskelaminPria' className='text-md'>Pria</label>
                                        </div>
                                        <div className='flex space-x-1'>
                                            <input type="radio" name="jeniskelamin" id="jeniskelaminperempuan" value="Wanita" checked={DataProfile.jeniskelamin === 'Wanita'} onChange={(e) => setDataProfile((prevData) => ({ ...prevData, jeniskelamin: e.target.value }))}/>
                                            <label htmlFor='jeniskelaminperempuan' className='text-md'>Wanita</label>
                                        </div>
                                    </div>
                                    ) : ubahJenisKelamin === 0 ? (
                                    <p className='text-md mb-2'>{DataProfile.jeniskelamin}</p>
                                    ) : (
                                    <span className='flex items-center space-x-2'>
                                        <p className="text-md mb-2">Memuat</p>
                                        <AiOutlineLoading3Quarters className='animate-spin mb-2' size={15} color='black'/>
                                    </span>
                                    )}
                                    {ubahTglLahir === 1 ? (
                                    <input type="date" name="tgllahir" id="" style={{fontFamily: 'MontSerrat'}} className='mb-2 text-md border border-gray-200 rounded-lg' value={DataProfile.tgllahir} 
                                    onChange={(e) => setDataProfile((prevData) => ({ ...prevData, tgllahir: e.target.value }))}/>
                                    ) : ubahTglLahir === 0 ? (
                                    <p className='text-md mb-2'>{DataProfile.tgllahir}</p>
                                    ) : (
                                    <span className='flex items-center space-x-2'>
                                    <p className="text-md mb-2">Memuat</p>
                                    <AiOutlineLoading3Quarters className='animate-spin mb-2' size={15} color='black'/>
                                    </span>
                                    )}
                                </div>
                                <div className='ms-5'>
                                    {ubahNama === 0 ? (
                                        <p onClick={() => setUbahNama(1)} className='text-center rounded-full bg-slate-600 text-white p-1 ps-2 pe-2 mb-2 cursor-pointer' style={{fontSize: '12px'}}>ubah</p>
                                    ) : ubahNama === 1 ? (
                                        <span className='flex items-center space-x-2 bg-green-600 rounded-full ps-2 pe-2 mb-2 cursor-pointer' onClick={() => {handleUpdateProfile(0)}}>
                                        <FaCheck className='flex rounded-full bg-green-600 border border-black' size={15} color='white'/>
                                        <p className='text-white p-1' style={{fontSize: '12px'}}>Selesai</p>
                                        </span>
                                    ) : ubahNama === 2 ? (
                                        <span className='flex items-center space-x-2 bg-blue-500 rounded-full ps-2 pe-2 mb-2 cursor-default'>
                                        <AiOutlineLoading3Quarters className='flex animate-spin' size={15} color='white'/>
                                        <p className='text-white p-1' style={{fontSize: '12px'}}>Proses</p>
                                        </span>
                                    ) : (
                                        <></>
                                    )}
                                    {ubahJenisKelamin === 0? (
                                        <p className='rounded-full bg-slate-600 text-white p-1 ps-2 pe-2 mb-2 cursor-pointer text-center' style={{fontSize: '12px'}} onClick={() => setUbahJenisKelamin(1)}>ubah</p>
                                    ) : ubahJenisKelamin === 1 ? (
                                        <span className='flex items-center space-x-2 bg-green-600 rounded-full ps-2 pe-2 mb-2 cursor-pointer' onClick={() => {handleUpdateProfile(1)}}>
                                        <FaCheck className='flex rounded-full bg-green-600 border border-black' size={15} color='white'/>
                                        <p className='text-white p-1' style={{fontSize: '12px'}}>Selesai</p>
                                        </span>
                                    ) : ubahJenisKelamin === 2 ? (
                                        <span className='flex items-center space-x-2 bg-blue-500 rounded-full ps-2 pe-2 mb-2 cursor-default'>
                                        <AiOutlineLoading3Quarters className='flex animate-spin' size={15} color='white'/>
                                        <p className='text-white p-1' style={{fontSize: '12px'}}>Proses</p>
                                        </span>
                                    ) : (
                                        <span></span>
                                    )}
                                    {ubahTglLahir === 1 ? (
                                        <span className='flex items-center space-x-2 bg-green-600 rounded-full ps-2 pe-2 mb-2 cursor-pointer' onClick={() => {handleUpdateProfile(2)}}>
                                        <FaCheck className='flex rounded-full bg-green-600 border border-black' size={15} color='white'/>
                                        <p className='text-white p-1' style={{fontSize: '12px'}}>Selesai</p>
                                        </span>
                                    ) : ubahTglLahir === 0 ? (
                                        <p className='rounded-full bg-slate-600 text-white p-1 ps-2 pe-2 mb-2 text-center cursor-pointer' style={{fontSize: '12px'}} onClick={() => setUbahTglLahir(1)}>ubah</p>
                                    ) : ubahTglLahir === 2 ? (
                                        <span className='flex items-center space-x-2 bg-blue-500 rounded-full ps-2 pe-2 mb-2 cursor-default'>
                                        <AiOutlineLoading3Quarters className='flex animate-spin' size={15} color='white'/>
                                        <p className='text-white p-1' style={{fontSize: '12px'}}>Proses</p>
                                        </span>
                                    ) : (
                                        <span></span>
                                    )}
                                </div>
                                <div className='ms-5'>
                                    {suksesubahNama === 1 ? (
                                    <p className='text-sm mb-2 text-green-500'>*Nama Berhasil di ubah</p>
                                    ) : suksesubahNama === 2 ? (
                                    <p className='text-md mb-2 text-red-700'>Nama Gagal di ubah</p>
                                    ) : (
                                    <p className='text-md mb-2 text-white'>?</p>
                                    )}
                                    {suksesubahJenisKelamin === 1 ? (
                                    <p className='text-sm mb-2 text-green-500'>*Jenis Kelamin Berhasil di ubah</p>
                                    ) : suksesubahJenisKelamin === 2 ? (
                                    <p className='text-md mb-2 text-red-700'>*Jenis Kelamin Gagal di ubah</p>
                                    ) : (
                                    <p className='text-md mb-2 text-white'>?</p>
                                    )}
                                    {suksesubahTglLahir === 1 ? (
                                    <p className='text-sm mb-2 text-green-500'>*Tgl. Lahir Berubah</p>
                                    ) : suksesubahTglLahir === 2 ? (
                                    <p className='text-md mb-2 text-red-700'>*Tgl. Lahir Gagal di ubah</p>
                                    ) : (
                                    <p className='text-md mb-2 text-white'>?</p>
                                    )}
                                </div>
                            </div>
                        <h1 className="text-xl mb-2 mt-8 font-bold">Kontak Diri</h1>
                            <div className="flex">
                                <div style={{width: '150px'}}>
                                    <p className='text-md mb-2'>Email</p>
                                    <p className='text-md mb-2'>No. Telp</p>
                                </div>
                                <div>
                                    <p className='text-md mb-2'>{DataProfile.email}</p>
                                    <p className='text-md mb-2'>{DataProfile.no_telp}</p>
                                </div>
                            </div>
                    </div>
                </div>
                </>
                )}
            </div>
            </>
        )}
        </div>
        </>
    )
}

export default Profile