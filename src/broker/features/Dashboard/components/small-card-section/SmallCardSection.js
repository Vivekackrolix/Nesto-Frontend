import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import flatsIcon from '../../assets/images/flats.svg';
import farmHouseIcon from '../../assets/images/farmhouse.svg';
import plotsIcon from '../../assets/images/plots.svg';
import commercialIcon from '../../assets/images/commercial.svg';
import './SmallCardSection.css';

const smallCardSectionData = [
  {
    label: 'Flats / Apartment',
    imgPath: flatsIcon,
  },
  {
    label: 'Farmhouse / Villa',
    imgPath: farmHouseIcon,
  },
  {
    label: 'Plots / Lands',
    imgPath: plotsIcon,
  },
  {
    label: 'Commercial',
    imgPath: commercialIcon,
  },
];

function SmallCardSection() {
  return (
    <section className="nes__about mt-5">
      <Container>
        <Row className="justify-content-center">
          {smallCardSectionData.map(({ label, imgPath }, index) => (
            <Col xs={12} md={6} lg={3} className="mb-4" key={index}>
              <Card className="border-0">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <div className="rounded-circle d-flex">
                      <Image src={imgPath} fluid className="m-auto" />
                    </div>
                    <h5 className="ml-3 mb-0">{label}</h5>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SmallCardSection;
