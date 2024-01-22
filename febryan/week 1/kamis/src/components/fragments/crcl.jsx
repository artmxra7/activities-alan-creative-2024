import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movie() {
    const [movieList, setMovieList] = useState([]);

    const apiKey = 'e2f3842d3dc69632ce5239805027600e';

    const getMovie = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
            .then((res) => res.json())
            .then((json) => setMovieList(json.results))
            .catch((error) => console.error("Error fetching movie data:", error));
    };

    useEffect(() => {
        getMovie();
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
    };

    return (
        <div>
            <Slider {...settings}>
                {movieList.map((movie) => (
                    <div key={movie.id} style={{ margin: "0 10px" }}>
                        <img
                            style={{ width: "100%", height: "250px", cursor: "pointer" }}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            onClick={() => {
                                // Handle click action, e.g., redirect to movie details page
                                console.log("Clicked on movie:", movie.title);
                            }}
                        />
                        <p style={{ textAlign: "center" }}>{movie.title}</p>
                        <p style={{ textAlign: "center" }}>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Movie;