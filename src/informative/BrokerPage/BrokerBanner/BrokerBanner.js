import React from 'react'
import './BrokerBanner.css'
import { Link } from 'react-router-dom'
import BrokerForm from '../BrokerForm/BrokerForm'

const BrokerBanner = () => {
  return (
    <>
      <div className="builder-banner">
        <div className="row builder-banner-row">
          <div className="col-lg-5 builder-banner-col-1" data-aos='fade-right'>
            <div>
              <h4 className="builder-banner-h4">
                Welcome to India's Largest Network of Brokers
              </h4>
              <hr className="banner-hr" />
              <p className="builder-banner-p">
                Broker Network app is a suite of services specifically designed for
                Indian real estate brokers and developers to maximize their business.
              </p>
              <Link to="/" className="builder-banner-link">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-lg-2 builder-banner-col-2" data-aos='zoom-in'>
            <img src='/assets/informative/brokerCartoon.svg' className='builder-banner-cartoon' />
          </div>
          {/* BuilderForm */}
          <BrokerForm />
        </div>
      </div>
    </>
  )
}

export default BrokerBanner