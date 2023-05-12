import React from 'react';
import { Fade, Zoom } from 'react-reveal';

const BuilderRowTwo = () => {
  return (
    <>
      <Fade left duration={1000} distance="100px" delay={1000}>
        <div className="col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-1 mb-5">
          <img
            src="/assets/informative/howWorks/gif2.gif"
            className="how-work_img how-work_img-small"
          />
        </div>
      </Fade>
      <Zoom bottom duration={1000} delay={100}>
        <div className="col-lg-2 col-md-2 col-sm-2 col-2 row-two-col-2">
          <div class="radius">
            <span class="place row-two-col-2-span-1">02</span>
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
        <div className="col-lg-5 col-md-5 col-sm-5 col-5 row-two-col-3">
          <span className="row-two-col-3-span-1">List Your Properties</span>
          <span className="row-two-col-3-span-2">
            Build a professional inventory of your properties on NestoHub to
            facilitate searches.
          </span>
        </div>
      </Fade>
    </>
  );
};

export default BuilderRowTwo;
