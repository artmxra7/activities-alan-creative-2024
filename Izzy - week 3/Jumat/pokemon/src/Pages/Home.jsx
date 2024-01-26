import { MdOutlineSearch, MdOutlineSort } from "react-icons/md";
import { get, pokemon } from "../api";
import { useEffect, useState } from "react";
import { Box } from "../Elements/Box";
import { Card } from "../Elements/Card";
import { debounce } from "lodash";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Home = () => {
    const [allPokemon, setAllPokemon] = useState([])
    const [openCard, setOpenCard] = useState(false)
    const [dataCard, setDataCard] = useState({name: '', type1: '', type2: '', imageurl: '', stats: '', Tinggi: '', Berat: '', kemampuan: ''})
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    const [Loading, setLoading] = useState(false)

    const fetchPokemon = debounce(async () => {
        try{
            setLoading(true)
            const rest = await get.get(pokemon + `?limit=${limit}&offset=${offset}`)
            setAllPokemon(prevPokemon => [...prevPokemon, ...rest.data.results])
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false);
        }
    }, 200)

    useEffect(() => {

        fetchPokemon()
    },[offset])

    useEffect(() => {
        if(openCard){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [openCard])

    const handleShowMoreClick = () => {
        setOffset(prevOffset => prevOffset + limit);
    }
    return(
        <>
            <div className="min-h-screen p-4 md:ps-12 md:pe-12 md:py-7 lg:ps-24 lg:pt-12 lg:pb-12 lg:pe-24" style={{backgroundColor: 'rgb(220,10,45)', filter: openCard ? 'blur(5px)' : 'none'}}>
                <div className="w-full flex-col">
                    <div className='flex space-x-1 items-center'>
                        <img src="icons8-pokeball-100.png" style={{width: 35}} alt="" />
                        <h1 className="text-4xl text-white" style={{fontWeight: 'bold'}}>Pokemon</h1>
                    </div>

                    <div className="flex space-x-4 items-center mt-6">
                        <input type="text" name="" id="" className="rounded-full border-2 outline-none ps-8 pe-8 text-md pt-1 pb-1"
                        style={{boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)'}} placeholder='Search'/>
                        <div className="relative">
                            <MdOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-[235px] text-xl text-[#DC0A2D]" />
                        </div>
                        <MdOutlineSort className="text-5xl text-[#DC0A2D] bg-white rounded-full p-2 size-9"/>
                    </div>
                </div>

    

                <div className="w-full bg-white mt-12 rounded-xl mx-auto pb-4 pt-4 ps-2 pe-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10">
                    {allPokemon.map((pokemon) => (
                        <Box data={pokemon} openCard={openCard} setOpenCard={setOpenCard} setDataCard={setDataCard} key={pokemon.name}/>                    
                    ))}
                </div>

                {!Loading && (
                    <div className="text-center mt-4 bg-gray-700 lg:w-1/12 md:w-6/12 sm:w-1/2 mx-auto p-1 rounded-3xl text-white font-medium cursor-pointer" onClick={handleShowMoreClick}>
                        Lihat Lainnya
                    </div>
                )}
                {Loading && (
                    <div className="text-center text-white mt-4">Memuat <AiOutlineLoading3Quarters className="inline animate-spin" /></div>
                )}
            </div>

            {openCard && <Card openCard={openCard} setOpenCard={setOpenCard} dataCard={dataCard}/>}
        </>
    )
}