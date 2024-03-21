import Header from '../elements/Header';
import Footer from '../elements/Footer';
import { useEffect, useState } from 'react';
import { CgMenuRight, CgScreen } from 'react-icons/cg';
import MonitorPages from './HomeChildrenPages/MonitorPages';
import AudioPages from './HomeChildrenPages/AudioPages';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { FaHeadphones } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import PCComponentPages from './HomeChildrenPages/PCComponent';
import '../Styles/HomeStyle.css';
import HeaderMobile from '../elements/HeaderMobile';

const Home = () => {
    const [ButtonIndex, setButtonIndex] = useState(() => {
        const savedIndex = sessionStorage.getItem('buttonIndex');
        return savedIndex !== null ? JSON.parse(savedIndex) : null;
    });  
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const handleClick = (index) => {
        const paths = ['/activities-alan-creative-2024/*/Home/Audio', '/activities-alan-creative-2024/*/Home/Monitor', '/activities-alan-creative-2024/*/Home/PCComponent'];
        sessionStorage.setItem('buttonIndex', JSON.stringify(index));
        navigate(paths[index]); 
    }

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    const PageCheck = (role, ButtonIndex) => {
        if (role === 'User' || role === null || role === undefined) {
            switch (ButtonIndex) {
                case 0:
                  return '/activities-alan-creative-2024/*/Home/Audio';
                case 1:
                  return '/activities-alan-creative-2024/*/Home/Monitor';
                case 2:
                  return '/activities-alan-creative-2024/*/Home/PCComponent';
              }
        }
        if (role === 'admin') {
          return '/activities-alan-creative-2024/*/Admin';
        } else if (role === 'staff') {
          return '/activities-alan-creative-2024/*/Staff';
        }
    }

    useEffect(() => {
        document.title = 'Beranda';
        window.addEventListener('resize', handleWindowSizeChange);
        sessionStorage.setItem('buttonIndex', JSON.stringify(ButtonIndex));
        const role = sessionStorage.getItem('role');
        ButtonIndex === null ? setButtonIndex(0) : setButtonIndex(ButtonIndex);
        navigate(PageCheck(role, ButtonIndex));

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [ButtonIndex]);

    const isMobile = width <= 768;
        
        return(
            <div>
                {!isMobile ? (<Header/>) : (<HeaderMobile/>)}
                <div className={`container-full p-5 mx-auto ${isMobile ? 'min-h-screen' : ''}`} style={{backgroundColor: 'rgba(239, 242, 251, 1)'}}>
                    
                {!isMobile && (
                        <div className='flex container mx-auto flex-wrap'>
                            <button className={`flex items-center h-10 px-6 font-semibold rounded-md bg-transparent text-black border-b-2 shadow-md me-8`} style={{borderRadius: "45px"}} onClick={() => window.location.href = "/activities-alan-creative-2024/Kategori"}>
                            <span className='mr-2'><CgMenuRight className='transform -scale-x-100' size={20}/></span>Semua Kategori</button>            
                            <button className={`h-10 px-6 font-semibold rounded-md text-black border-b-2 ${ButtonIndex === 0 ? 'border-b-2 bg-blue-700  text-white shadow-md' : 'bg-transparent'} shadow-sm me-2`} style={{borderRadius: "45px"}}
                            onClick={() => {setButtonIndex(0); handleClick(0);}}>Audio</button>            
                            <button className={`h-10 px-6 font-semibold rounded-md text-black border-b-2 ${ButtonIndex === 1 ? 'border-b-2 bg-blue-700 text-white shadow-md' : 'bg-transaprent'} shadow-sm me-2`} style={{borderRadius: "45px"}}
                            onClick={() => {setButtonIndex(1); handleClick(1);}}>Monitor</button>            
                            <button className={`h-10 px-6 font-semibold rounded-md text-black border-b-2 ${ButtonIndex === 2 ? 'border-b-2 bg-blue-700 text-white shadow-md' : 'bg-transparent'} shadow-sm`} style={{borderRadius: "45px"}}
                            onClick={() => {setButtonIndex(2); handleClick(2);}}>Pc Component</button> 
                        </div>
                    )}
                    <div>
                        <Routes>
                            <Route path='*/Home/Audio' element={<AudioPages/>}/>
                            <Route path='*/Home/Monitor' element={<MonitorPages/>}/>
                            <Route path='*/Home/PCComponent' element={<PCComponentPages/>}/>
                        </Routes>
                    </div>
                </div>
                {isMobile && (
                 <div className='bg-white fixed w-full z-20 bottom-0 start-0 border-gray-200 dark:border-gray-600 shadow-md'>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto">
                        <button className={`flex items-center border p-4 w-20 justify-center text-sm`}><span><CgMenuRight className='mx-auto transform -scale-x-100' size={20}/>Kategori</span></button>
                        <button className={`flex items-center border p-4 w-20 justify-center text-sm ${ButtonIndex === 0 ? 'bg-blue-700 text-white' : 'bg-transparent'}`}
                        onClick={() => {setButtonIndex(0); handleClick(0);}}><span><FaHeadphones className='mx-auto transform' size={20}/>Audio</span></button>
                        <button className={`flex items-center border p-4 w-20 justify-center text-sm ${ButtonIndex === 1 ? 'bg-blue-700 text-white' : 'bg-transparent'}`}
                        onClick={() => {setButtonIndex(1); handleClick(1);}}><span><CgScreen className='mx-auto' size={20}/>Monitor</span></button>
                        <button className={`flex items-center border p-4 w-20 justify-center text-sm ${ButtonIndex === 2 ? 'bg-blue-700 text-white' : 'bg-transparent'}`}
                        onClick={() => {setButtonIndex(2); handleClick(2);}}><span><BsGpuCard className='mx-auto' size={20}/>PC Part</span></button>
                    </div>
                 </div>   
                )}
                <Footer/>
            </div>
    )
}

export default Home