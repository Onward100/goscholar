import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image4.jpg'
import image4 from './services-bg4.png'


export default function SliderPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="image" src={image1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={image2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={image3} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={image4} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
