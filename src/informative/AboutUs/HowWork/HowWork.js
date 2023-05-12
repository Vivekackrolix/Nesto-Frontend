import React, { useEffect } from 'react';
import './HowWork.css';
import RowTwo from './RowTwo/RowTwo';
import RowFour from './RowFour/RowFour';
import RowFive from './RowFive/RowFive';
import RowSix from './RowSix/RowSix';
import Aos from 'aos';
import { Fade, Zoom } from 'react-reveal';

const HowWork = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);
  return (
    <>
      <Fade bottom duration={1000} distance="100px" delay={100}>
        <div className="container how-container">
          <div className="how-box">
            <Fade bottom duration={1000} distance="100px" delay={100}>
              <span className="sections-heading">
                How NestoHub Works For Brokers
              </span>
            </Fade>
            <Fade bottom duration={1000} distance="100px" delay={100}>
              <span className="sections-sub-heading">
                We Follow A Simple Process To Streamline Broker’s Process
              </span>
            </Fade>
            <div className="load-wrapp">
              <Fade bottom duration={1000} distance="100px" delay={100}>
                <div className="load">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </Fade>
            </div>
          </div>
          <div className="row pt-4 px-5 mt-2">
            <Fade bottom duration={1000} distance="100px" delay={100}>
              <div className="col-lg-5 col-md-5 col-sm-5 col-5 how-col-1">
                <span className="how-col-1-span-1">Register Yourself</span>
                <span className="how-col-1-span-2">
                  Create your Broker account free of cost with NestoHub by filling
                  out simple details.
                </span>
              </div>
            </Fade>
            <Zoom bottom duration={1000} delay={100}>
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2 how-col-2"
              >
                <div class="radius">
                  <span class="place how-col-2-span-1">01</span>
                  <span class="border-animation ba1"></span>
                  <span class="border-animation ba2"></span>
                  <span class="border-animation ba3"></span>
                </div>
                <div className="line-div">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                  <span className="line-3"></span>
                </div>
              </div>
            </Zoom>
            <Fade right duration={1000} distance="100px" delay={1000}>
              <div
                className="col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3"

              >
                <img
                  src="/assets/informative/howWorks/gif1.gif"
                  className="how-work_img"
                  alt="how-work"
                />
              </div>
            </Fade>
            {/* ============================= */}
            <RowTwo />
            {/* RowThree */}
            <Fade left duration={1000} distance="100px" delay={1000}>
              <div
                className="col-lg-5 col-md-5 col-sm-5 col-5 how-col-1 mb-5"

              >
                <span className="how-col-1-span-1">Manage Customer Visits</span>
                <span className="how-col-1-span-2">
                  NestoHub enables you to manage and update the status of your
                  customers' visits, allowing for more efficient planning.
                </span>
              </div>
            </Fade>
            <Zoom bottom duration={1000} delay={100}>
              <div
                className="col-lg-2 col-md-2 col-sm-2 col-2 row-two-col-2"
              >
                <div class="radius">
                  <span class="place row-two-col-2-span-1">03</span>
                  <span class="border-animation ba1"></span>
                  <span class="border-animation ba2"></span>
                  <span class="border-animation ba3"></span>
                </div>
                <div className="line-div">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                  <span className="line-3"></span>
                </div>
              </div>
            </Zoom>
            <Fade right duration={1000} distance="100px" delay={1000}>
              <div
                className="col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3 d-flex align-items"

              >
                <img
                  src="/assets/informative/howWorks/gif3.gif"
                  className="how-work_img how-work_img-small"
                  alt="how-work_img"
                />
              </div>
            </Fade>
            {/* RowFour */}
            <RowFour />
            {/* RowFive */}
            <RowFive />
            {/* RowSix */}
            <RowSix />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default HowWork;
