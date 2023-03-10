import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaBuilding } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import './ProductCard.css';
import Ribbon from '../ribbon/Ribbon';

const ProductCard = ({
  imageUrl,
  title,
  location,
  bhk,
  price,
  discount,
  visitAmount,
}) => {
  return (
    <Card
      bg="white"
      border="0"
      className="custom-card nes__product__card"
      style={{
        background: '#FFFFFF',
        boxShadow: '0px 3.71188px 16.2395px rgba(0, 0, 0, 0.07)',
        borderRadius: '13.9444px',
      }}
    >
      <div className="position-relative">
        <Card.Img variant="top" src={imageUrl} alt="Product Image" />
        <Ribbon cssClass="ribbonStyle" text="BEST SELLER" />
        <Ribbon cssClass="ribbonStyle2" text="5% Brokerage" />

        <div className="overlay-blue top-right">
          <span>5% Brokerage</span>
        </div>
        <Button
          variant="secondary"
          className="overlay-dark bottom-left"
          style={{ position: 'absolute', bottom: '0', left: '0' }}
        >
          Ready To Move
        </Button>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
        <Row className="mt-3">
          {bhk.map((item, index) => (
            <Col xs={6} md={3} key={index}>
              <FaBuilding className="mr-2" />
              <span>{item} BHK</span>
            </Col>
          ))}
        </Row>
        <div className="bg-danger text-white py-2 my-3 px-3 rounded">
          <span>Get ₹ {visitAmount} per Visit</span>
        </div>
        <div>
          <h4 className="d-inline-block font-weight-bold">{price}</h4>
          <span className="d-inline-block ml-2 text-muted">{discount}</span>
        </div>
      </Card.Body>
      <Card.Footer
        className="d-flex justify-content-end border-0"
        style={{ background: '#FFFFFF' }}
      >
        <Button className="btn-color-outline-primary rounded-pill px-4">
          Book a visit
        </Button>
        <Button variant="transparent">
          <MdShare size={30} color="#278FD9" />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
