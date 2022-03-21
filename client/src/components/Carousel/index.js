import React, { useState, useEffect } from "react";

const ImageOne = require("../../images/charity1.jpg")
const ImageTwo = require("../../images/charity2.jpg")
const ImageThree = require("../../images/charity3.jpg")

const CarouselArray = ["ImageOne", "ImageTwo", "ImageThree"];

const Carousel = () => {
  const [focusedHero, setFocusedHero] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setFocusedHero(focusedHero > 2 ? 0 : focusedHero + 1)
    }, 5000)
  }, [])
  return (
      <div>
  <img src={ImageOne}  />
  <img src={ImageTwo}  />
  <img src={ImageThree} />  
  </div>
  )}

export default Carousel
