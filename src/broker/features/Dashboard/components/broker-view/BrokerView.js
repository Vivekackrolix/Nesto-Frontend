import { Container, Row, Col } from 'react-bootstrap';
import './BrokerView.css';
import HeroSection from '../hero-section/HeroSection';
import SmallCardSection from '../small-card-section/SmallCardSection';
import productImg from '../../assets/images/product-img.png';
import { ProductContainers } from '../../../../dashboard-containers';
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
  ];

  return (
    <Container fluid="lg">
      <section className="mt-5">
        <HeroSection />
      </section>
      <SmallCardSection />
      <ProductContainers
        sectionTitle="Promoted Property"
        productData={productData}
      />
      <ProductContainers
        sectionTitle="Recently Added"
        productData={productData}
      />
      <ProductContainers
        sectionTitle="Best Selling"
        productData={productData}
      />
    </Container>
  );
};

export default BrokerView;
