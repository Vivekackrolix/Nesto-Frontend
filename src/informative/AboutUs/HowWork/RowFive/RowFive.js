import React from "react";
import { Fade, Zoom } from "react-reveal";

const RowFive = () => {
  return (
    <>
      <Fade left duration={1000} distance="100px" delay={1000}>
        <div
          className="col-lg-5 col-md-5 col-sm-5 col-5 how-col-1"
        >
          <span className="how-col-1-span-1">Claim Higher Brokerage</span>
          <span className="how-col-1-span-2">
            Raise your brokerage or claim the higher brokerage at NestoHub after
            closing the deal with the customer.
          </span>
        </div>
      </Fade>
      <Zoom bottom duration={1000} delay={100}>
        <div
          className="col-lg-2 col-md-2 col-sm-2 col-2 how-col-2"
        >
          <div class="radius">
            <span class="place how-col-2-span-1">05</span>
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
      <Fade right duration={1000} distance="100px" delay={100}>
        <div
          className="col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3"
        >
          <img
            src="/assets/informative/howWorks/Claim.gif"
            className="how-work_img how-work_img-small"
            alt="how-work"
          />
        </div>
      </Fade>
    </>
  );
};

export default RowFive;
