import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movie1() {
    const [movieList, setMovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("all");
    const [query, setQuery] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);

    const apiKey = 'e2f3842d3dc69632ce5239805027600e';

    useEffect(() => {
        const fetchMovies = async () => {
            let url;

            if (query) {
                url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
            } else {
                switch (filter) {
                    case "popular":
                        url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
                        break;
                    case "tvShows":
                        url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
                        break;
                    default:
                        url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
                        break;
                }
            }

            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovieList(data.results);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };

        fetchMovies();
    }, [query, filter]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setQuery(event.target.value);
    };

    const filterOptions = [
        { value: "all", label: "All" },
        { value: "popular", label: "Popular" },
        { value: "tvShows", label: "TV Shows" },
    ];

    const handleFilterClick = (value) => {
        setFilter(value);
    };

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
    };

    const openMovieDetails = (movie) => {
        setSelectedMovie(movie);
    };

    const closeMovieDetails = () => {
        setSelectedMovie(null);
    };

    return (
        <div>
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                {filterOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleFilterClick(option.value)}
                        style={{
                            margin: "0 5px",
                            padding: "10px",
                            fontSize: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            background: filter === option.value ? "#66afe9" : "white",
                            color: filter === option.value ? "white" : "black",
                            cursor: "pointer",
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
            <Slider {...settings}>
                {movieList.map((movie) => (
                    <div key={movie.id} style={{ margin: "0 10px" }}>
                        <img
                            style={{
                                width: "100%",
                                height: "250px",
                                cursor: "pointer",
                                marginBottom: "20px", // Add margin-bottom for spacing
                            }}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            onClick={() => openMovieDetails(movie)}
                        />
                        <p style={{ textAlign: "center" }}>{movie.title}</p>
                        <p style={{ textAlign: "center" }}>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </Slider>
            {selectedMovie && (
                <div className="modal">
                    <div className="modal-content">
                        <img
                            src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
                            alt={selectedMovie.title}
                        />
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.overview}</p>
                        {/* Add more details and crew information as needed */}
                        <button onClick={closeMovieDetails}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Movie1;
