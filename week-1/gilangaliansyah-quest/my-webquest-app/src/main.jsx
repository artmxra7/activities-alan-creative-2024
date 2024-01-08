import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './page/loginpage.jsx'
import Register from './page/registerpage.jsx'

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  children:[
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Register",
      element: <Register/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
