import {Link} from 'react-router-dom'

const AuthLayouts = ( props ) => {
    const {children, type} = props
    return (
      <div className={`flex justify-center min-h-screen items-center`}>
        <div className="border-gray-700" style={{borderRadius: '360px', width: '35%'}}>
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
  
        <Link to="/Register" className="text-blue-600 hover:font-bold">
          Daftar</Link>
  
        </p>
      )
    }else{
      return ( 
        <p className="text-sm mt-5 text-center">
        Sudah memiliki akun?{" "}
  
        <Link to="/Login" className="text-blue-600 hover:font-bold">
        Login</Link>
        </p>
      )
    }
  }

export default AuthLayouts;