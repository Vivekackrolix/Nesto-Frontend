import React from 'react';
import Slider from 'react-slick';
import './testimonials.css';
import { FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import Heading from '../heading/Heading';
import { Fade } from 'react-reveal';

const Testimonial = ({ testData, title, subtitle }) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 600,
    cssEase: 'linear',
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    swipeToSlide: true,
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
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className=" main-testimonial-body py-5">
        <div className="quote-image d-flex flex-row-reverse ">
          <img src="./assets/quote.png" alt="quote" />
        </div>
        <div className="heading">
          <Heading
            className="mt-4"
            title={title}
            sub={subtitle}
          />
        </div>
        <div className="container">
          <div className="slider">
            <Fade up duration={1000} distance="100px" delay={100}>
              <Slider {...settings} className="mx-auto">
                {testData?.map((obj, e) => {
                  return (
                    <>
                      <div key={e} className="px-3 pb-4">
                        <div className="test-card">
                          <p className="testimonial-desc">{obj.desc}</p>
                          <div className="d-flex mt-4 gap-3 justify-content-end">
                            <div className="card-box">
                              <span className="test-name justify-content-end">
                                {' '}
                                {obj.personName}
                              </span>
                              <span className="test-company justify-content-end">
                                {' '}
                                {obj.role}
                              </span>
                              <div className="d-flex justify-content-end">
                                {Array.from({ length: 5 }, (_, index) => {
                                  if (index < 5) {
                                    return (
                                      <FaStar
                                        key={index}
                                        fill="#FFB630"
                                        size={16}
                                      />
                                    );
                                  }
                                  return (
                                    <AiOutlineStar color="#FFB630" size={18} />
                                  );
                                })}
                              </div>
                            </div>
                            <img
                              className="person-image"
                              src={obj.personImg}
                              alt="person"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
