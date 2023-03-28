import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Heading from '../heading/Heading';
import './OurPartner.css';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
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
      <img className="next-image" src="./assets/next.png" alt="next-image" />
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
      <img className="next-image" src="./assets/back.png" alt="next-image" />
    </div>
  );
}

const review = [
  {
    id: 1,
    img: './assets/nestopartner1.png',
  },
  {
    id: 2,
    img: './assets/nestopartner3.png',
  },
  {
    id: 3,
    img: './assets/nestopartner6.png',
  },
  {
    id: 4,
    img: './assets/nestopartner2.png',
  },
  {
    id: 5,
    img: './assets/nestopartner5.png',
  },
  {
    id: 6,
    img: './assets/nestopartner6.png',
  },
  {
    id: 7,
    img: './assets/nestopartner5.png',
  },
  {
    id: 8,
    img: './assets/nestopartner1.png',
  },
  {
    id: 9,
    img: './assets/nestopartner2.png',
  },
  {
    id: 10,
    img: './assets/nestopartner3.png',
  },
  {
    id: 11,
    img: './assets/nestopartner4.png',
  },
  {
    id: 12,
    img: './assets/nestopartner5.png',
  },
];

const OurPartner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // centerMode: true,
    // centerPadding: "60px",
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    accessibility: true,
    cssEase: 'linear',
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="our-partner">
      <div className="">
        <Heading title="Our Partners" sub="The Companies That Represent Us." />
      </div>
      <div className="mt-4 mb-5 px-5 d-flex">
        <Slider {...settings} className="partner-slider d-flex gap-2">
          {review.map((obj, e) => {
            return (
              <div className="px-4" key={e}>
                <img src={obj.img} className="partner-image" alt='partner' />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="text-center">
        <Link to="/partner-page" className="our-partner_link">
          View All
        </Link>
      </div>
    </div>
  );
};

export default OurPartner;
