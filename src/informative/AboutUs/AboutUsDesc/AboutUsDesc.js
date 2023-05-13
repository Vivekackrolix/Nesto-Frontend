import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const AboutUsDesc = () => {
  return (
    <div className="home-page-about">
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="row">
          <Fade left duration={1000} delay={100}>
            <div className="col-lg-6">
              <img
                className="about-us_box1-img"
                src="/assets/informative/NestoAbout.png"
                alt="about"
              />
              <div className="about-us_box1_btn-div justify-content-end align-items-start">
                <div className="d-flex gap-4">
                  <div>
                    <div className="d-flex gap-3 mb-2">
                      <div>
                        <Link
                          to="/"
                          className="about-us_box1_btn d-flex align-items-center"
                        >
                          <div>
                            <img
                              src="/assets/informative/Google-Play.png"
                              className="second-card__icon"
                              alt="google-play"
                            />
                          </div>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/"
                          className="about-us_box1_btn d-flex align-items-center"
                        >
                          <div>
                            <img
                              src="/assets/informative/Apple.png"
                              className="second-card__icon"
                              alt="apple"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                    <span
                      className="about-us_box1_icon-span-3"
                      style={{ letterSpacing: "1px" }}
                    >
                      Download The App Now!
                    </span>
                  </div>

                  <div className="text-center">
                    <img
                      src="/assets/informative/scan.png"
                      className="scan mb-2"
                      alt="scan"
                    />
                    <span className="about-us_box1_icon-span-3">Scan Me</span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right duration={1000} delay={100}>
            <div className="col-lg-6">
              <div className="about-us_box2">
                <span className="sections-heading">ABOUT US</span>
                <span className="about-us_box-span2 sections-sub-heading">
                  Building Broker-Builder Connection!
                </span>
                <div className="load-wrapp">
                  <div className="load">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <span className="about-us_box-span3">
                  NestoHub is a team of experts who want to revolutionize real estate by creating an effective and streamlined platform that simplifies the builder-broker connection. We serve an upper hand in the real estate market with easy property listing, vast inventory, less trouble, quicker sales, and higher earnings.
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDesc;
