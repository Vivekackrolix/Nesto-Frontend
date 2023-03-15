import { Container } from 'react-bootstrap';
import { HeroSection } from '../../../features';
import './PropertyDetails.css';

const PropertyDetails = () => {
  return (
    <section className="mt-5 broker__property__details">
      <Container>
        <HeroSection details />
        <div className="broker__property__details__availability d-flex justify-content-between mt-3">
          <div className="broker__property__details__availability__left d-flex gap-2">
            <div className="py-1 px-3">Under Constructions</div>
            <div className="py-1 px-3">Possession in Dec,2023</div>
          </div>
          <div className="broker__property__details__availability__right py-1 px-3">
            Availability
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PropertyDetails;
