import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ScrollView = ({moviesImages}) => {
    const navigate = useNavigate();
    const scrollViewContainerStyle = {
        height: '600px',
        padding: '10px',
        width: '90%',
        overflowX: 'auto', 
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

    return(
        <div style={scrollViewContainerStyle} className="scroll-view-container mx-auto">
            {moviesImages.map((item, index) => (
                <div style={{display: 'inline-block'}} key={index} onClick={() => navigate(`/ViewPage/${item.id}`)}>
                <img src={item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : '../No-image-found.jpg'} className="items-center" style={{ display: 'inline-block', marginRight: '10px', width: '300px', height: '450px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} alt={`item-${index}`} />
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

