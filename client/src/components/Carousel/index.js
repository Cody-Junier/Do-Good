import React, { useState, useEffect } from "react";

const ImageOne = require("../../images/charity1.jpg");
const ImageTwo = require("../../images/charity2.jpg");
const ImageThree = require("../../images/charity3.jpg");
const ImageFour = require("../../images/charity4.jpg");
const ImageFive = require("../../images/charity5.jpg");

const carouselArray = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const getNextImage = () => {
    console.log("get next image clicked");
    const newIndex =
      imageIndex + 1 > carouselArray.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };

  const getPrevImage = () => {
    console.log("get prev image clicked");
    const newIndex =
      imageIndex - 1 < 0 ? carouselArray.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };

  return (
    <div className="hero-section">
      <button className="carousel-btn prev" onClick={getPrevImage}></button>

      <img
        src={carouselArray[imageIndex]}
        alt="image"
        className="carousel-img"
      />

      <button className="carousel-btn next" onClick={getNextImage}></button>
    </div>
  );
};

export default Carousel;
