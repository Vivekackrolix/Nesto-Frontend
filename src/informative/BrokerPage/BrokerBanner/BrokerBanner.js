import React from 'react'
import './BrokerBanner.css'
import { Link } from 'react-router-dom'
import BrokerForm from '../BrokerForm/BrokerForm'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Zoom, Fade } from 'react-reveal';

const BrokerBanner = () => {
  return (
    <>
      <div className="broker-banner">
        <div className="row broker-banner-row">
          <Fade left duration={1000} distance="100px" delay={100}>
            <div className="col-lg-5 broker-banner-col-1">
              <div>
                <h4 className="banner-h4">
                  Welcome to India's Largest Network of Brokers
                </h4>
                <div className="load-wrapp">
                  <div className="load">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <p className="banner-p">
                  Broker Network app is a suite of services specifically designed for
                  Indian real estate brokers and developers to maximize their business.
                </p>
                <Link to="/contact-us" className="primary_button">
                  Write To Us
                  <MdKeyboardDoubleArrowRight size={20} className="move-arrow" />
                </Link>
              </div>
            </div>
          </Fade>
          <Zoom duration={1300} delay={100}>
            <div className="col-lg-2 broker-banner-col-2 align-items-end">
              <img src='/assets/informative/brokerCartoon.svg' alt='broker' className='broker-banner-cartoon' />
            </div>
          </Zoom>
          {/* BuilderForm */}
          <BrokerForm />
        </div>
      </div>
    </>
  )
}

export default BrokerBanner