import { Container, Row, Col } from 'react-bootstrap';
import './BrokerView.css';
import HeroSection from '../hero-section/HeroSection';
import SmallCardSection from '../small-card-section/SmallCardSection';
import ProductCard from '../product-card/ProductCard';
import productImg from '../../assets/images/product-img.png';
const BrokerView = () => {
  //
  const productCards = [
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
      <section className="my-5">
        <HeroSection />
      </section>
      <SmallCardSection />
      <Row>
        {productCards.map((productCard, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <ProductCard {...productCard} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrokerView;
