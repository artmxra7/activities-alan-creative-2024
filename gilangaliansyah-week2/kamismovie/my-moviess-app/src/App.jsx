// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Up from './components/up';
import InTheaters from '../src/pages/in-theaters';
import TvShows from './pages/tv-shows';
import TopRated from '../src/pages/top-rated';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Up />
        <Routes>
          <Route path="/in-theaters" element={<InTheaters />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
