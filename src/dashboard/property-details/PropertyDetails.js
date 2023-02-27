import { Col, Container, Row } from 'react-bootstrap';
import './PropertyDetails.css';
import PropertyDetailsHeader from './PropertyDetailsHeader';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';

const PropertyDetails = () => {
  return (
    <Container className="property__details">
      <PropertyDetailsHeader />
      <Row>
        <Col>
          <DashboardChildCard cardType="propertyDetailsProfile" />
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
