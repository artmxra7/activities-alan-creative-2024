import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Profile from './pages/Profile.jsx'
import AudioPages from './pages/HomeChildrenPages/AudioPages.jsx'
import MonitorPages from './pages/HomeChildrenPages/MonitorPages.jsx'
import ErrorPages from './pages/ErrorPages.jsx'
import PCComponentPages from './pages/HomeChildrenPages/PCComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPages />,
    children: [
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/*',
        element: <App />,
        children: [
          {
            path: '/*/Audio',
            element: <AudioPages />,
          },
          {
            path: '/*/Monitor',
            element: <MonitorPages />,
          },
          {
            path: '/*/PCComponent',
            element: <PCComponentPages />,
          }
        ]
      }
    ]
  },
  // {
  //   path: '/Home',
  //   element: <Home />,
  //   children: [
  //     {
  //       path: '/Home/Audio',
  //       element: <AudioPages />,
  //     },
  //     {
  //       path: '/Home/Monitor',
  //       element: <MonitorPages />,
  //     },
  //     {
  //       path: '/Home/PCComponent',
  //       element: <PCComponentPages />,
  //     }
  //   ]
  // },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
