import React from "react";

const RowFive = () => {
  return (
    <>
      <div
        className="col-lg-5 col-md-5 col-sm-5 col-5 how-col-1"
        data-aos="false"
      >
        <span className="how-col-1-span-1">Claim Higher Brokerage</span>
        <span className="how-col-1-span-2">
          Raise your brokerage or claim the higher brokerage at NestoHub after
          closing the deal with the customer.
        </span>
      </div>
      <div
        className="col-lg-2 col-md-2 col-sm-2 col-2 how-col-2"
        data-aos="false"
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
      <div
        className="col-lg-5 col-md-5 col-sm-5 col-5 how-container-col-3"
        data-aos="false"
      >
        <img
          src="/assets/informative/howWorks/Claim.gif"
          className="how-work_img"
          alt="how-work"
        />
      </div>
    </>
  );
};

export default RowFive;
