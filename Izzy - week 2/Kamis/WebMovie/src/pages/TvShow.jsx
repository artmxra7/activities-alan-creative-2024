import { useEffect, useState } from "react";
import { API_KEY, URLTVSHOW, instance } from "../api";
import ScrollView from "../elements/Scrollview";
import { debounce } from "lodash";

const TvShow = () => {
    const [moviesImages, setMoviesImages] = useState([]);

    const fetchMovies = debounce(async () => {
        try{
            const response = await instance.get(URLTVSHOW + API_KEY, '&append_to_response=images');
            console.log(response.data.results);
            setMoviesImages(response.data.results);
        }catch(error){
            console.log(error)
        }
    }, 100)

    useEffect(() => {
        fetchMovies();
    }, []);

    return(
        <>
            <ScrollView moviesImages={moviesImages}/>
        </>
    )
}

export default TvShow