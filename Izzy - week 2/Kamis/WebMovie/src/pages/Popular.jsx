import { useEffect, useState } from "react";
import { API_KEY, URLPOPULARMOVIE, instance } from "../api";
import ScrollView from "../elements/Scrollview";
import { debounce } from "lodash";

const Popular = () => {
    const [MoviesShow, setMoviesShow] = useState([]);
    const [Loading, setLoading] = useState(true);

    const fetchMovies = debounce(async () => {
        try{
            const response = await instance.get(URLPOPULARMOVIE + API_KEY, '&append_to_response=images');
            setMoviesShow(response.data.results);
            setLoading(false);
        }catch(error){
            console.log(error)
        }
    }, 10)

    useEffect(() => {
        fetchMovies();
    }, []);

    return(
        <>
            <ScrollView MoviesShow={MoviesShow} Loading={Loading} TvShow={[]}/>
        </>
    )
}

export default Popular