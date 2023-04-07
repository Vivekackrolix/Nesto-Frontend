import React from 'react';
import Heading from '../heading/Heading';
import './chooseus.css';
import Slider from "react-slick";

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
          borderRadius: '50%',
          padding: '1px 0px',
        }}
        onClick={onClick}
      >
        <img className="next-image" src="./assets/back.png" alt="next-image" />
      </div>
    );
  }
  const data = [
    {
      img: './assets/informative/chooseUs/no-fee.svg',
      title: 'Zero Joining Fee',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/handshake.svg',
      title: 'No Customer Poaching',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/social-care.svg',
      title: 'Community Benefits',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/loan.svg',
      title: 'Fluent Loan Support',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/bullhorn.svg',
      title: 'Digital Marketing',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/loan.svg',
      title: 'Opportunities For New Brokers',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/bullhorn.svg',
      title: 'Eliminate The Mediator',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/opportunity.svg',
      title: 'Opportunities For New Brokers',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/remove-user.svg',
      title: 'Eliminate The Mediator',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/chooseUs/refer.svg',
      title: 'Refer & Earn',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    // speed: 3000,
    // cssEase: 'linear',
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <div className="container" style={{ overflow: 'hidden' }}>
        <Heading title="Trusted by Millions" sub="Why Choose Us" />
        <div className="row choose-row" data-aos="fade-up">
          <Slider {...settings}>
            {data.map(item => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12 choose-col">
                  <div className="choose-card">
                    <div className="choose-icon-div">
                      <img src={item.img} className="choose-icon-img" />
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
      </div>
    </>
  );
}
