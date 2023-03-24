import React from 'react'
import './BrokerBanner.css'
import { Link } from 'react-router-dom'
import BrokerForm from '../BrokerForm/BrokerForm'

const BrokerBanner = () => {
  return (
    <>
      <div className="broker-banner">
        <div className="row broker-banner-row">
          <div className="col-lg-5 broker-banner-col-1" data-aos='fade-right'>
            <div>
              <h4 className="broker-banner-h4">
                Welcome to India's Largest Network of Brokers
              </h4>
              <hr className="banner-hr" />
              <p className="broker-banner-p">
                Broker Network app is a suite of services specifically designed for
                Indian real estate brokers and developers to maximize their business.
              </p>
              <Link to="/" className="broker-banner-link">
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-lg-2 broker-banner-col-2" data-aos='zoom-in'>
            <img src='/assets/informative/brokerCartoon.svg' className='broker-banner-cartoon' />
          </div>
          {/* BuilderForm */}
          <BrokerForm />
        </div>
      </div>
    </>
  )
}

export default BrokerBanner