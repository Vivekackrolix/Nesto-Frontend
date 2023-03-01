import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Card, Container } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// swiper styles
import './SwiperSlider.css';

const items = [
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
  {
    id: 5,
  },
];

const Slider = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="my-5 p-4"
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <Card className="h-100 border-0 shadow swiper__card p-3">
              <div class="ribbon">
                <span>2 BHK</span>
              </div>

              <Card.Img variant="top" src="/assets/swiper-img.png" />
              <Card.Body className="px-0">
                <div className="swiper__card__row d-flex justify-content-between align-items-center">
                  <span>Super Built-Up Area</span>
                  <span className="text-right">Price</span>
                </div>
                <div className="swiper__card__row d-flex justify-content-between align-items-center">
                  <span>1413 Sq.ft.</span>
                  <span>₹ 3.94 Cr (5,000/sq.ft.)</span>
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
    </Container>
  );
};

export default Slider;
