import { Container } from 'react-bootstrap';
import HeroSection from '../hero-section/HeroSection';
import SmallCardSection from '../small-card-section/SmallCardSection';
import productImg from '../../assets/images/product-img.png';
import { ProductContainers } from '../../../../dashboard-containers';
import SwiperSliderDashboard from '../swiper-slider-dashboard/SwiperSliderDashboard';
import './BrokerView.css';
import { SearchFilter } from '../../../../../components';
const BrokerView = () => {
  const productData = [
    {
      imageUrl: productImg,
      title: 'Sky Dandelions Apartment',
      location: 'Luxury Apartment in Sector-29, Gurugram',
      bhk: [1, 2, 3, 4],
      price: '₹ 3.94 - 6.01 Cr',
      discount: 'Book now & get 5% discount',
      visitAmount: '500',
    },
    {
      imageUrl: productImg,
      title: 'Sky Dandelions Apartment',
      location: 'Luxury Apartment in Sector-29, Gurugram',
      bhk: [1, 2, 3, 4],
      price: '₹ 3.94 - 6.01 Cr',
      discount: 'Book now & get 5% discount',
      visitAmount: '500',
    },
    {
      imageUrl: productImg,
      title: 'Sky Dandelions Apartment',
      location: 'Luxury Apartment in Sector-29, Gurugram',
      bhk: [1, 2, 3, 4],
      price: '₹ 3.94 - 6.01 Cr',
      discount: 'Book now & get 5% discount',
      visitAmount: '500',
    },
    {
      imageUrl: productImg,
      title: 'Sky Dandelions Apartment',
      location: 'Luxury Apartment in Sector-29, Gurugram',
      bhk: [1, 2, 3, 4],
      price: '₹ 3.94 - 6.01 Cr',
      discount: 'Book now & get 5% discount',
      visitAmount: '500',
    },
    {
      imageUrl: productImg,
      title: 'Sky Dandelions Apartment',
      location: 'Luxury Apartment in Sector-29, Gurugram',
      bhk: [1, 2, 3, 4],
      price: '₹ 3.94 - 6.01 Cr',
      discount: 'Book now & get 5% discount',
      visitAmount: '500',
    },
    {
      imageUrl: productImg,
      title: 'Sky Dandelions Apartment',
      location: 'Luxury Apartment in Sector-29, Gurugram',
      bhk: [1, 2, 3, 4],
      price: '₹ 3.94 - 6.01 Cr',
      discount: 'Book now & get 5% discount',
      visitAmount: '500',
    },
  ];

  return (
    <Container fluid="lg">
      <HeroSection />
      <SmallCardSection />
      <section className="mt-3">
        <SearchFilter addBtn />
      </section>
      <section className="mt-5">
        <SwiperSliderDashboard />
      </section>
      <ProductContainers
        sectionTitle="Promoted Property"
        productData={productData}
        view="broker"
      />

      <HeroSection />

      <ProductContainers
        sectionTitle="Recently Added"
        productData={productData}
        view="broker"
      />
      <ProductContainers
        sectionTitle="Best Selling"
        productData={productData}
        view="broker"
      />
    </Container>
  );
};

export default BrokerView;
