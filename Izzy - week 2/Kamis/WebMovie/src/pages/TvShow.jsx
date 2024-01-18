import { useEffect, useState } from "react";
import { API_KEY, URLTVSHOW, instance } from "../api";
import ScrollView from "../elements/Scrollview";
import { debounce } from "lodash";

const TvShow = () => {
    const [TvShow, setTvShow] = useState([]);
    const [Loading, setLoading] = useState(true);

    const fetchMovies = debounce(async () => {
        try{
            const response = await instance.get(URLTVSHOW + API_KEY, '&append_to_response=images');
            console.log(response.data.results);
            setTvShow(response.data.results);
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
            <ScrollView MoviesShow={[]} Loading={Loading} TvShow={TvShow}/>
        </>
    )
}

export default TvShow