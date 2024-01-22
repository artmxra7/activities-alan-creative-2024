import { Route, Routes, useNavigate } from 'react-router-dom'
import ViewPage from './pages/ViewPage'
import { Fragment, useEffect, useState } from 'react'
import NavBar from './elements/NavBar'
import TvShow from './pages/TvShow'
import Popular from './pages/Popular'
import InTheatres from './pages/InTheatres'
import Search from './pages/Search'

const App = () => {
  const navigate = useNavigate();
  const Goto = () => {
    const Index = localStorage.getItem('WebAppHomeIndex') ? JSON.parse(localStorage.getItem('WebAppHomeIndex')) : 0;
    switch(Index){
      case 0:
        navigate('/WebMovieExample/Intheatres');
        break;
      case 1:
        navigate('/WebMovieExample/popular');
        break;
      case 2:
        navigate('/WebMovieExample/tvshow');
        break;
    }
  }

  useEffect(() => {
    Goto();
  },[]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Intheatres" element={<InTheatres />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>    
    </>
  )
}

export default App
