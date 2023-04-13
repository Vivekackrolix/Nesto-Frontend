import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import BannerSlider from "../BannerSlider/BannerSlider";
import TextSlider from "../TextSlider/TextSlider";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="banner" style={{ overflowX: "hidden" }}>
        <div className="banner-container-div">
          <div className="row">
            <div className="col-lg-5 banner-col-5" data-aos="fade-right">
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
                  services that speed up, streamline, and increase transparency
                  in the sale of real estate. We are bringing digital
                  transformation to the real estate world.
                </p>
                <Link to="/contact-us" className="primary_button">
                  Join Us 
                  <MdKeyboardDoubleArrowRight size={20} className="move-arrow" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 desktop-col" data-aos="fade-left">
              <BannerSlider />
            </div>
          </div>
        </div>
        <TextSlider />
      </div>
    </>
  );
};

export default Banner;
