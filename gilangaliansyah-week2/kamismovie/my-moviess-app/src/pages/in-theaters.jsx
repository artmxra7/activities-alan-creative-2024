import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const InTheaters = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); // Import and use the useNavigate hook

  useEffect(() => {
    const apiKey = 'e2f3842d3dc69632ce5239805027600e';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: '10px', width: 'calc(25% - 20px)' }}>
            <div
              style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}
              onClick={() => navigate(`/MovieDetail/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <h2 style={{ marginTop: '10px', textAlign: 'center' }}>{movie.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InTheaters;
