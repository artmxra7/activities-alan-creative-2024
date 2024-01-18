import { debounce } from "lodash";
import { API_KEY, URLMOVIE, URLMOVIECREDITS, instance } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";


const ViewPage = () => {
    const [movies, setMovies] = useState([]);
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchMovies = debounce( async() => {
        try{
            const response = await instance.get(URLMOVIE(id) + API_KEY + '&append_to_response=images');
            const response2 = await instance.get(URLMOVIECREDITS(id) + API_KEY + '&append_to_response=images');
            setMovies(response.data);
            setCredits(response2.data);
            setLoading(false);
        }catch(error){
            console.log(error)
        } 
    }, 200);

    const formatDate = (date) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        const Year = new Date(date).getFullYear();
        const MonthIndex = new Date(date).getMonth();
        const Month = monthNames[MonthIndex];
        const Day = new Date(date).getDate();
        
        return `${Year} ${Month} ${Day}`;
    };

    useEffect(() => {
        fetchMovies();
    }, [])
    return(
        <>
        {loading ? (<p className="flex justify-center items-center text-5xl">Memuat...</p>) : (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w500/${movies.backdrop_path})`, 
        backgroundSize: 'cover', height: '100vh', zIndex: 1}}>
            <div className="grid grid-cols-2">
                <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} className="ps-5 pt-5" style={{width: '300px', zIndex: 2}} alt="" />
                <p className="text-white my-auto md:text-7xl text-6xl ms-6 md:ms-0" style={{zIndex: 2, fontFamily: 'Arial', fontWeight: 'bold'}}>{movies.title}</p>
            </div>
            <div className="w-full bg-white my-auto">
                <div className="">
                    <div className="flex flex-wrap justify-between space-x-5 w-full shadow-lg p-5">
                        <div>
                            <IoStarSharp size={20} className="text-yellow-500 mx-auto"/>
                            <p>{movies.vote_average}/10</p>
                        </div>
                        <div>
                            <IoStarOutline size={20} color="black" className="mx-auto"/>
                            <p>Rate This</p>
                        </div>
                        <div>
                            <p className="bg-green-500 text-white rounded-lg text-center mx-auto" style={{width: '50px'}}>87</p>
                            <p className="text-center">MetaScore</p>
                            <p className="text-center">{movies.popularity}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 p-5">
                    <p className="text-gray-600 text-xl font-semibold">Release</p>
                    <p className="text-gray-600 mt-4">{formatDate(movies.release_date)}</p>
                </div>
                <div className="flex space-x-2 p-2 ps-8">
                {Array.isArray(movies.genres) && movies.genres.map((item, index) => (
                  <>
                  <p className="ps-3 pe-3 border text-gray-500 pt-1 pb-1 border-gray-300 rounded-full">{item.name}</p>
                  </>  
                ))}
                </div>
                <div className="mt-6 p-5">
                    <p className="text-gray-600 text-xl font-semibold">Plot Summary</p>
                    <p className="text-gray-500 mt-2">{movies.overview}</p>
                </div>
                <div className="mt-8 p-5">
                    <p className="text-gray-600 text-xl font-semibold">Cast & Credits</p>
                    <div className="flex overflow-x-auto flex-nowrap scroll-view-container">
                    {Array.isArray(credits.cast) && credits.cast.map((item, index) => (
                    <div className="m-2">
                        <div className="rounded-full overflow-hidden border border-gray-600" style={{ width: '100px', height: '100px' }}>
                        <img
                            src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : '../No-image-found.jpg'}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        </div>
                        <p className="mx-auto text-center">{item.name}</p>
                        <p className="text-gray-500 text-center">{item.known_for_department}</p>
                    </div>
                    ))}
                    {Array.isArray(credits.crew) && credits.crew.map((item, index) => (
                    <div className="m-2">
                        <div className="rounded-full overflow-hidden border border-gray-600" style={{ width: '100px', height: '100px' }}>
                        <img
                            src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : '../No-image-found.jpg'}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        </div>
                        <p className="mx-auto text-center">{item.name}</p>
                        <p className="text-gray-500 text-center">{item.department}</p>
                    </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default ViewPage