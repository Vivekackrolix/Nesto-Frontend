import { Col, Container, Row } from 'react-bootstrap';
import './PropertyDetails.css';
import PropertyDetailsHeader from './PropertyDetailsHeader';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';
import PropertyDetailsForm from './PropertyDetailsForm';
import { useState } from 'react';
import PropertyDetailsText from './PropertyDetailsText';

const PropertyDetails = () => {
  const [propertyDetailsForm, setPropertyDetails] = useState(false);
  return (
    <Container className="property__details">
      <PropertyDetailsHeader />
      <Row>
        <Col xs={12} className="mt-4 mb-5">
          <DashboardChildCard cardType="propertyDetailsProfile" />
        </Col>
        <Col xs={12}>
          {propertyDetailsForm && <PropertyDetailsForm />}
          {!propertyDetailsForm && <PropertyDetailsText />}
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
