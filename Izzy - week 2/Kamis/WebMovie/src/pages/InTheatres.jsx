import { useEffect, useState } from "react";
import {instance, API_KEY, URLNOWPLAYING} from "../api";
import ScrollView from "../elements/Scrollview";
import { debounce } from "lodash";

const InTheatres = () => {
    const [moviesImages, setMoviesImages] = useState([]);

    const fetchMovies = debounce(async () => {
        try{
            const response = await instance.get(URLNOWPLAYING + API_KEY, '&append_to_response=images');
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

export default InTheatres