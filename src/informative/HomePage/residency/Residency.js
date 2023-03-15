import React from 'react';
import './residency.css';

export default function Residency() {
  return (
    <>
      <div className="residency">
        <div className="container">
          <div className="row residency-row">
            <div className="col-lg-5 residency-col-1">
              <img src="./assets/residence.png" className='col-1-img' />
              <div className="col-1-box">
                <span className='col-1-box-span_1'>The Perfect Residency</span>
                <span className='col-1-box-span_2'>
                  Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore etLorem ipsum dolor sit amet,
                  consectetur adipisic do eiusmod tempor incididunt ut labore
                  etLorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                  tempor incididunt ut labore etLorem ipsum dolor sit amet,
                  consectetur adipisic do eiusmod tempor incididunt ut labore
                  etLorem ipsum dolor sit amet.
                </span>
              </div>
            </div>
            <div className="col-lg-7 residency-col-2">
              {/* <div className='animation-div'>
                <div className='animation-div_box-2'>
                  <img src='/assets/informative/animation-icon-1.png' className='animation-div_box-2-img-1' />
                  <img src="./assets/informative/animation-icon-1.png" className='animation-div_box-2-img-2' />
                  <img src="./assets/informative/animation-icon-1.png" className='animation-div_box-2-img-3' />
                  <img src="./assets/informative/animation-icon-1.png" className='animation-div_box-2-img-4' />
                </div>

                <div className='animation-div_box-1'>
                  <img src="./assets/informative/animation-cartoon.png" className='animation-cartoon-img' />
                </div>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}