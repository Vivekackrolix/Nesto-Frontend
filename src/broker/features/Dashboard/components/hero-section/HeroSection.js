import { Container } from 'react-bootstrap';
import heroBackground from '../../assets/images/hero-section.png';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="mt-5">
      <div
        className="hero-section nes__hero d-flex flex-column justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackground})`,
        }}
      >
        <Container>
          <div className="hero-caption ms-5">
            <h1 className="d-flex flex-column text-white">
              <span>Summer</span> <span>Vacation</span>
            </h1>
            <p className="mt-5">All Discount up to 60%</p>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
