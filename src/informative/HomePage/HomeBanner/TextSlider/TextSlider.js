import React from 'react';
import Slider from 'react-slick';
import './TextSlider.css';
import { Fade } from 'react-reveal';

const TextSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  return (
    <div>
      <Fade right>
        <div className="text-slider">
          <Slider {...settings}>
            <div className="d-flex">
              <div className="text-slider-div">
                <span className="text-slider-div-span">
                  Come And Sell The Best Properties.
                </span>
              </div>
            </div>
            <div className="d-flex">
              <div className="text-slider-div">
                <span className="text-slider-div-span">
                  Join NestoHub For Higher Brokerage.
                </span>
              </div>
            </div>
            <div className="d-flex">
              <div className="text-slider-div">
                <span className="text-slider-div-span">
                  It Is Already Sold Out If You Choose NestoHub.
                </span>
              </div>
            </div>
            <div className="d-flex">
              <div className="text-slider-div">
                <span className="text-slider-div-span">
                  Don’t Be Limited, Sell Unlimited!
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </Fade>
    </div>
  );
};

export default TextSlider;
