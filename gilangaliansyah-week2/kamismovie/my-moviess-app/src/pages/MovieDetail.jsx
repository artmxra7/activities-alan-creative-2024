  // MovieDetails.jsx
  import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

  const MovieDetails = ({ match }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const {id} = useParams();

    useEffect(() => {
      const apiKey = 'e2f3842d3dc69632ce5239805027600e';
      const movieId = match.params.id; // Extract movie ID from the route parameters

      const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setMovieDetails(data))
        .catch((error) => console.error('Error fetching movie details:', error));
    }, [match.params.id]);

    if (!movieDetails) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        {/* Add more details as needed */}
      </div>
    );
  };

  export default MovieDetails;
