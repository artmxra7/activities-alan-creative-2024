import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const AuthLayouts = ( props ) => {
    const {children, type} = props
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      document.title = type;
      window.addEventListener('resize', handleWindowSizeChange);

      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

    return (
      <div className={`flex justify-center items-center min-h-screen`}>
        <div className="border-gray-700" style={{borderRadius: '360px', width: isMobile ? '90%' : '35%', marginTop: isMobile ? '5%' : '0' , marginBottom: isMobile ? '5%' : '0'}}>
          <div className="bg-white shadow-lg px-6 py-6 border" style={{borderRadius: '25px'}}>
            <h1 className="text-3xl font-bold mb-6">{title({ type })}</h1>
            {children}
            <Navigation type={type}/>
          </div>
        </div>
      </div>
    )
};

const title = ({ type }) => {
    if (type === "Login") {
      return "Login"
    }else{
      return "Register"
    }
}

const Navigation = ({ type }) => {
    if (type === "Login") {
      return ( 
        <p className="text-sm mt-5 text-center">
        Belum memiliki akun?{" "}
  
        <Link to="/activities-alan-creative-2024/Register" className="text-blue-600 hover:font-bold">
          Daftar</Link>
  
        </p>
      )
    }else{
      return ( 
        <p className="text-sm mt-5 text-center">
        Sudah memiliki akun?{" "}
  
        <Link to="/activities-alan-creative-2024/Login" className="text-blue-600 hover:font-bold">
        Login</Link>
        </p>
      )
    }
  }

export default AuthLayouts;