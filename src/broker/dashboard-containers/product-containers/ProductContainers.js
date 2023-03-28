import { Col, Row } from 'react-bootstrap';
import { ProductCard } from '../../features';
import { Link } from 'react-router-dom';
import './ProductContainers.css';

const ProductContainers = ({ sectionTitle, propertyData, view }) => {
  return (
    <section className="nes__product__section mt-5">
      <Row className="gy-3">
        <Col
          sm={12}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <h2 className="nes__product__section__title">{sectionTitle}</h2>
          {view === 'promoted' && (
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          )}

          {view !== 'promoted' && (
            <Link className="nes__product__section__view">View All</Link>
          )}
        </Col>

        {/* <ProductCard {...property} view={view} /> */}

        {propertyData &&
          propertyData.map((property, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <ProductCard {...property} view={view} pagination />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default ProductContainers;
