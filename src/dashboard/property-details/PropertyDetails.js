import { Container } from 'react-bootstrap';
import './PropertyDetails.css';
import PropertyDetailsHeader from './PropertyDetailsHeader';

const PropertyDetails = () => {
  return (
    <Container className="property__details">
      <PropertyDetailsHeader />
    </Container>
  );
};

export default PropertyDetails;
