// Slides.js
// Please refer to original codes https://getbootstrap.com/docs/5.3/components/carousel/
import React, { useState } from "react";

export default function Slides({ dataSlide }) {
  // slideIndex is used for keep track of which slide is watching
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlide.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlide.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlide.length);
    }
  };

  return (
    // https://raybo.org/posts/2021-03-27-consistent-height-carousels-with-css-gradients-by-hacking-the-bootstrap-5-carousel/
    <div id="carousel-slide" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        {/* the default indicator is "_", to change it to dot
        checkout the App.css .carousel-indicators button css */}
        {Array.from({ length: `${dataSlide.length}` }).map((item, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={slideIndex === index + 1 ? "active" : ""}
            aria-current="true"
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
        {/* <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button> */}
      </div>
      <div className="carousel-inner">
        {/* I rewrite following codes to replace original bootstrap's sample codes */}
        {dataSlide.map((item, index) => {
          //   console.log(item);
          return (
            // for bootstrap, active is for current slide
            // The .active class needs to be added to one of the slides otherwise the carousel will not be visible.
            // if slideIndex equal to index+1, i.e. this is current slide
            <div
              key={item.id}
              className={
                slideIndex === index + 1
                  ? "carousel-item active"
                  : "carousel-item"
              }
            >
              <img src={item.img} className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.subTitle}</p>
              </div>
            </div>
          );
        })}
        {/* <div className="carousel-item active">
          <img
            src={require(`../assets/images/example1.jpeg`)}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <h6>Test</h6>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require(`../assets/images/example2.jpeg`)}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <h6>Test</h6>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require(`../assets/images/example3.jpeg`)}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <h6>Test</h6>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
