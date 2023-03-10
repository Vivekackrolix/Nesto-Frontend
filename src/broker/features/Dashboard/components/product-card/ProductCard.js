import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaBuilding } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import './ProductCard.css';
import Ribbon from '../ribbon/Ribbon';
import { RiBuilding2Fill } from 'react-icons/ri';

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
        <Card.Img
          variant="top"
          src={imageUrl}
          alt="Product Image"
          className="nes__product__card__image"
        />
        <Ribbon cssClass="ribbonStyle" text="Best Seller" />
        <Ribbon cssClass="ribbonStyle2" text="5% Brokerage" />

        <Button className="nes__product__card__btndark px-4">
          Ready To Move
        </Button>
      </div>
      <Card.Body className="px-0">
        <div className="px-4">
          <Card.Title className="nes__product__card__title">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted nes__product__card__subtitle">
            {location}
          </Card.Subtitle>
          <Row className="my-3 nes__product__card__icons gx-5">
            {bhk.map((item, index) => (
              <Col
                key={index}
                className="col-auto d-flex flex-column justify-content-center align-items-center"
              >
                <RiBuilding2Fill color="#939197" />
                <span>{item} BHK</span>
              </Col>
            ))}
          </Row>
        </div>
        <div className="d-flex justify-content-end align-items-center my-2">
          <Ribbon
            cssClass="ribbonStyle3 d-inline-flex align-items-center"
            text={`Get ₹ ${visitAmount} per Visit`}
          />
        </div>

        <div className="px-4 nes__product__card__price d-flex align-items-center gap-2">
          <h4 className="d-inline-block font-weight-bold m-0">{price}</h4>
          <span className="d-inline-block text-muted m-0">{discount}</span>
        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-end border-0 bg-white pt-0">
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
