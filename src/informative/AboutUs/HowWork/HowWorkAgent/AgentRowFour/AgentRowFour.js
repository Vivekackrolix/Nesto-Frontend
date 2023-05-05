import React from "react";
import { Fade, Zoom } from "react-reveal";

const AgentRowFour = () => {
  return (
    <>
      <Fade right duration={1000} distance="100px" delay={1000}>
        <div
          className="col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-1"
        >
          <img
            src="/assets/informative/howWorks/gif6.gif"
            className="how-work_img"
            alt="how-work_img"
          />
        </div>
      </Fade>
      <Zoom bottom duration={1000} delay={100}>
        <div
          className="col-lg-2 col-md-2 col-sm-2 col-2 row-two-col-2"
        >
          <div class="radius">
            <span class="place row-two-col-2-span-1">04</span>
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
        <div className="col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-3">
          <span className="row-two-col-3-span-1">Manage Payments</span>
          <span className="row-two-col-3-span-2">
            Once you have successfully assisted the customer, we will send you the invoices for further transactions.
          </span>
        </div>
      </Fade>
    </>
  );
};

export default AgentRowFour;
