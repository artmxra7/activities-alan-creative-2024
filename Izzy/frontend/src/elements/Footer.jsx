import { Link } from "react-router-dom"
import { ImWhatsapp } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import { RiMessage2Line } from "react-icons/ri"
import { useEffect, useState } from "react"

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    const isMobilev2 = width <= 1080;

    return(
        <footer className={`bg-gray-800 text-white ${isMobile ? 'p-6' : 'p-6'} w-full`} style={{marginBottom: isMobile ? "75px" : isMobilev2 ? "0px" : "" }}>
            <div className={`${isMobile ? 'w-full' : 'w-3/4'} container mx-auto flex justify-between items-center`}>
                <Link to="/" className='text-3xl font-bold' style={{ fontFamily: 'Montserrat' }}>Toko</Link>
            </div>
            <div className={`${isMobile ? 'w-full' : 'w-3/4'} container mx-auto flex justify-between items-center mt-3`}>
                <div className="w-1/3 mt-2">
                    <p className="text-sm">Tentang Toko</p>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 space-x-2">
                    <div>
                        <Link to={"/"} className="hover:text-gray-400">Hubungi Kami</Link>
                        <div className="flex space-x-4">
                            <ImWhatsapp size={20} className="mt-2"/>
                            <MdEmail size={20} className="mt-2"/>
                            <RiMessage2Line size={20} className="mt-2"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={`${isMobile ? 'w-full' : 'w-3/4'} my-4 mx-auto`} style={{marginTop: isMobile ? "20px" : "70px", marginBottom: isMobile ? "20px" : "50px"}}/>
            <div className={`${isMobile ? 'w-full' : 'w-3/4'} container mx-auto flex justify-between items-center`}>
                <h4>@2024 Toko. All Right Reserved</h4>
            </div>
        </footer>
    )
}

export default Footer