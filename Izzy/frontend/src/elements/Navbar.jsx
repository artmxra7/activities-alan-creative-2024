import { useState, useEffect } from 'react';
import { IoMdCart } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaProductHunt } from "react-icons/fa6";
import { RiBillFill } from "react-icons/ri";
import api from '../api';
import { debounce } from 'lodash';

const Profile = debounce(async (setLoginStat, setDatUser, setLoading) => {
    try{
        const token = localStorage.getItem('token')
        setLoading(true)
        if(token != null && token != undefined && token.length > 0){
        const response = await api.get('/NavProfile/'+token)
        if(response.status === 200){
            setLoginStat(true)
            setLoading(false)
            setDatUser({
                namauser: response.data.namauser,
                gambar: response.data.gambar,
                previewGambar: `http://localhost:8000/images/${response.data.gambar}`
            });
            sessionStorage.setItem('role', response.data.role)
        }else{
            setLoginStat(false)
            setLoading(false)
        }
        }else{
            setLoading(false)
            setLoginStat(false)
        }
    }catch(err){
        if(err.response.status === 401 || err.response.status === 500){
            setLoginStat(false)
            setLoading(false)
        }
    }
}, 300);

const Navbar = () => {
    const [LoginStat, setLoginStat] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [ErrorLogin, setErrorLogin] = useState(false)
    const [DatUser, setDatUser] = useState({namauser: '', gambar: '', previewGambar: ''}); 
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const role = sessionStorage.getItem('role');

    const navigate = useNavigate();

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    const LinkTo = (role) => {
        const ButtonIndex = sessionStorage.getItem('buttonIndex');
        if (role === 'User' || role === null || role === undefined) {
          switch (ButtonIndex) {
            case 0:
              return '/*/Audio';
            case 1:
              return '/*/Monitor';
            case 2:
              return '/*/PCComponent';
          }
        } else if (role === 'admin') {
          return '/Admin';
        } else if (role === 'staff') {
          return '/Staff';
        }
      };

    useEffect(() => {
        Profile(setLoginStat, setDatUser, setLoading);
        navigate(LinkTo(role))

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log("kacau")

        const data = {
            'email': e.target.email.value,
            'password': e.target.password.value
        }

        const response = await api.post('/login', data)

        if(response.data == 401) {
            setErrorLogin(true)
        }else{
            setErrorLogin(false)
            window.localStorage.setItem('token', response.data.token)
            sessionStorage.setItem('role', response.data.role)
            response.data.role === 'User' ? [navigate('/'), Profile(setLoginStat, setDatUser, setLoading), setOpenLoginModal(false)] : response.data.role === 'admin' ? [navigate('/Admin'), Profile(setLoginStat, setDatUser, setLoading), setOpenLoginModal(false)] : [navigate('/Staff'), Profile(setLoginStat, setDatUser, setLoading), setOpenLoginModal(false)]
        }
    }

    const isMobile = width <= 768;

    return(
        <>
        <nav className='bg-white border-gray-200 fixed w-full top-0 start-0 z-20 shadow-sm'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={`${LinkTo(role)}`} className='flex items-center space-x-3 rtl:space-x-reverse' style={{ fontFamily: 'Montserrat' }} onClick={() => setMenuOpen(false)}>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Toko</span>
                </Link>
                <div className="flex md:order-1">
                    {role === 'User' || role === null || role === undefined ? (
                    <button type="button" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                    onClick={() => {navigate('/Cart'); setMenuOpen(false)}}>
                        <span><IoMdCart size={20}/></span>
                    </button>
                    )
                    : (
                    <button type="button" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                        onClick={() => {navigate('/Admin/*/Produk'); setMenuOpen(false)}}>
                            <span><FaProductHunt size={20}/></span>
                    </button>
                    )}
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" name="" className="block p-2 ps-10 text-sm text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{width: '600px', backgroundColor: 'rgba(239, 242, 251, 1)'}} placeholder="Search..." />
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" 
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600`}
                    aria-controls="navbar-search" aria-expanded="false" onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id='navbar-search'>
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" name="" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <ul className="flex flex-wrap justify-center p-4 md:p-0 mt-4 font-medium first-letter:bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 m md:bg-white">
                        {loading ? (
                            <>
                            <li>
                                <span>
                                    <p className="flex justify-center items-center h-10 px-3 my-2 shadow-sm ms-2 me-2 text-black">
                                        Memuat...
                                    </p>
                                </span>
                            </li>
                            </>
                        ) : (<>
                                {isMobile ? (
                                    <>
                                    {LoginStat ? (
                                    <>
                                        <li style={{width: '50%'}}>
                                            {role === 'User' ? (
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 cursor-pointer" onClick={() => {navigate('/Cart');setMenuOpen(false)}}>
                                                <IoMdCart className='me-1'/>Cart
                                            </span>
                                            ) : role === 'admin' ? (
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 cursor-pointer" onClick={() => {navigate('/Admin/*/Produk');setMenuOpen(false)}}>
                                                <FaProductHunt className='me-1'/>Product
                                            </span>
                                            ) : (
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 cursor-pointer" onClick={() => {navigate('');setMenuOpen(false)}}>
                                                <FaProductHunt className='me-1'/>Product
                                            </span>
                                            )}
                                        </li>
                                        <li style={{width: '50%'}}>
                                            {role === 'admin' ? (
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 cursor-pointer" onClick={() => {navigate('/Admin/*/Transaksi');setMenuOpen(false)}}>
                                                <RiBillFill className='me-1'/> Transaction
                                            </span>
                                            ) : role === 'staff' ? (
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 cursor-pointer" onClick={() => {navigate('');setMenuOpen(false)}}>
                                                <RiBillFill className='me-1'/> Transaction
                                            </span>   
                                            ) : (
                                                <></>
                                            )}
                                        </li>
                                        <li style={{width: isMobile ? '100%' : ''}}>
                                            <span>
                                            <NavLink className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 text-black" to="/Profile" onClick={() => setMenuOpen(false)}>
                                                <img src={DatUser.gambar ? DatUser.previewGambar : "No-image-found.jpg"} className='w-7 rounded-full me-2'/>
                                                {DatUser.namauser}
                                            </NavLink>    
                                            </span>
                                        </li>
                                    </>
                                    ) : (
                                    <>
                                        <li>
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-md ms-2 me-2 cursor-pointer" onClick={() => {navigate('/Login'); setMenuOpen(false);}}>
                                                <IoMdCart className='me-1'/> Cart
                                            </span>
                                        </li>
                                        <li>
                                            <span className="flex justify-center items-center h-10 px-5 my-2 border border-gray-200 rounded-full shadow-md cursor-pointer" onClick={() => {setOpenLoginModal(true);setMenuOpen;}}>
                                                <p>Login</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="flex justify-center items-center h-10 px-5 my-2 border border-gray-200 rounded-full shadow-md bg-blue-500 text-white cursor-pointer" onClick={() => {navigate('/Register');setMenuOpen;;}}>
                                                <p>Register</p>
                                            </span>
                                        </li>
                                    </>
                                    )}
                                    </>
                                ) : (
                                    <>
                                    {LoginStat ? (
                                    <>
                                        <li>
                                            {role === 'User' ? (
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 cursor-pointer" onClick={() => {navigate('/Cart');setMenuOpen(false)}}>
                                                <IoMdCart className='me-1'/>Cart
                                            </span>
                                            ) : (
                                            <></>
                                            )}
                                        </li>
                                        <li>
                                            <span>
                                            <NavLink className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-sm ms-2 me-2 text-black" to="/Profile" onClick={() => setMenuOpen(false)}>
                                                <img src={DatUser.gambar ? DatUser.previewGambar : "No-image-found.jpg"} className='w-7 rounded-full me-2'/>
                                                {DatUser.namauser}
                                            </NavLink>    
                                            </span>
                                        </li>
                                    </>
                                    ) : (
                                    <>
                                        <li style={{width: isMobile ? '100%' : ''}}>
                                            <span className="flex justify-center items-center h-10 px-3 my-2 border border-gray-200 rounded-full shadow-md ms-2 me-2 cursor-pointer" onClick={() => {navigate('/Login'); setMenuOpen(false);}}>
                                                <IoMdCart className='me-1'/> Cart
                                            </span>
                                        </li>
                                        <li style={{width: isMobile ? '50%' : ''}}>
                                            <span className="flex justify-center items-center h-10 px-5 my-2 border border-gray-200 rounded-full shadow-md cursor-pointer" onClick={() => {setOpenLoginModal(true);setMenuOpen;}}>
                                                <p>Login</p>
                                            </span>
                                        </li>
                                        <li style={{width: isMobile ? '50%' : ''}}>
                                            <span className="flex justify-center items-center h-10 px-5 my-2 border border-gray-200 rounded-full shadow-md bg-blue-500 text-white cursor-pointer" onClick={() => {navigate('/Register');setMenuOpen;;}}>
                                                <p>Register</p>
                                            </span>
                                        </li>
                                    </>
                                    )}
                                    </>
                                )}
                            </> 
                            )}
                    </ul>
                </div>
            </div>
        </nav>


        
        {/* <!-- Main modal --> */}
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
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
                {ErrorLogin && <p className="text-red-500 mb-6">Error Login</p>}
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-black font-bold">Alamat Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400" style={{backgroundColor: "rgba(239, 242, 251, 1)"}} placeholder="Email Anda di sini" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm text-black font-bold">Kata Sandi</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400" style={{backgroundColor: "rgba(239, 242, 251, 1)"}} required/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Ingat Saya</label>
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