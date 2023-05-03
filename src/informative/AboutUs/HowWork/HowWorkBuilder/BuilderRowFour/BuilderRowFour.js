import React from 'react';

const BuilderRowFour = () => {
  return (
    <>
      <div
        className="col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-1"
        data-aos="false"
      >
        <img
          src="/assets/informative/howWorks/Promotion.gif"
          className="how-work_img"
          alt="how-work_img"
        />
      </div>
      <div
        className="col-lg-2 col-md-2 col-sm-2 col-2 row-two-col-2"
        data-aos="false"
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
        data-aos="false"
      >
        <span className="row-two-col-3-span-1">Buy Promotional Packages</span>
        <span className="row-two-col-3-span-2">
          Purchase our promotional packages and reform your marketing to increase your visibility and reach.
        </span>
      </div>
    </>
  );
};

export default BuilderRowFour;
