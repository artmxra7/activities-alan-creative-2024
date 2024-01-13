import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import ProdukPages from "./AdminHomeChildrenPages/ProdukPages";
import TransaksiPages from "./AdminHomeChildrenPages/TransaksiPages";

const AdminHome = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const [ButtonIndex, setButtonIndex] = useState(() => {
        const savedIndex = sessionStorage.getItem('buttonIndex');
        return savedIndex !== null ? JSON.parse(savedIndex) : null;
    });  

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    const PageCheck = (role) => {
        if (role === 'User' || role === null || role === undefined) {
          return '/activities-alan-creative-2024/';
        } else if (role === 'staff') {
          return '/activities-alan-creative-2024/*/Staff';
        }
    }

    const handleClick = (index) => {
        const paths = ['/activities-alan-creative-2024/*/Admin', '/activities-alan-creative-2024/*/Admin/Produk', '/activities-alan-creative-2024/*/Admin/Transaksi'];
        navigate(paths[index]); 
    }

    useEffect(() => {
        document.title = 'Beranda - Admin'
        window.addEventListener('resize', handleWindowSizeChange);
        sessionStorage.setItem('buttonIndex', JSON.stringify(ButtonIndex));
        const role = sessionStorage.getItem('role');
        ButtonIndex === null ? setButtonIndex(1) : setButtonIndex(ButtonIndex);
        if(role != 'admin'){
            navigate(PageCheck(role));
        }else{
            handleClick(ButtonIndex);
        }
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [ButtonIndex])

    const isMobile = width <= 768;
    return (
        <div className="min-h-screen" style={{backgroundColor: 'rgba(239, 242, 251, 1)', marginTop: '89px'}}>
            {!isMobile && (
            <div className="w-full grid grid-cols-3 bg-white">
                <span className="cursor-pointer" onClick={() => {handleClick(0); setButtonIndex(0);}}>
                    <h1 className="border-gray-500 text-center p-5 cursor-pointer" style={{borderRight: '1px solid #E5E7EB'}}>Beranda</h1>
                </span>
                <span className="cursor-pointer" onClick={() => {handleClick(1); setButtonIndex(1);}}>
                    <h1 className="border-gray-500 text-center p-5 cursor-pointer">Produk</h1>
                </span>
                <span className="cursor-pointer" onClick={() => {handleClick(2); setButtonIndex(2);}}>
                    <h1 className="border-gray-500 text-center p-5 cursor-pointer" style={{borderLeft: '1px solid #E5E7EB'}}>Transaksi</h1>
                </span>
            </div>
            )}
            <div>
                <Routes>
                    <Route path='*/Admin/Produk' element={<ProdukPages/>}></Route>
                    <Route path='*/Admin/Transaksi' element={<TransaksiPages/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default AdminHome