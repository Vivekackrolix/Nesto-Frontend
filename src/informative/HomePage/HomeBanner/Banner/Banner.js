import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import BannerSlider from '../BannerSlider/BannerSlider';
import TextSlider from '../TextSlider/TextSlider';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import MobileSlider from '../MobileSlider/MobileSlider';
import { Fade } from 'react-reveal';
const Banner = () => {
  return (
    <>
      <div className="banner" style={{ overflowX: 'hidden' }}>
        <div className="banner-container-div">
          <div className="row banner-row">
            <Fade left duration={1000} distance="100px" delay={100}>
              <div className="col-lg-5 banner-col-5">
                <div>
                  <h4 className="banner-h4">
                    An Online Space To Connect Builders & Brokers
                  </h4>
                  <div className="load-wrapp">
                    <div className="load">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                  <p className="banner-p">
                    Our technology-driven platform, NestoHub, provides several
                    services that speed up, streamline, and increase
                    transparency in the sale of real estate. We are bringing
                    digital transformation to the real estate world.
                  </p>
                  <Link to="/broker-page" className="primary_button">
                    Join Us
                    <MdKeyboardDoubleArrowRight
                      size={20}
                      className="move-arrow"
                    />
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade right duration={1000} distance="100px" delay={100}>
              <div className="col-lg-7 desktop-col">
                <BannerSlider />
              </div>
            </Fade>
            <Fade right duration={1000} distance="100px" delay={100}>
              <div className="col-lg-7 mobile-col">
                <MobileSlider />
              </div>
            </Fade>
          </div>
        </div>
        <TextSlider />
      </div>
    </>
  );
};

export default Banner;
