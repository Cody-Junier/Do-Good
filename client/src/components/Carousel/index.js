import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Carousel from './components/Carousel';

const Carousel = () => {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Image src="../../../src/images/charity1.jpg"/>
          <Slide index={1}>I am the second Slide.</Slide>
          <Image src="../../../src/images/charity2.jpg"/>
          <Slide index={2}>I am the third Slide.</Slide>
          <Image src="../../../src/images/charity3.jpg"/>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default Carousel
