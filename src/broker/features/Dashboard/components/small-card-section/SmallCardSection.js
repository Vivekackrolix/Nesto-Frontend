import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  BiBuildingHouse,
  BiHomeHeart,
  BiLandscape,
  BiBuilding,
} from 'react-icons/bi';

function SmallCardSection() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="text-center">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="circle-icon bg-primary d-flex align-items-center justify-content-center">
                  <BiBuildingHouse className="text-white" />
                </div>
                <h5 className="ml-3 mb-0">Flats / Apartment</h5>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="text-center">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="circle-icon bg-warning d-flex align-items-center justify-content-center">
                  <BiHomeHeart className="text-white" />
                </div>
                <h5 className="ml-3 mb-0">Farmhouse / Villa</h5>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="text-center">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="circle-icon bg-success d-flex align-items-center justify-content-center">
                  <BiLandscape className="text-white" />
                </div>
                <h5 className="ml-3 mb-0">Plots / Lands</h5>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4">
            <Card className="text-center">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="circle-icon bg-danger d-flex align-items-center justify-content-center">
                  <BiBuilding className="text-white" />
                </div>
                <h5 className="ml-3 mb-0">Commercial</h5>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SmallCardSection;
