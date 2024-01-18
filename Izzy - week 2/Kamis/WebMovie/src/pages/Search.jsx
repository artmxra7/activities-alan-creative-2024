import { useEffect, useState } from "react";
import { API_KEY, URLSEARCH, instance } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import ScrollView from "../elements/Scrollview";
import { debounce } from "lodash";

const Search = () => {
    const [moviesImages, setMoviesImages] = useState([]);
    const {search} = useParams();

    const fetchMovies = debounce(async () => {
        try{
            const response = await instance.get(URLSEARCH + search + '&' + API_KEY, '&append_to_response=images');
            setMoviesImages(response.data.results);
        }catch(error){
            console.log(error)
        }
    },100)

    useEffect(() => {
       fetchMovies(); 
    },[])
    return(
        <>
            <ScrollView moviesImages={moviesImages}/>
        </>
    )
}

export default Search