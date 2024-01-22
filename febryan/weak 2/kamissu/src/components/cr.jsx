import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const apiKey = 'e2f3842d3dc69632ce5239805027600e';

const Movie = () => {
    const [movieList, setMovieList] = useState([]);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("inTheaters");
    const [crew, setCrew] = useState([]);

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
                // Fetch crew information for the first movie/TV show in the list
                if (json.results.length > 0) {
                    fetchCrew(json.results[0].id, json.results[0].media_type);
                }
            })
            .catch((error) => console.error("Error fetching movie data:", error));
    };

    const fetchCrew = (mediaId, mediaType) => {
        // Pastikan mediaType tidak bernilai undefined atau null
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
        getMovie(searchTerm);
    }, [searchTerm, filter]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const handleClick = (media) => {
        setSelectedMedia(media);

        // Set media_type dengan benar sebelum fetch crew
        const mediaType = media.media_type || "movie";

        // Fetch crew information for the selected movie/TV show
        fetchCrew(media.id, mediaType);
    };

    const MediaDescription = ({ media }) => (
        <div style={{ textAlign: "center" }}>
            <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt="" />
            <h2>{media.title || media.name}</h2>
            <p>Rating: {media.vote_average}</p>
            <p>Overview: {media.overview}</p>

            {/* Display crew members in a horizontal slider */}
            {crew.length > 0 && (
                <div>
                    <h3>Crew:</h3>
                    <Slider {...settings}>
                        {crew.map((crewMember) => (
                            <div key={crewMember.id} style={styles.crewMember}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${crewMember.profile_path}`}
                                    alt={crewMember.name}
                                    style={styles.crewMemberImage}
                                />
                                <p style={styles.crewMemberName}>{crewMember.name}</p>
                                <p style={styles.crewMemberJob}>{crewMember.job}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );

    const filterOptions = [
        { value: "inTheaters", label: "In Theaters" },
        { value: "popular", label: "Popular" },
        { value: "tvShows", label: "TV Shows" },
    ];

    const handleFilterClick = (value) => {
        setFilter(value);
    };

    const styles = {
        crewMember: {
            textAlign: "center",
            margin: "0 10px",
        },
        crewMemberImage: {
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
        },
        crewMemberName: {
            marginTop: "5px",
        },
        crewMemberJob: {
            fontSize: "12px",
            fontStyle: "italic",
        },
    };

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "10px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        marginRight: "10px",
                    }}
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
                {movieList.map((media) => (
                    <div
                        key={media.id}
                        style={{
                            margin: "0 10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img
                            style={{
                                Width: "100",
                                height: "300px",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                            alt={media.title || media.name}
                            onClick={() => handleClick(media)}
                        />
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "18px",
                                fontWeight: "bold",
                                marginTop: "10px",
                            }}
                        >
                            {media.title || media.name}
                        </p>
                    </div>
                ))}
            </Slider>

            {selectedMedia && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <MediaDescription media={selectedMedia} />
                </div>
            )}
        </div>
    );
};

export default Movie;