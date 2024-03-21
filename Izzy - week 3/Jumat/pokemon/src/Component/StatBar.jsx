import { useState, useEffect } from 'react';

export const StatBar = ({ statValue, statName }) => {
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        const maxWidth = Math.min(statValue, 100);
        const id = setTimeout(() => {
            setBarWidth(maxWidth);
        }, 300); 

        return () => clearTimeout(id);
    }, [statValue]);

    return (
        <div className="text-white flex space-x-2 items-center">
            <div className='flex space-x-2 w-1/6'>
            <h2>{statName}</h2>
            <p>{statValue}%</p>
            </div>
            <div className="w-3/4">
                <hr style={{
                    width: `${barWidth}%`,
                    borderWidth: 5,
                    borderColor: statValue < 50 ? 'red' : statValue < 100 ? 'orange' : 'green',
                    transition: 'width 0.5s'
                }} />
            </div>
        </div>
    );
};
