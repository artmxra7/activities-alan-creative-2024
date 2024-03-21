import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let Image = [
    {
        link: "https://openasset.com/wp-content/uploads/2023/12/broken-image-icon.png"
    },
    {
        link: "https://computersolve.com/wp-content/uploads/2022/02/ed687504b91662ce8d424d116adb16b7.jpg"
    },
    {
        link: "https://openasset.com/wp-content/uploads/2023/12/broken-image-icon.png"
    }
]

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {Image.map((item, index) => (
        <div key={index}>
          <img src={item.link} alt="Slide" className='rounded-lg p-2 mt-4'/>
        </div>
      ))}
      {/* Tambahkan lebih banyak slide sesuai kebutuhan */}
    </Slider>
  );
};

const HeaderMobile = () => {
  return (
    <>
      <Carousel />
    </>
  );    
}

export default HeaderMobile