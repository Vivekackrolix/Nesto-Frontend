import React from 'react'
import './BuilderBanner.css'
import { Link } from 'react-router-dom'
import BuilderForm from '../BuilderForm/BuilderForm'

const BuilderBanner = () => {
  return (
    <>
      <div className="builder-banner">
        <div className="row builder-banner-row">
          <div className="col-lg-5 builder-banner-col-1" data-aos='fade-right'>
            <div>
              <h4 className="builder-banner-h4">
                Stop Searching, Start Listing your Property With Us
              </h4>
              <hr className="banner-hr" />
              <p className="builder-banner-p">
                Broker Network app is a suite of services specifically designed for Indian
                real estate brokers and developers to maximize their business.
              </p>
              <Link to="/" className="builder-banner-link">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-lg-2 builder-banner-col-2" data-aos='zoom-in'>
            <img src='/assets/informative/builderCartoon.svg' className='builder-banner-cartoon' />
          </div>
          <div className='col-lg-4 builder-banner-col-4' data-aos='fade-up'>
            <div className='builder-banner-col-4-div'>
              <div className='builder-banner-col-3_title_div'>
                <span className='builder-banner-col-3_title'>Hello! List your Property / Requirement</span>
              </div>
              <form action='#' className='builder-banner-col-3_form'>
                <input type='text' placeholder='Name' className='builder-banner-col-3_input' required />
                <input type='number' placeholder='Phone Number' className='builder-banner-col-3_input' required />
                <input type='email' placeholder='Email Address' className='builder-banner-col-3_input' required />
                <select className='builder-banner-col-3_input builder-banner-col-3_select'>
                  <option>option1</option>
                  <option>option1</option>
                  <option>option1</option>
                  <option>option1</option>
                  <option>option1</option>
                </select>
                <select className='builder-banner-col-3_input builder-banner-col-3_select'>
                  <option>option1</option>
                  <option>option1</option>
                  <option>option1</option>
                  <option>option1</option>
                  <option>option1</option>
                </select>
                <input type='text' placeholder='Brief Description' className='builder-banner-col-3_input' required />
                <button type='submit' className='builder-banner-col-3_btn'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BuilderForm />
    </>
  )
}

export default BuilderBanner