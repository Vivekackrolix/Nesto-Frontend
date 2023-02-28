import { Col, Container, Row } from 'react-bootstrap';
import './PropertyDetails.css';
import PropertyDetailsHeader from './PropertyDetailsHeader';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';
import PropertyDetailsForm from './PropertyDetailsForm';
import PropertyDetailsText from './PropertyDetailsText';
import { useLocation } from 'react-router-dom';

const PropertyDetails = () => {
  const location = useLocation();

  return (
    <Container className="property__details">
      <PropertyDetailsHeader />
      <Row>
        <Col xs={12} className="mt-4 mb-5">
          <DashboardChildCard cardType="propertyDetailsProfile" />
        </Col>
        <Col xs={12}>
          {location.pathname === '/home-dashboard/property-details' && (
            <PropertyDetailsForm />
          )}
          {location.pathname === '/home-dashboard/property-details-info' && (
            <PropertyDetailsText />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
