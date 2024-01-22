import { useState } from 'react'
import Movie from './components/cr'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Movie />
    </>
  )
}

export default App
