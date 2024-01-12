import React, { useEffect, useState } from "react";
import ScrollView from "../../elements/ScrollView";

const AudioPages = () => {  
    const[width, setWidth] = useState(window.innerWidth);

    const data = [
        {
            id: 1,
            name: 'lanchiau',
            price: 1000000
        },
        {
            id: 2,
            name: 'sip',
            price: 2000000
        },
        {
            id: 3,
            name: 'kocak',
            price: 3000000
        },
        {
            id: 4,
            name: 'lanchiau',
            price: 1000000
        },
        {
            id: 5,
            name: 'sip',
            price: 2000000
        },
        {
            id: 7,
            name: 'kocak',
            price: 3000000
        },
        {
            id: 8,
            name: 'lanchiau',
            price: 1000000
        },
        {
            id: 9,
            name: 'sip',
            price: 2000000
        },
        {
            id: 10,
            name: 'kocak',
            price: 3000000
        }
    ]

    const formattedNumber = (number) => {
        const format = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

        return format.replace(',00', '');
    }

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        document.title = 'Beranda - Audio';
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return(
        <>
        <div className={`${isMobile ? 'w-full' : 'p-3'}`}>
            <h1 className="text-3xl font-semibold ms-10 mt-10">Audio</h1>
            <div className={`${!isMobile ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 lg:gap-2 ms-8 mt-10 p-3 lg:p-4 bg-white rounded-lg shadow-sm' : 'mt-4'}`}>
                {isMobile ? (
                    <ScrollView data={data} formattedNumber={formattedNumber} />
                ) : (
                    data.map((item, index) => (
                        <div className="bg-gray-400 p-4 rounded-xl flex flex-col items-center h-full" key={index}>
                            <img src="../../No-image-found.jpg" className="my-auto border border-gray-500 rounded-lg m-2 shadow-md mb-2" style={{width: '200px', height: '200px'}}/>
                            <p className="m-2 text-white font-semibold">{item.name}</p>
                            <p className="m-2 text-white text-end">{formattedNumber(item.price)}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    )
}

export default AudioPages