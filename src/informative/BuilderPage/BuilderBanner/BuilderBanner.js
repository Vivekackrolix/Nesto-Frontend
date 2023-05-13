import React from "react";
import "./BuilderBanner.css";
import { Link } from "react-router-dom";
import BuilderForm from "../BuilderForm/BuilderForm";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Fade, Zoom } from "react-reveal";

const BuilderBanner = () => {
  return (
    <>
      <div className="builder-banner">
        <div className="row builder-banner-row">
          <Fade left duration={1000} distance="100px" delay={100}>
            <div className="col-lg-5 builder-banner-col-1">
              <div>
                <h4 className="banner-h4">
                  List & Sell Faster With NestoHub
                </h4>
                <div className="load-wrapp">
                  <div className="load">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <p className="banner-p">
                  We are a leading platform for builders to sell their inventory quickly and easily. NestoHub eliminates the hassel of manually managing brokers!
                </p>
                <Link to="/" className="primary_button">
                  Connect For Queries
                  <MdKeyboardDoubleArrowRight size={20} className="move-arrow" />
                </Link>
              </div>
            </div >
          </Fade >
          <Zoom duration={1300} delay={100}>
            <div className="col-lg-2 builder-banner-col-2 align-items-end">
              <img
                src="/assets/informative/builderCartoon.svg"
                alt="builder"
                className="builder-banner-cartoon"
              />
            </div>
          </Zoom>
          {/* Modile View Form =======================
          ======================================== */}
          <Fade bottom duration={1000} distance="100px" delay={100}>
            <div className="col-lg-4 builder-banner-col-4">
              <div className="builder-banner-col-4-div">
                <div className="builder-banner-col-3_title_div">
                  <span className="builder-banner-col-3_title">
                    List your Property / Requirement
                  </span>
                </div>
                <form action="#" className="builder-banner-col-3_form">
                  <input
                    type="text"
                    placeholder="Name"
                    className="builder-banner-col-3_input"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="builder-banner-col-3_input"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="builder-banner-col-3_input"
                    required
                  />
                  <select className="builder-banner-col-3_input builder-banner-col-3_select">
                    <option disabled={false} value="">Select Property Type</option>
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                  </select>
                  <input type='text' placeholder='Location of Property' className='builder-banner-col-3_input' required />
                  <input
                    type="text"
                    placeholder="Brief Description"
                    className="builder-banner-col-3_input"
                    required
                  />
                  <button type="submit" className="builder-banner-col-3_btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div >
      </div >
      {/* Desktop View Form ===========
      ============================= */}
      <BuilderForm />
    </>
  );
};

export default BuilderBanner;
