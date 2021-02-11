import React from 'react'
import Image1 from "../Components/img/userimg2.jpg"
import {Carousel} from 'react-bootstrap'
import '../Components/BusinessImage.scss'

function BusinessImage() {
  return (
    <div className="BusinessImage mt-5">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="image m-5"
          src={Image1}
          alt="Lakers Creative"
        />
        <Carousel.Caption>
          <h3>Lakers Creative</h3>
          <p>
            Lakers Creative is the team that is going to help you achieve your
            technological goals.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="image"
          src={Image1}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={Image1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);
};


export default BusinessImage

