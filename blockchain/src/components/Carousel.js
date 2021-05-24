import image1 from "../assets/carousel1.jpeg";
import image2 from "../assets/carousel2.jpeg";
import image3 from "../assets/carousel3.jpeg";
import image4 from "../assets/carousel4.jpeg";
import image5 from "../assets/carousel5.jpeg";
import React, { useEffect } from "react";

import "../styles/Carousel.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const CarouselSection = () => {

  return (
    <article className="carouselsection">
      <div className="carousel-image flex items-center justify-center z-20">
        <Carousel
          infinite
          animationSpeed={1000}
          autoPlay={3000}
        >
          <img class="carouselImg" src={image5} alt="carousel-img-1" />
          <img class="carouselImg" src={image4} alt="carousel-img-1" />
          <img class="carouselImg" src={image3} alt="carousel-img-3" />
          <img class="carouselImg" src={image4} alt="carousel-img-4" />
          <img class="carouselImg" src={image5} alt="carousel-img-5" />
        </Carousel>
      </div>
      <div class="overlay-carousel">
        <div
          className="play-game"
          onClick={() => {
            window.open(
              window.location.protocol +
                "//" +
                window.location.hostname +
                ":8080/"
            );
          }}
        >
          <h4 className="text-header-game">Play Game</h4>
        </div>
      </div>
    </article>
  );
};

export default CarouselSection;
