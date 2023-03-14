import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Image, Row, Col } from 'react-bootstrap';
import { CiRuler } from 'react-icons/ci';
import { BiBath } from 'react-icons/bi';
import { IoBedSharp } from 'react-icons/io5';
import { IoLocationSharp } from 'react-icons/io5';
import swiperImage from '../../assets/images/swiper-img.png';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperSliderDashboard.css';

const slidesData = [
  {
    id: 1,
    location: 'Los Angeles, CA',
    title: 'Diamond Manor Apartment',
    price: 'Price Started from ₹2 Lakhs',
    description:
      'Description It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page',
    area: '1210 Sqft',
    beds: '3 Beds',
    baths: '2 Baths',
    profileImage: 'https://via.placeholder.com/64x64.png?text=Profile+Image',
    // image: swiperImage,
    image: `https://via.placeholder.com/500x400.png`,
    name: 'Lucas Johnson',
    email: 'lucasjohnsons0189@gmail.com',
  },
  {
    id: 2,
    location: 'New York, NY',
    title: 'Luxury Condo in Manhattan',
    price: 'Price Started from ₹3 Lakhs',
    description:
      'Description It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page',
    area: '1700 Sqft',
    beds: '4 Beds',
    baths: '3 Baths',
    profileImage: 'https://via.placeholder.com/64x64.png?text=Profile+Image',
    // image: swiperImage,
    image: `https://via.placeholder.com/500x400.png`,
    name: 'Emily Williams',
    email: 'emilywilliams4567@gmail.com',
  },
  {
    id: 3,
    location: 'San Francisco, CA',
    title: 'Penthouse Suite with Ocean View',
    price: 'Price Started from ₹5 Lakhs',
    description:
      'Description It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page',
    area: '3000 Sqft',
    beds: '5 Beds',
    baths: '4 Baths',
    profileImage: 'https://via.placeholder.com/64x64.png?text=Profile+Image',
    // image: swiperImage,
    image: `https://via.placeholder.com/500x400.png`,
    name: 'William Lee',
    email: 'williamlee7890@gmail.com',
  },
];

const SwiperSliderDashboard = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}

      className="mt-0 mb-5"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-item h-100 border-0 p-0 swiper__card nes__broker__swiper__item">
            <Row className="p-0 g-0">
              <Col md={6}>
                <Image
                  className="swiper-image w-100 h-100"
                  src={slide.image}
                  alt="placeholder"
                  fluid
                />
              </Col>
              <Col md={6} className="nes__broker__swiper__item__content">
                <div className="swiper-text p-4 py-3">
                  <div className="nes__broker__swiper__item__location">
                    <IoLocationSharp color="#278FD9" size={15} />
                    <span>{slide.location}</span>
                  </div>
                  <h3 className="nes__broker__swiper__item__title">
                    {slide.title}
                  </h3>
                  <div className="nes__broker__swiper__item__price d-inline-block px-3 mt-3">
                    {slide.price}
                  </div>
                  <p className="nes__broker__swiper__item__desc my-4">
                    {slide.description}
                  </p>
                  <div className="nes__broker__swiper__item__icons d-flex flex-wrap gap-4">
                    <div className="nes__broker__swiper__item__icons__icon d-flex align-items-center gap-2">
                      <CiRuler />
                      <span>{slide.area}</span>
                    </div>
                    <div className="nes__broker__swiper__item__icons__icon d-flex align-items-center gap-2">
                      <IoBedSharp />
                      <span>{slide.beds}</span>
                    </div>
                    <div className="nes__broker__swiper__item__icons__icon d-flex align-items-center gap-2">
                      <BiBath />
                      <span>{slide.baths}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="nes__broker__swiper__item__media d-flex align-items-center gap-3">
                    <img src={slide.profileImage} alt="Profile" />
                    <div className="nes__broker__swiper__item__media__body">
                      <h5 className="m-0">{slide.name}</h5>
                      <p className="m-0">{slide.email}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSliderDashboard;
