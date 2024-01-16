import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = (props) => (
    <button {...props} className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
      back
    </button>
  );

  const NextArrow = (props) => (
    <button {...props} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full">
      next
    </button>
  );
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <img className="w-full h-auto max-h-96" src="/images/img-z1.png" alt="Image 1" />
        <div className="absolute bottom-0 left-0 p-4 bg-black text-white">
          
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-auto max-h-96" src="/images/bljr1.jpg" alt="Image 2" />
        <div className="absolute bottom-0 left-0 p-4 bg-black text-white">
        
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-auto max-h-96" src="/images/njiko.jpg" alt="Image 3" />
        <div className="absolute bottom-0 left-0 p-4 bg-black text-white">
      
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
