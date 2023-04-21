import React from "react";
import BuilderRowTwo from "./BuilderRowTwo/BuilderRowTwo";
import BuilderRowFour from "./BuilderRowFour/BuilderRowFour";
import BuilderRowFive from "./BuilderRowFive/BuilderRowFive";

const HowWorkBuilder = () => {
  return (
    <div className="container how-container">
      <div className="how-box px-2 pb-2">
        <span className="sections-heading" data-aos="fade-up">
          How NestoHub Works For Builders
        </span>
        <span className="sections-sub-heading" data-aos="fade-up">
          We Follow A Simple Process To Streamline Builder’s Process
        </span>
        <div className="load-wrapp">
          <div className="load" data-aos="fade-up">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row pt-4 px-5">
        {/* BuilderRow-1 */}
        <div
          className="col-lg-5 col-md-5 col-sm-5 col-5 how-col-1"
          data-aos="fade-right"
        >
          <span className="how-col-1-span-1">Register Yourself</span>
          <span className="how-col-1-span-2">
            Create your Broker account free of cost with NestoHub by filling out
            simple details.
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
            alt="how-work_img"
          />
        </div>
        {/* ============================= */}
        <BuilderRowTwo />
        {/* BuilderRow-2 */}
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
            src="/assets/informative/howWorks/PropertyPerformance.gif"
            className="how-work_img"
            alt="how-work_img"
          />
        </div>
        {/* BuilderRowFour */}
        <BuilderRowFour />
        {/* BuilderRowFive */}
        <BuilderRowFive />
      </div>
    </div>
  );
};

export default HowWorkBuilder;
