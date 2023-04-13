import React from 'react';

const Heading = ({ title, sub }) => {
  return (
    <>
      <div className="text-center pt-5">
        <div className="">
          <span className="sections-heading" data-aos="fade-up">
            {title}
          </span>
        </div>
        <div className="sections-sub-heading" data-aos="fade-up">
          <p className="">{sub}</p>
        </div>
        <div className="load-wrapp">
          <div className="load" data-aos="fade-up">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
