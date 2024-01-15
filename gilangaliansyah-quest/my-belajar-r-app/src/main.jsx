import React from 'react'
import ReactDOM from 'react-dom/client'
import RegisterPage from './Pages/register.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import ErrorPage from './Pages/404.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello saya mencoba berpindah link</div>,
    errorElement: <ErrorPage/>,
    
  }, {
    path: '/login',
    element: <LoginPage />,
  },{
    path: '/register',
    element: <RegisterPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
