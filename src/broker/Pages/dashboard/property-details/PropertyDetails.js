import { Container } from 'react-bootstrap';
import { HeroSection } from '../../../features';
import './PropertyDetails.css';

const PropertyDetails = () => {
  return (
    <section className="mt-5">
      <Container>
        <HeroSection details />
      </Container>
    </section>
  );
};

export default PropertyDetails;
