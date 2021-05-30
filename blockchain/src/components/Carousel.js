import React, { useEffect } from "react";

import "../styles/Carousel.css";
import Carousel, { autoplayPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const CarouselSection = () => {

  return (
    <article className="carouselsection">
      <div className="carousel-image flex items-center justify-center z-20">
        <Carousel
          plugins={[
            'infinite',
           {
             resolve: autoplayPlugin,
             options: {
               interval: 3000,
             }
           },
           {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 1,
            },
          }
         ]}   
         animationSpeed={2000}
        >
          <img class="carouselImg" src="https://ipfs.io/ipfs/QmTBFoUfbm28KhCcyWCTrxzhUtrUNDh76h2NH5uem4HR3R?filename=carousel1.jpeg" alt="carousel-img-1" />
          <img class="carouselImg" src="https://ipfs.io/ipfs/QmQwcwDefDvSJkyRC7wfG2sxeefaUKyhLDDBirAthwXHAT?filename=carousel2.jpeg" alt="carousel-img-1" />
          <img class="carouselImg" src="https://ipfs.io/ipfs/QmVEfqQMWBQUcQXLNFYsPcKCL3sJeMfuKv2VKn1xHfXkQB?filename=carousel3.jpeg" alt="carousel-img-3" />
          <img class="carouselImg" src="https://ipfs.io/ipfs/QmPyttnyMhqE1fnSz3ZbanjBCFhQQQUZcMfjWKX5wszEtK?filename=carousel4.jpeg" alt="carousel-img-4" />
          <img class="carouselImg" src="https://ipfs.io/ipfs/Qmax5YhfqpiJR5MXpwUrqvr7nsvERE1R58Uvfy9jm3ukHs?filename=carousel5.jpeg" alt="carousel-img-5" />
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
