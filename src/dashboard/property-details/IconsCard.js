import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const iconText = ['2110 Sqft', '3 Beds', '1 Baths', '1 Garages', '1 Balcony'];

const IconsCard = () => {
  return (
    <Card className="border-0 shadow-none bg-transparent property__details__iconcard">
      <Card.Header className="bg-transparent border-0 mt-3 px-0">
        <Card.Title className="fw-bold">Project Amenities</Card.Title>
      </Card.Header>
      <Card.Body className="border rounded">
        <Row className="g-4">
          {Array.from({ length: 10 }, (_, index) => (
            <Col
              style={{ flex: '0 0 calc(100% / 5)' }}
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
                <img
                  src={`/assets/card-icon-${
                    index + 1 > 5 ? index + 1 - 5 : index + 1
                  }.svg`}
                  alt={`icon ${index}`}
                  className="img-fluid mb-2"
                />
                <span>3 Beds</span>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default IconsCard;
