import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurPartner.css';
import Heading from '../heading/Heading';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useEffect } from 'react';
import Aos from 'aos';
import { Fade } from 'react-reveal';

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
      <img className="next-image" src="./assets/next.png" alt="next" />
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
        //   background: "black",
        borderRadius: '50%',
        padding: '1px 0px',
      }}
      onClick={onClick}
    >
      <img className="prev-image" src="./assets/next.png" alt="next" />
    </div>
  );
}

const review = [
  {
    id: 1,
    img: './assets/informative/partners/partner1.svg',
  },
  {
    id: 2,
    img: './assets/informative/partners/partner2.svg',
  },
  {
    id: 3,
    img: './assets/informative/partners/partner3.svg',
  },
];

const OurPartner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: true,
    loop: true,
    autoplay: true,
    accessibility: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,

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
          slidesToShow: 3,
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
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <div className="our-partner container">
      <div className="">
        <Heading title="Our Partners" sub="The Leading Collaborations On NestoHub" />
      </div>
      <Fade up duration={1000} distance="100px" delay={100}>
        <div className="mt-4 mb-5 px-5 d-flex">
          <Slider
            {...settings}
            className="row partner-slider d-flex gap-2"
          >
            {review.map((obj, e) => {
              return (
                <div className="col-lg-4 px-4" key={e}>
                  {/* <Link to="/partner-page"> */}
                  <Link to='/'>
                    <img src={obj.img} className="partner-image" alt="partner" />
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
        </Fade>
      {/* <Fade up duration={1000} distance="100px" delay={100}>
        <div className="text-center">
          <Link to="/partner-page" className="primary_button">
            View All
            <MdKeyboardDoubleArrowRight size={20} className="move-arrow" />
          </Link>
        </div>
      </Fade> */}
    </div>
  );
};

export default OurPartner;
