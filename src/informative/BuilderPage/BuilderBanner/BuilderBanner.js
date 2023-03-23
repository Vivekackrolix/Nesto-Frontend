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
          {/* BuilderForm */}
        </div>
      </div>
      <BuilderForm />
    </>
  )
}

export default BuilderBanner