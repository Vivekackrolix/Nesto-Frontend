import React from "react";

const AgentRowFour = () => {
  return (
    <>
      <div
        className="col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-1"
        data-aos="fade-right"
      >
        <img
          src="/assets/informative/howWorks/gif6.gif"
          className="how-work_img"
          alt="how-work_img"
        />
      </div>
      <div
        className="col-lg-2 col-md-2 col-sm-2 col-2 row-two-col-2"
        data-aos="zoom-in"
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
      <div
        className="col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-3"
        data-aos="fade-left"
      >
        <span className="row-two-col-3-span-1">Manage Payments</span>
        <span className="row-two-col-3-span-2">
          Once you have successfully assisted the customer, we will send you the invoices for further transactions.
        </span>
      </div>
    </>
  );
};

export default AgentRowFour;
