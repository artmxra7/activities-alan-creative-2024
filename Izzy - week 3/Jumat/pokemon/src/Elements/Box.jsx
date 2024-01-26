import { useEffect, useState } from "react";
import { get } from "../api";

export const Box = ({data, openCard, setOpenCard, setDataCard}) => {
    const [imageUrl, setImageUrl] = useState([]);
    const [Type, setType] = useState([]);
    const [Id, setId] = useState([]);
    const [Stats, setStats] = useState([]);
    const [ability, setAbility] = useState([]);
    const [height, setHeight] = useState([]);
    const [weight, setWeight] = useState([]);
    const [Loading, setLoading] = useState(true);
    const getPokemonImage = async (url) => {
        try {
            const response = await get.get(url);
            const imageUrl = response.data.sprites.other['official-artwork'].front_default;
            const Type = response.data.types
            const Id = response.data.id
            const stats = response.data.stats
            const ability = response.data.abilities
            const height = response.data.height
            const weight = response.data.weight
            setStats(stats)
            setId(Id);
            setType(Type);
            setImageUrl(imageUrl);
            setAbility(ability)
            setHeight(height)
            setWeight(weight)
            setLoading(false);
        } catch (error) {

        }
    };

    const handleClick = () => {
        setDataCard({name: data.name, type1: Type[0].type.name, type2: Type[1]?.type.name, imageurl: imageUrl, stats: Stats, Tinggi: height, Berat: weight, kemampuan: ability})
        setOpenCard(!openCard)
    }

    useEffect(() => {
        getPokemonImage(data.url)
    }, [data.url]);

    return(
        <>
            <div className="rounded-lg p-4 m-1 border-gray-300 shadow-lg" style={{backgroundImage: 'linear-gradient(to bottom, white 50%, #E0E0E0 50%)', borderWidth: 1}}
            onMouseDown={() => handleClick()}>
                <p className="text-end">#{Id}</p>
                <div className="flex h-[100px] justify-center sm:justify-center md:justify-center lg:justify-start">
                    <img src={imageUrl} className={`mb-auto w-20 h-20 ${Loading ? 'animate-pulse blur-lg' : ''}`}/>
                    <div className="flex flex-col my-auto mt-6">
                        {
                            Array.isArray(Type) && Type.map((type) => (
                                <p className="text-center" key={type.type.name}>{type.type.name}</p>
                            ))
                        }
                    </div>
                </div>
                <p className="text-center font-medium text-xl">{data.name}</p>
            </div>
        </>
    )
}