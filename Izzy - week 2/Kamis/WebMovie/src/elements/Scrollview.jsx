import { set } from "lodash";
import React, { useRef, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ScrollView = ({MoviesShow, Loading, TvShow}) => {
    const navigate = useNavigate();
    const [mouseDown, setMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollViewContainerRef = useRef(null);

    const scrollViewContainerStyle = {
        height: '600px',
        padding: '10px',
        width: '90%',
        overflowX: 'scroll', 
        whiteSpace: 'nowrap', 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.substring(0, maxLength) + '...';
        }
    };

    const startDragging = (e) => {
        setMouseDown(true);
        setStartX(e.pageX - scrollViewContainerRef.current.offsetLeft);
        setScrollLeft(scrollViewContainerRef.current.scrollLeft);
    };
    
    const stopDragging = () => {
        setMouseDown(false)
    };
    
      const move = (e) => {
        e.preventDefault();
        if (!mouseDown) {
          return;
        }
        const x = e.pageX - scrollViewContainerRef.current.offsetLeft;
        const scroll = x - startX;
        scrollViewContainerRef.current.scrollLeft = scrollLeft - scroll;
    };

    const handleClick = (type, id) => {
        if (!mouseDown) {
            navigate(`/WebMovieExample/ViewPage/${type}/${id}`);
        }
    };

    return(
        <div style={scrollViewContainerStyle} className="scroll-view-container mx-auto"
        ref={scrollViewContainerRef}
        onMouseMove={move}
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}>
            {MoviesShow.map((item, index) => (
                <div style={{display: 'inline-block', cursor: 'pointer'}} key={index} onDoubleClick={() => handleClick('Movie',item.id)}>
                <img src={item.poster_path ?`https://image.tmdb.org/t/p/w200${item.poster_path}` : '../No-image-found.jpg'} className={`items-center ${Loading ? 'animate-pulse' : ''}`} style={{ display: 'inline-block', marginRight: '10px', width: '300px', height: '450px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} alt={`item-${index}`} />
                <h1 className="text-center mt-2" style={{fontSize: '24px', fontFamily: 'Arial', fontWeight: '600'}}>{truncateText(item.title ? item.title : item.name, 18)}</h1>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <IoStarSharp className="text-yellow-500" size={17} style={{width: '20px', marginRight: '5px'}}/>
                    <p className="text-center">{item.vote_average}</p>
                </div>
                </div>
            ))}
            {TvShow.length > 0 && TvShow.map((item, index) => (
                <div style={{display: 'inline-block', cursor: 'pointer'}} key={index} onDoubleClick={() => handleClick('Tv',item.id)}>
                <img src={item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : '../No-image-found.jpg'} className={`items-center ${Loading ? 'animate-pulse' : ''}`} style={{ display: 'inline-block', marginRight: '10px', width: '300px', height: '450px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} alt={`item-${index}`} />
                <h1 className="text-center mt-2" style={{fontSize: '24px', fontFamily: 'Arial', fontWeight: '600'}}>{truncateText(item.title ? item.title : item.name, 18)}</h1>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <IoStarSharp className="text-yellow-500" size={17} style={{width: '20px', marginRight: '5px'}}/>
                    <p className="text-center">{item.vote_average}</p>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ScrollView

