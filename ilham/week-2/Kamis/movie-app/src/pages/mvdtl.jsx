// MovieDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const apiKey = 'e2f3842d3dc69632ce5239805027600e';

const MovieDetail = () => {
  const { id } = useParams();
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [crew, setCrew] = useState([]);

  const fetchCrew = (mediaId, mediaType) => {
    if (!mediaType) {
      console.error("Invalid media type");
      return;
    }

    const crewUrl = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${apiKey}`;

    fetch(crewUrl)
      .then((res) => res.json())
      .then((json) => setCrew(json.crew))
      .catch((error) => console.error("Error fetching crew data:", error));
  };

  useEffect(() => {
    // Fetch details for the selected movie using the id parameter
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        setSelectedMedia(json);
        fetchCrew(id, "movie");
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
  };

  return (
    <div className="text-center">
      {selectedMedia && (
        <div>
          <h2>{selectedMedia.title}</h2>
          <div className="card mx-auto" style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMedia.poster_path}`}
              alt={selectedMedia.title}
              className="card-img-top rounded-md mx-auto mt-4"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </div>
          <p>Rating: {selectedMedia.vote_average}</p>
          <p>Overview: {selectedMedia.overview}</p>

          {crew.length > 0 && (
            <div>
              <h3>Crew:</h3>
              <Slider {...settings}>
                {crew.map((crewMember) => (
                  <div key={crewMember.id} className="text-center">
                    <div className="card mx-auto" style={{ width: "200px" }}>
                      <img
                        src={`https://image.tmdb.org/t/p/w342${crewMember.profile_path}`}
                        alt={crewMember.name}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{crewMember.name}</h5>
                        <p className="card-text text-sm italic">{crewMember.job}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
