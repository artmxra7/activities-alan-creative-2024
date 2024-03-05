import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-blue-500 text-3xl font-bold mb-5'>{title}</h1>
                <p className='font-medium text-slate-500 mb-8'>Welcome selamat datang</p>
                {children}
                <p className="text-sm mt-5 text-center">
                    {type === "register" && (
                        <>
                            Sudah punya account? 
                            <Link to="/login" className="text-blue-500 font-bold"> Login disini</Link>
                        </>
                    )}
                    {type === "login" && (
                        <>
                            Belum punya account? 
                            <Link to="/register" className="text-blue-500 font-bold"> Daftar disini</Link>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthLayouts;
