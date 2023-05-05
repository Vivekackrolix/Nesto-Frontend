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
      title: 'No Customer Poaching',
      desc: 'We guarantee that you will retain complete ownership of your client and that we will not reveal their identity or use their data to poach them.',
    },
    {
      img: './assets/informative/chooseUs/social-care.svg',
      title: 'Community Benefits',
      desc: 'NestoHub connects users with professional Nesto Advisors and other like-minded people to encourage one another through strategic guidance.',
    },
    {
      img: './assets/informative/chooseUs/loan.svg',
      title: 'Fluent Loan Support',
      desc: 'Close the deals quickly and precisely with financial assistance from credible institutions on NestoHub, and make property buying simple.',
    },
    {
      img: './assets/informative/chooseUs/bullhorn.svg',
      title: 'Digital Marketing',
      desc: 'Brokers can easily and efficiently promote themselves free of cost as trusted fellows to their clients by creating and promoting a professional digital profile on NestoHub.',
    },
    {
      img: './assets/informative/chooseUs/loan.svg',
      title: 'Opportunities For New Brokers',
      desc: 'NestoHub offers numerous opportunities for new brokers to gain access and empowerment in order to launch successful businesses.',
    },
    {
      img: './assets/informative/chooseUs/bullhorn.svg',
      title: 'Eliminate The Mediator',
      desc: 'NestoHub removes the intermediaries, such as dealers, from the builder-broker connection, leaving the brokerage entirely to the broker.',
    },
    {
      img: './assets/informative/chooseUs/refer.svg',
      title: 'Refer & Earn',
      desc: 'Brokers can earn substantial rewards by referring other brokers to the NestoHub platform. We appreciate your efforts to expand our network.',
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
    autoplaySpeed: 3000,
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
      <div className="container">
        <Heading
          title="Why Choose Us"
          sub="We Make Real Estate Simple & Efficient"
        />
        <Fade bottom duration={1000} distance="100px" delay={100}>
          <div className="row choose-row" data-aos="false">
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
