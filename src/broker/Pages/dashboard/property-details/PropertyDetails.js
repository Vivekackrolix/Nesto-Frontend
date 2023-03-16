import { Container } from 'react-bootstrap';
import { HeroSection } from '../../../features';
import './PropertyDetails.css';
import { AiFillStar } from 'react-icons/ai';

const Availability = () => {
  return (
    <div className="broker__property__details__availability d-flex justify-content-between mt-3">
      <div className="broker__property__details__availability__left d-flex gap-2">
        <div className="py-1 px-3">Under Constructions</div>
        <div className="py-1 px-3">Possession in Dec,2023</div>
      </div>
      <div className="broker__property__details__availability__right py-1 px-3">
        Availability
      </div>
    </div>
  );
};

const Rating = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <AiFillStar key={index} color="#FFB630" />
      ))}
    </>
  );
};

const PropertyDetails = () => {
  return (
    <section className="mt-5 broker__property__details">
      <Container>
        <HeroSection details />
        <Availability />

        {/* property details description card */}
        <div className="nes__broker__swiper__item__media d-flex align-items-center gap-3">
          <img src="/assets/broker/property-details-card.png" alt="Profile" />
          <div className="nes__broker__swiper__item__media__body">
            <h5 className="m-0">Sky Dandelions Apartment</h5>
            <Rating />
            <div className="apartment__size__selector"></div>
            <p className="m-0">Luxury Apartment in Sector-29, Gurugram</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PropertyDetails;
