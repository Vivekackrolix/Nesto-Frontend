import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { MdShare } from 'react-icons/md';
import Ribbon from '../ribbon/Ribbon';
import { RiBuilding2Fill } from 'react-icons/ri';
import './ProductCard.css';

const ProductCard = ({
  images,
  name,
  location,
  unitType,
  minPrice,
  maxPrice,
  discountDescription,
  brokerageValue,
  // title,
  // location,
  // bhk,
  // price,
  // discount,
  // visitAmount,
  view,
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
          src={images[0]}
          alt="Product Image"
          className="nes__product__card__image"
        />
        {view === 'broker' && (
          <>
            <Ribbon cssClass="ribbonStyle" text="Best Seller" />
            {brokerageValue && (
              <Ribbon cssClass="ribbonStyle2" text={`${brokerageValue}`} />
            )}

            <Button className="nes__product__card__btndark px-4">
              Ready To Move
            </Button>
          </>
        )}

        {view !== 'broker' && (
          <Button className="nes__product__card__btndark px-4">
            Ready To Move
          </Button>
        )}
      </div>
      <Card.Body className="px-0">
        <div className="px-4">
          <Card.Title className="nes__product__card__title">{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted nes__product__card__subtitle">
            {location}
          </Card.Subtitle>
          <Row className="my-3 nes__product__card__icons gx-5">
            {unitType.map((item, index) => (
              <Col
                key={index}
                className="col-auto d-flex flex-column justify-content-center align-items-center"
              >
                <RiBuilding2Fill color="#939197" />
                <span>{item}</span>
              </Col>
            ))}
          </Row>
        </div>
        {view === 'broker' && (
          <div className="d-flex justify-content-end align-items-center my-2">
            <Ribbon
              cssClass="ribbonStyle3 d-inline-flex align-items-center"
              // text={`Get ₹ ${visitAmount} per Visit`}
              text={`Get ₹ 500 per Visit`}
            />
          </div>
        )}

        <div className="px-4 nes__product__card__price d-flex flex-wrap align-items-center gap-2">
          <h4 className="d-inline-block font-weight-bold m-0">{`${minPrice} - ${maxPrice}`}</h4>
          <span className="d-inline-block text-muted m-0">
            {`Book now & get ${discountDescription} discount`}
          </span>
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
