import React from 'react';
import { Container } from 'react-bootstrap';
import heroBackground from '../../assets/images/hero-section.png';
import './HeroSection.css';

function HeroSection() {
  return (
    <div
      className="hero-section nes__hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="overlay"></div>
      <Container>
        <div className="hero-caption">
          <h1>Summer Vacation</h1>
          <p>All Discount up to 60%</p>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
