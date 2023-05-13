import React from 'react';
import Heading from '../heading/Heading';
import './chooseus.css';
import Slider from 'react-slick';
import { Fade } from 'react-reveal';

export default function ChooseUs() {
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
  const data = [
    {
      img: './assets/informative/chooseUs/no-fee.svg',
      title: 'Zero Joining Fee',
      desc: 'NestoHub is a free and open platform for all brokers and builders. We imply no cost or limitations on our services to ensure complete benefits.',
    },
    {
      img: './assets/informative/chooseUs/handshake.svg',
      title: 'User Friendly',
      desc: 'Our powerful platform gives you access to your property performance through the NestoHub builder dashboard.',
    },
    {
      img: './assets/informative/chooseUs/social-care.svg',
      title: 'Wide Reach',
      desc: 'We offer you and your property access to a vast pool of brokers without having to worry about excessive administrative burden.',
    },
    {
      img: './assets/informative/chooseUs/bullhorn.svg',
      title: 'Property Promotions',
      desc: 'NestoHub list your property on its platform and promote it to the brokers at PAN India level.',
    },
    {
      img: './assets/informative/chooseUs/loan.svg',
      title: 'Exclusive Package',
      desc: 'You can set yourself apart both in a physical market and on NestoHub by purchasing our exclusive promotional packages.',
    },
  ];

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
          title="Why Choose Us"
          sub="We Make Real Estate Simple & Efficient"
        />
        <Fade bottom duration={1000} distance="100px" delay={100}>
          <div className="row choose-row">
            <Slider {...settings}>
              {data.map(item => {
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
