import { useState, useEffect } from 'react';
import { IoMdCart } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [LoginStat, setLoginStat] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [DatUser, setDatUser] = useState([]);    

    return(
        <>
        <nav className="bg-white border-gray-200 shadow-md">
        <div className="w-2/3 flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to={"/"} className='text-3xl cursor-Link to={}ointer mx-auto font-bold' style={{ fontFamily: 'Montserrat' }}>Toko</Link>
            <input type="text" placeholder="search" className="p-2 border focus:outline-none ps-4 pe-4 ms-4 me-4 " style={{ width: "500px", borderRadius: "45px", backgroundColor: "rgba(239, 242, 251, 1)"}}/>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
                {LoginStat ? (
                <>
                    <li>
                        <span className='h-10 px-3 border border-gray-200 rounded-full shadow-sm -ms-2 me-2 flex items-center justify-center' onClick={() => window.location.href = "/Cart"}><IoMdCart style={{ color: "black" }} size={20} /></span>
                    </li>                    
                    <li>
                        <NavLink to="/Profile" className="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{DatUser.namauser}</NavLink>
                    </li>
                </>
                ) : (
                <>
                <li>
                    <span className='h-10 px-3 border border-gray-200 rounded-full shadow-sm -ms-2 me-2 flex items-center justify-center' onClick={() => window.location.href = "/Login"}><IoMdCart style={{ color: "black" }} size={20} /></span>
                </li>
                <li>
                    <button 
                    className="h-10 px-6 font-semibold bg-transparent border shadow-sm ms-2 me-2 rounded-lg" onClick={() => setOpenLoginModal(true)}>
                    Login
                    </button>
                </li>
                <li>
                    <button
                    className="h-10 px-6 font-semibold bg-blue-600 text-white border shadow-sm ms-2 me-2 rounded-lg" onClick={() => window.location.href = "/Register"}>
                    Register
                    </button>
                </li>
                </>
                )}
            </ul>
            </div>
        </div>
        </nav>

        <div id='LoginModal' tabIndex="-1" aria-hidden="true" className={openLoginModal ? "flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" : "hidden"}>
        <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow border">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                    Login
                </h3>
                <button type="button" className="end-2.5 text-gray-950 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-200 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={() => setOpenLoginModal(false)}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm text-black font-bold">Alamat Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400" style={{backgroundColor: "rgba(239, 242, 251, 1)"}} placeholder="Email Anda di sini" required/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm text-black font-bold">Kata Sandi</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400" style={{backgroundColor: "rgba(239, 242, 251, 1)"}} required/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" className="ms-2 text-sm font-medium text-gray-900">Ingat Saya</label>
                        </div>
                        <div className='text-sm font-medium text-gray-900'> Lupa Kata Sandi?{" "}
                        <Link to="/*" className="text-sm text-blue-700 dark:text-blue-500">Pulihkan di sini</Link>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
                    <div className="text-sm font-medium text-gray-900">
                        Belum memiliki akun? <Link to="/Register" className="text-blue-700 dark:text-blue-500">Daftar</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </div>      
        
        </>
    )
}

export default Navbar