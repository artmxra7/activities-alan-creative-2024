import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Profile from './pages/Profile.jsx'
import AudioPages from './pages/HomeChildrenPages/AudioPages.jsx'
import MonitorPages from './pages/HomeChildrenPages/MonitorPages.jsx'
import ErrorPages from './pages/ErrorPages.jsx'
import PCComponentPages from './pages/HomeChildrenPages/PCComponent.jsx'
import StaffHome from './pages/StaffHome.jsx'
import ProdukPages from './pages/AdminHomeChildrenPages/ProdukPages.jsx'
import TransaksiPages from './pages/AdminHomeChildrenPages/TransaksiPages.jsx'

const router = createBrowserRouter([{
    path: '/activities-alan-creative-2024//*',
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: '/activities-alan-creative-2024/*/Cart',
        element: <Cart />,
      },
      {
        path: '/activities-alan-creative-2024/*/Profile',
        element: <Profile />,
      }, 
      {
        path: '/activities-alan-creative-2024/*/Home',
        element: <App />,
        children: [  
          {
            path: '/activities-alan-creative-2024/*/Home/Audio',
            element: <AudioPages />,
          },
          {
            path: '/activities-alan-creative-2024/*/Home/Monitor',
            element: <MonitorPages />,
          },
          {
            path: '/activities-alan-creative-2024/*/Home/PCComponent',
            element: <PCComponentPages />,
          },     
        ]
      },
      {
        path: '/activities-alan-creative-2024/*/Admin',
        element: <App />,
        children: [
          {
            path: '/activities-alan-creative-2024/*/Admin/Produk',
            element: <ProdukPages />,
          },
          {
            path: '/activities-alan-creative-2024/*/Admin/Transaksi',
            element: <TransaksiPages   />,
          }
        ]
      },
      {
        path: '/activities-alan-creative-2024/*/Staff',
        element: <StaffHome />,
      }
    ]
  },
  {
    path: '/activities-alan-creative-2024/Login',
    element: <Login />,
  },
  {
    path: '/activities-alan-creative-2024/Register',
    element: <Register />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
