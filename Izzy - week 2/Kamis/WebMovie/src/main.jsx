import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ViewPage from './pages/ViewPage.jsx'
import InTheatres from './pages/InTheatres.jsx'
import TvShow from './pages/TvShow.jsx'
import Popular from './pages/Popular.jsx'
import Search from './pages/Search.jsx'

const router = createBrowserRouter([
  {
    path: '/WebMovieExample/',
    element: <App />,
    children:[
      {
        path: '/WebMovieExample/intheatres',
        element: <InTheatres />
      },
      {
        path: '/WebMovieExample/Popular',
        element: <Popular />
      },
      {
        path: '/WebMovieExample/TvShow',
        element: <TvShow />
      },
      {
        path: '/WebMovieExample/Search/:search',
        element: <Search />
      }
    ]
  },
  {
    path: '/WebMovieExample/ViewPage/:type/:id',
    element: <ViewPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      {/* <App /> */}
  </React.StrictMode>,
)
