import React from 'react';
import Slider from 'react-slick';

const images = [
  'https://miro.medium.com/v2/resize:fit:1400/1*fHrAZJ1_L0Ff9dvVexL5_A.png',
  'https://www.guvi.com/blog/wp-content/uploads/2023/07/Future-and-Scope-of-UIUX-Design.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-i8rvvnNhUt2M24LJAlSlcApKU9QaznsGog&s',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div>
      <h2> Our Services </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{width:'600px', height:'300px', objectFit: 'cover'}}  class='carousal-image' />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Carousel;
