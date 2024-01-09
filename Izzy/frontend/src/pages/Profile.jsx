import React, { useEffect, useRef, useState } from 'react';
import api from '../api';

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

    useEffect(() => {
        dataProfile(setDataProfile)
    },[])

    const handleClick = () => {
        inputRef.current.click();
    }

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if(!fileObj){
            return;
        }

        // const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        // if (!allowedTypes.includes(fileObj.type)) {
        //     alert('Please select a valid image file (JPEG, PNG, or JPG).');
        //     event.target.value = null;
        //     return;
        // }

        event.target.value = null;
    }

    return(
        <div className='flex justify-center items-center min-h-screen' style={{backgroundColor: 'rgba(239, 242, 251, 1)'}}>
            <div className="w-3/4 container flex justify-between border bg-gray-50 p-5 shadow-lg">
                <div className="p-4">
                    <input type="file" name='gambar' accept='image/*' ref={inputRef} style={{display: 'none'}} onChange={handleFileChange}/>
                    <img src={DataProfile.gambar ? DataProfile.previewGambar : "No-image-found.jpg"} className="rounded-lg h-70 w-70 border shadow-md hover:cursor-pointer" onClick={handleClick} />
                    {/* <h1 className='text-3xl font-bold flex justify-center mt-6'>{DataProfile.namauser}</h1> */}
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
    )
}

export default Profile