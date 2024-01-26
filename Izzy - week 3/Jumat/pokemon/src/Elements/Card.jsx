import { GiCancel } from "react-icons/gi";
import { StatBar } from "../Component/StatBar";
import { useEffect } from "react";

export const Card = ({openCard, setOpenCard, dataCard}) => {
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if(event.key === 'Escape'){
                setOpenCard(!openCard)
            }
        }

        document.addEventListener('keydown', handleEscapeKey)

        return () => document.removeEventListener('keydown', handleEscapeKey)
    },[])
    return(
        <>
            <div className="fixed top-1/2 left-1/2 w-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.9)] p-4 rounded-xl"
            >
                <div className="flex">
                    <img src={dataCard.imageurl} style={{width: '300px'}} alt="" />
                    <div className="flex flex-col w-full ms-8">
                        <div className="flex justify-between items-center">
                            <h2 className="text-white text-3xl font-bold">{dataCard.name}</h2>
                            <GiCancel className="text-white hover:text-gray-300 text-3xl me-4 cursor-pointer" onClick={() => setOpenCard(!openCard)}/>
                        </div>
                        <div className="overflow-y-auto mt-4 hide-scroll" style={{maxHeight: '300px'}}>
                            <div className="flex space-x-5 items-top">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-xl font-bold">Height</h2>
                                    <p className="text-white">{dataCard.Tinggi / 10} M</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-xl font-bold">Weight</h2>
                                    <p className="text-white">{dataCard.Berat / 10} Kg</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-xl font-bold">Abilities</h2>
                                    {
                                        dataCard.kemampuan.map((kemampuan) => (
                                            <div className="flex space-x-1 text-white">
                                            <p>{kemampuan.ability.name}</p>
                                            <p>{kemampuan.is_hidden ? '(Hidden)' : ''}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className="text-xl text-white mt-4 font-bold mb-4">Type</p>
                            <p className={`text-white text-center ${dataCard.type1 === "grass" ? 'bg-green-500' : dataCard.type1 === "fire" ? 'bg-red-500' : dataCard.type1 === "water" ? 'bg-blue-500' : 'bg-gray-500'} w-20 rounded-lg p-2`}>{dataCard.type1}</p>
                            <p className={`text-white text-center ${dataCard.type2 === "poison" ? 'bg-purple-500' : dataCard.type2 === "flying" ? 'bg-blue-500' : 'bg-gray-500'} mt-2 w-20 ${dataCard.type2 ? 'p-2' : ''} rounded-lg`}>{dataCard.type2}</p>
                            <h2 className="mt-4 mb-2 text-white font-bold text-xl">Statistics</h2>
                            {dataCard.stats.map((stat) => (
                                <StatBar statValue={stat.base_stat} statName={stat.stat.name}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}