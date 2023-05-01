import React, { useEffect } from "react";
import "./HowWork.css";
import RowTwo from "./RowTwo/RowTwo";
import RowFour from "./RowFour/RowFour";
import RowFive from "./RowFive/RowFive";
import RowSix from "./RowSix/RowSix";
import Aos from "aos";

const HowWork = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 })
  }, [])
  return (
    <>
<<<<<<< HEAD
      <div className="how-box px-2">
        <span className="sections-heading" data-aos="fade-up">
          How NestoHub Works For Brokers
        </span>
        <span className="sections-sub-heading" data-aos="fade-up">
          We Follow A Simple Process To Streamline Broker’s Process
        </span>
        <div className="load-wrapp">
          <div className="load" data-aos="fade-up">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
=======
      <div className="container how-container" data-aos="fade-up">
        <div className="how-box px-2 pb-2">
          <span className="sections-heading" data-aos="fade-up">
            How NestoHub Works For Brokers
          </span>
          <span className="sections-sub-heading" data-aos="fade-up">
            We Follow A Simple Process To Streamline Brokers’s Process
          </span>
          <div className="load-wrapp">
            <div className="load" data-aos="fade-up">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
>>>>>>> c76f9a5ad19e3ef7440d19a012508aade6d932b0
          </div>
        </div>
      </div>
      <div className="container how-container">
        <div className="row pt-4 px-5">
          <div
            className="col-lg-5 col-md-5 col-sm-5 col-5 how-col-1"
            data-aos="fade-right"
          >
            <span className="how-col-1-span-1">Register Yourself</span>
            <span className="how-col-1-span-2">
              Create your Broker account free of cost with NestoHub by filling
              out simple details.
            </span>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-2 how-col-2"
            data-aos="zoom-in"
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
          <div
            className="col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3"
            data-aos="fade-left"
          >
            <img
              src="/assets/informative/howWorks/gif1.gif"
              className="how-work_img"
              alt="how-work"
            />
          </div>
          {/* ============================= */}
          <RowTwo />
          {/* RowThree */}
          <div
            className="col-lg-5 col-md-5 col-sm-5 col-5 how-col-1"
            data-aos="fade-right"
          >
            <span className="how-col-1-span-1">Manage Customer Visits</span>
            <span className="how-col-1-span-2">
              NestoHub enables you to manage and update the status of your
              customers' visits, allowing for more efficient planning.
            </span>
          </div>
          <div
            className="col-lg-2 col-md-2 col-sm-2 col-2 how-col-2"
            data-aos="zoom-in"
          >            
            <div class="radius">
              <span class="place how-col-2-span-1">03</span>
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
          <div
            className="col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3"
            data-aos="fade-left"
          >
            <img
              src="/assets/informative/howWorks/gif3.gif"
              className="how-work_img"
              alt="how-work_img"
            />
          </div>
          {/* RowFour */}
          <RowFour />
          {/* RowFive */}
          <RowFive />
          {/* RowSix */}
          <RowSix />
        </div>
      </div>
    </>
  );
};

export default HowWork;
