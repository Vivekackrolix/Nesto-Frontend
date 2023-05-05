import React from 'react';
import { Fade } from 'react-reveal';

const Heading = ({ title, sub }) => {
  return (
    <>
      <div className="text-center pt-5">
        <div className="">
          <Fade bottom duration={1000} distance="100px" delay={100}>
            <span className="sections-heading">{title}</span>
          </Fade>
        </div>
        <Fade bottom duration={1000} distance="100px" delay={100}>
          <div className="sections-sub-heading">
            <p className="">{sub}</p>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="100px" delay={100}>
          <div className="load-wrapp">
            <div className="load">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Heading;
