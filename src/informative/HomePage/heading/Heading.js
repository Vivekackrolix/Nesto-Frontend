import React from 'react';
import './Heading.css';

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
      </div>
    </>
  );
};

export default Heading;
