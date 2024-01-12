import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import ProdukPages from "./AdminHomeChildrenPages/ProdukPages";
import TransaksiPages from "./AdminHomeChildrenPages/TransaksiPages";

const AdminHome = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const [ButtonIndex, setButtonIndex] = useState(() => {
        const savedIndex = sessionStorage.getItem('buttonIndex');
        return savedIndex !== null ? JSON.parse(savedIndex) : 0;
    });  

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    const handleClick = (index) => {
        const paths = ['/Admin', '/Admin/*/Produk', '/Admin/*/Transaksi'];
        setButtonIndex(index);
        navigate(paths[index]); 
    }

    useEffect(() => {
        document.title = 'Beranda - Admin'
        sessionStorage.setItem('buttonIndex', JSON.stringify(ButtonIndex));
        handleClick(ButtonIndex);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [ButtonIndex])

    const isMobile = width <= 768;
    return (
        <div className="min-h-screen" style={{backgroundColor: 'rgba(239, 242, 251, 1)', marginTop: '89px'}}>
            <div className="w-full grid grid-cols-3 bg-white">
                <span className="cursor-pointer" onClick={() => {handleClick(0);}}>
                    <h1 className="border-gray-500 text-center p-5 cursor-pointer" style={{borderRight: '1px solid #E5E7EB'}}>Beranda</h1>
                </span>
                <span className="cursor-pointer" onClick={() => {handleClick(1);}}>
                    <h1 className="border-gray-500 text-center p-5 cursor-pointer">Produk</h1>
                </span>
                <span className="cursor-pointer" onClick={() => {handleClick(2);}}>
                    <h1 className="border-gray-500 text-center p-5 cursor-pointer" style={{borderLeft: '1px solid #E5E7EB'}}>Transaksi</h1>
                </span>
            </div>
            <div>
                <Routes>
                    <Route path='/Admin/*/Produk' element={<ProdukPages/>}></Route>
                    <Route path='/Admin/*/Transaksi' element={<TransaksiPages/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default AdminHome