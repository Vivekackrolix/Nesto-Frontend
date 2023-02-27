import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BiBed } from 'react-icons/bi';

const IconsCard = () => {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <Card.Header className="bg-bg-white border-0 mt-3">
        <Card.Title>Project Amenities</Card.Title>
      </Card.Header>
      <Card.Body className="border rounded">
        <Row className="g-4">
          {Array.from({ length: 8 }, (_, index) => (
            <Col
              key={index}
              xs={3}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
                <span>3 Beds</span>
                <BiBed size={42} color="#282431" />
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default IconsCard;
