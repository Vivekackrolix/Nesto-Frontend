import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsFillBuildingsFill } from 'react-icons/bi';
import {
  BiBuildingHouse,
  BiHomeHeart,
  BiLandscape,
  BiBuilding,
} from 'react-icons/bi';

import flatsIcon from '../../assets/images/flats.svg';
import farmHouseIcon from '../../assets/images/farmhouse.svg';
import plotsIcon from '../../assets/images/plots.svg';
import commercialIcon from '../../assets/images/commercial.svg';

const smallCardSectionData = [
  {
    label: 'Flats / Apartment',
    imgPath: flatsIcon,
  },
  {
    label: 'Flats / Apartment',
    imgPath: farmHouseIcon,
  },
  {
    label: 'Flats / Apartment',
    imgPath: plotsIcon,
  },
  {
    label: 'Flats / Apartment',
    imgPath: commercialIcon,
  },
];

function SmallCardSection() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          {smallCardSectionData.map(({ lebel, imgPath }, index) => (
            <Col xs={12} sm={6} md={3} className="mb-4" key={index}>
              <Card className="text-center">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <div className="circle-icon bg-primary d-flex align-items-center justify-content-center">
                    {/* <Image fluid /> */}
                  </div>
                  <h5 className="ml-3 mb-0">Flats / Apartment</h5>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default SmallCardSection;
