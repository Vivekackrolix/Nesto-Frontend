import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Card, Container } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// swiper styles
import './SwiperSlider.css';

const SwiperMain = ({ data, slidesPerView, spaceBetween, children }) => {
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
      {data.map(item => (
        <SwiperSlide key={item.id}>{children}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperMain;
