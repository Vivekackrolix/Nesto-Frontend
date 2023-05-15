import React from 'react';
import Heading from '../heading/Heading';
import './chooseus.css';
import Slider from 'react-slick';
import { Fade } from 'react-reveal';

export default function ChooseUs({chooseData, title, subtitle}) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          borderRadius: '50%',
          padding: '1px 0px',
        }}
        onClick={onClick}
      >
        <img className="next-image" src="./assets/next.png" alt="nextImg" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          borderRadius: '50%',
          padding: '1px 0px',
        }}
        onClick={onClick}
      >
        <img className="next-image" src="./assets/back.png" alt="nextimg" />
      </div>
    );
  }

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 600,
    cssEase: 'linear',
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="coose-container container">
        <Heading
          title={title}
          sub={subtitle}
        />
        <Fade bottom duration={1000} distance="100px" delay={100}>
          <div className="row choose-row">
            <Slider {...settings}>
              {chooseData?.map(item => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12 choose-col">
                    <div className="choose-card">
                      <div className="choose-icon-div">
                        <img src={item.img} className="choose-icon-img" alt='chooseIcon' />
                      </div>
                      <div className="">
                        <h5 className="card-heading">{item.title}</h5>
                      </div>
                      <div className="">
                        <span className="card-desc">{item.desc}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Fade>
      </div>
    </>
  );
}
