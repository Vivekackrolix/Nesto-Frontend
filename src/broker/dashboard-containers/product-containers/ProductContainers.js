import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../features';
import { Link } from 'react-router-dom';
import './ProductContainers.css';

const ProductContainers = ({ sectionTitle, productData }) => {
  return (
    <section className="nes__product__section mt-5">
      <Row>
        <Col
          sm={12}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <h2 className="nes__product__section__title">{sectionTitle}</h2>
          <Link className="nes__product__section__view">View All</Link>
        </Col>
        {!!productData.length &&
          productData.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <ProductCard {...product} />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default ProductContainers;
