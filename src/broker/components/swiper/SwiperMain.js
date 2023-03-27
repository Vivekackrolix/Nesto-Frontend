import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Card, Container } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// swiper styles
import './SwiperSlider.css';
import React from 'react';

const SwiperMain = ({ swiperData, slidesPerView, spaceBetween, children }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      autoplay={{ delay: 3000 }}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="mt-0 mb-5"
    >
      {swiperData
        ? swiperData.map(swiperDataItem => (
            <SwiperSlide key={swiperDataItem?._id}>
              {React.cloneElement(children, { swiperDataItem: swiperDataItem })}
            </SwiperSlide>
          ))
        : 'null'}
    </Swiper>
  );
};

export default SwiperMain;
