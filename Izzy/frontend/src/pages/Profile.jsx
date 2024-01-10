import React, { useEffect, useRef, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const dataProfile = async (setDatUser) => {
    try{
    const token = localStorage.getItem('token')
    const response = await api.get('/profile/'+token);

    if(response.data == 401){
        window.location.href = '/Login'
    }else{
        setDatUser({
            namauser: response.data.namauser,
            email: response.data.email,
            no_telp: response.data.no_telp,
            jeniskelamin: response.data.Jenis_Kelamin,
            tgllahir: response.data.tgllahir,
            gambar: response.data.gambar,
            previewGambar: `http://localhost:8000/images/${response.data.gambar}`
        })
    }

    }catch(err){
      console.log(err)  
    }
}

const Profile = () => {
    const [DataProfile, setDataProfile] = useState({namauser: '', email: '', no_telp: '', jeniskelamin: '', tgllahir: '', gambar: '', previewGambar: null});
    const inputRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [UploadStatus, setUploadStatus] = useState('');
    const Navigate = useNavigate();
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    useEffect(() => {
        dataProfile(setDataProfile)
    },[])

    const handleClick = () => {
        inputRef.current.click();
    }

    const isMobile = width <= 768;

    const handleFileChange = event => {
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
                const [ImageUpload] = Promise.all([
                    api.post(`/UploadImageProfile/${token}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                ]);

                if(ImageUpload.data == 200){
                    setUploadStatus('Success');
                }else{
                    setUploadStatus('Unauthorized')
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

    const logout = () => {
        localStorage.removeItem('token')
        window.location.href = '/'
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
                    <div className="p-4 flex justify-center items-center">
                        <input type="file" name="gambar" accept='image/*' style={{display: 'none'}} onChange={handleFileChange} ref={inputRef}/>
                        <img src={DataProfile.gambar ? DataProfile.previewGambar : "No-image-found.jpg"} className='rounded-lg w-50 border shadow-md' onClick={handleClick}/>
                    </div>
                    <div className="p-4 text-center">
                        <h1 className='text-xl mb-2 font-bold'>Biodata Diri</h1>
                            <p className='text-md mb-2'>Username : {DataProfile.namauser}</p>
                            <p className='text-md mb-2'>Jenis Kelamin : {DataProfile.jeniskelamin}</p>
                            <p className='text-md mb-2'>Tgl. Lahir : {DataProfile.tgllahir}</p>
                        <h1 className="text-xl mb-2 mt-8 font-bold">Kontak Diri</h1>
                            <p className='text-md mb-2'>Email : {DataProfile.email}</p>
                            <p className='text-md mb-2'>No. Telp : {DataProfile.no_telp}</p>

                    </div>
                    <button type="button" className='flex justify-center items-center mx-auto border border-gray-200 text-white font-bold shadow-md rounded-full m-4 bg-blue-500 p-4 hover:shadow-lg' style={{width: '200px'}}
                    onClick={() => logout()}>Logout</button>
                </div>
            </div>
            </>
        ) : (
            <>
            <div>
                {UploadStatus === "Unauthorized" && (
                    <div className="p-1 mt-10 rounded-lg" 
                    style={{width: '50%', position: 'absolute', left: '50%', right: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgb(25, 25, 26)',
                    animation: 'fadeInOut 4s ease-in-out'}}>
                        <div className='flex justify-center items-center'>
                            <h1 className="text-white font-bold">Gambar Gagal di simpan</h1>
                        </div>
                    </div>
                ) || UploadStatus === "Success" && (
                    <div className="p-1 mt-10 rounded-lg" 
                    style={{width: '50%', position: 'absolute', left: '50%', right: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgb(25, 25, 26)',
                    animation: 'fadeInOut 4s ease-in-out'}}>
                        <div className='flex justify-center items-center'>
                            <h1 className="text-white font-bold">Gambar Berhasil di simpan</h1>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="w-3/4 container flex justify-between border bg-gray-50 p-5 shadow-lg">
                    <div className="p-4">
                        <input type="file" name='gambar' accept='image/*' ref={inputRef} style={{display: 'none'}} onChange={handleFileChange}/>
                        <img src={DataProfile.gambar ? DataProfile.previewGambar : "No-image-found.jpg"} className="rounded-lg h-70 w-70 border shadow-md hover:cursor-pointer" onClick={handleClick} />
                        <button type="button" onClick={() => logout()} className='flex justify-center items-center mx-auto border border-gray-200 text-white font-bold shadow-md rounded-lg m-4 bg-red-600 p-4 hover:shadow-lg' style={{width: '200px'}}>Logout</button>
                    </div>
                    <div className='w-3/4 p-5'>
                        <h1 className='text-xl mb-2 font-bold'>Biodata Diri</h1>
                            <p className='text-md mb-2'>Username : {DataProfile.namauser}</p>
                            <p className='text-md mb-2'>Jenis Kelamin : {DataProfile.jeniskelamin}</p>
                            <p className='text-md mb-2'>Tgl Lahir : {DataProfile.tgllahir}</p>
                        <h1 className="text-xl mb-2 mt-8 font-bold">Kontak Diri</h1>
                            <p className='text-md mb-2'>Email : {DataProfile.email}</p>
                            <p className='text-md mb-2'>No Telp : {DataProfile.no_telp}</p>
                    </div>
                </div>
            </div>
            </>
        )}
        </div>
        </>
    )
}

export default Profile