import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const navigate = useNavigate(); // Import and use the useNavigate hook

  useEffect(() => {
    const apiKey = 'e2f3842d3dc69632ce5239805027600e';
    const apiUrl = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTvShows(data.results))
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
        {tvShows.map((tvShow) => (
          <div key={tvShow.id} style={{ margin: '10px', width: 'calc(25% - 20px)' }}>
            <div
              style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}
              onClick={() => navigate(`/MovieDetail/${tvShow.id}`)} // Use tvShow.id instead of movie.id
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                alt={tvShow.name}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <h2 style={{ marginTop: '10px', textAlign: 'center' }}>{tvShow.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TvShows;
