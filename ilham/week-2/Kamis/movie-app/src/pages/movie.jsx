// Movie.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const apiKey = 'e2f3842d3dc69632ce5239805027600e';

const Movie = () => {
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("inTheaters");

  const getMovie = (query) => {
    let url;

    if (query) {
      url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`;
    } else {
      switch (filter) {
        case "popular":
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
          break;
        case "tvShows":
          url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
          break;
        default:
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
          break;
      }
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-arrow" onClick={onClick}><span>Next</span></div>;
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-arrow" onClick={onClick}><span>Prev</span></div>;
  };

  const handleClick = (media) => {
    setSelectedMedia(media);
    navigate(`/movie/${media.id}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const filterOptions = [
    { value: "inTheaters", label: "In Theaters" },
    { value: "popular", label: "Popular" },
    { value: "tvShows", label: "TV Shows" },
  ];

  const handleFilterClick = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    getMovie(searchTerm);
  }, [searchTerm, filter]);

  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 text-base border border-gray-300 rounded mr-2"
        />
      </div>

      <div className="text-center mb-4">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleFilterClick(option.value)}
            className={`m-1 p-2 text-base border border-gray-300 rounded ${filter === option.value ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <Slider {...settings}>
        {movieList.map((media) => (
          <div
            key={media.id}
            className="m-2 flex flex-col items-center"
          >
            <img
              className="h-60 rounded cursor-pointer object-fill w-[400px]"
              src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
              alt={media.title || media.name}
              onClick={() => handleClick(media)}
              style={{ margin: '0 20' }}
            />
            <p
              className="text-lg font-bold mt-2"
            >
              {media.title || media.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Movie;
