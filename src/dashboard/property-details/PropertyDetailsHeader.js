import { Col, Image, Row } from 'react-bootstrap';

const PropertyDetailsHeader = () => {
  return (
    <Row className="property__details__header">
      <Col xs={8}>
        <Image
          src="/assets/property-screen-img1.png"
          className="img-fluid w-100 height-h-auto property__details__header__imgfull"
          alt="property"
        />
      </Col>
      <Col xs={4}>
        <Row className="h-100 d-flex flex-column justify-content-between">
          <Col xs={12}>
            <Image
              src="/assets/property-screen-img2.png"
              alt="property"
              className="img-fluid w-100"
            />
          </Col>
          <Col xs={12}>
            <Image
              src="/assets/property-screen-img3.png"
              alt="property"
              className="img-fluid w-100"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PropertyDetailsHeader;
