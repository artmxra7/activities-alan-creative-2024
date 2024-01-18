import { useEffect, useState } from "react";
import {instance, API_KEY, URLNOWPLAYING} from "../api";
import ScrollView from "../elements/Scrollview";
import { debounce } from "lodash";

const InTheatres = () => {
    const [MoviesShow, setMoviesShow] = useState([]);
    const [Loading, setLoading] = useState(true);

    const fetchMovies = debounce(async () => {
        try{
            const response = await instance.get(URLNOWPLAYING + API_KEY, '&append_to_response=images');
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

export default InTheatres