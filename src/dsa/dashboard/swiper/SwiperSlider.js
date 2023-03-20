import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Card, Container } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// swiper styles
import './SwiperSlider.css';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';

const items = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

const tabKey = ['All', '2BHK ', ' 3BHK', '4BHK', '5BHK'];

const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 576) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid="lg" className="mt-5">
      <div className="mb-4 mt-5">
        <h5 className="swiper-title">Floor Plans & Pricing</h5>
        <span className="swiper-subtitle">in Arocon Rainbow</span>
      </div>
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation
          autoplay={{ delay: 3000 }}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mt-0 mb-5"
        >
          {items.map(item => (
            <SwiperSlide key={item.id}>
              <Card className="h-100 border-0 shadow-sm swiper__card p-3">
                <div className="ribbon">
                  <span>{tabKey[item.id]} </span>
                </div>

                <Card.Img variant="top" src="/assets/swiper-img.png" />
                <Card.Body className="px-0">
                  <div className="swiper__card__row d-flex justify-content-between align-items-center">
                    <span>Super Built-Up Area</span>
                    <span className="text-right">Price</span>
                  </div>
                  <div className="swiper__card__row d-flex justify-content-between align-items-center">
                    <span>1413 Sq.ft.</span>
                    <span className="swiper__price text-wrap">
                      ₹ 3.94 Cr (5,000/sq.ft.)
                    </span>
                  </div>
                  <div className="swiper__card__row d-flex justify-content-between align-items-center mt-2">
                    <span>(130.6 sq.m.)</span>
                    <span>+Govt. Charges</span>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </DashboardTabs>
    </Container>
  );
};

export default Slider;
