import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthLayouts from "../layouts/AuthLayouts"
import api from "../api"
import { PostLoginCheck } from "../services/PostLoginCheck"

const Login = () => {
    const [ErrorLogin, setErrorLogin] = useState(false)
    const navigate = useNavigate()
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

    PostLoginCheck(navigate);

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
            // console.log(response)
            setErrorLogin(false)
            window.localStorage.setItem('token', response.data)
            navigate('/')
        }
    }
    
    return(
        <AuthLayouts type="Login">
            <form onSubmit={handleLogin}>
                {isMobile ? (
                <Link to={`${LinkTo()}`} className='flex items-center space-x-3 rtl:space-x-reverse' style={{ fontFamily: 'Montserrat' }} onClick={() => setMenuOpen(false)}>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Toko</span>
                </Link>
                ) : (
                <></>
                )}
                {ErrorLogin && <p className="text-red-500 mb-6">Error Login</p>}
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Alamat Email</label>
                    <input
                    type="email" name="email" aria-label="Email" className="text-sm border w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder="Email Anda di sini" style={{borderRadius: '45px'}}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">Kata Sandi</label>
                    <input
                    type="password" name="password" aria-label="Password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" placeholder="Kata Sandi Anda di sini" style={{borderRadius: '45px'}}/>
                </div>
                <div className="flex mb-6 justify-end space-x-1">
                    <p className="text-sm">Lupa Kata Sandi? </p><Link to={""} className="text-sm font-semibold text-blue-600" style={{fontFamily: 'Montserrat'}}>Pulihkan di sini</Link>
                </div>
                <button className="h-10 px-6 font-semibold rounded-md bg-blue-600 w-full text-white" style={{borderRadius: '45px'}} type="submit">Login</button>
            </form>
        </AuthLayouts>
    )
}

export default Login