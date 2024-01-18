import { useEffect, useState } from "react";
import { API_KEY, URLSEARCHTVSHOW, URLSEARCHMOVIE, instance } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import ScrollView from "../elements/Scrollview";
import { debounce } from "lodash";

const Search = () => {
    const [MoviesShow, setMoviesShow] = useState([]);
    const [TvShow, setTvShow] = useState([]);
    const [Loading, setLoading] = useState(true);
    const {search} = useParams();

    const fetchMovies = debounce(async () => {
        try{
            const response = await instance.get(URLSEARCHMOVIE + search + '&' + API_KEY, '&append_to_response=images');
            const response2 = await instance.get(URLSEARCHTVSHOW + search + '&' + API_KEY, '&append_to_response=images');
            setMoviesShow(response.data.results);
            setTvShow(response2.data.results);
            setLoading(false);
        }catch(error){
            console.log(error)
        }
    },100)

    useEffect(() => {
       fetchMovies(); 
    },[search])
    return(
        <>
            <ScrollView MoviesShow={MoviesShow} Loading={Loading} TvShow={TvShow}/>
        </>
    )
}

export default Search