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
                  Connect & Earn Higher <br />With NestoHub
                </h4>
                <div className="load-wrapp">
                  <div className="load">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
                <p className="banner-p">
                  We provide brokers with exclusive property inventory, higher commissions, and an easy-to-use dashboard.<br /> Hit the best deals with NestoHub!
                </p>
                <Link to="/contact-us" className="primary_button">
                  Connect For Queries
                  <MdKeyboardDoubleArrowRight size={20} className="move-arrow" />
                </Link>
              </div>
            </div >
          </Fade >
          <Zoom duration={1300} delay={100}>
            <div className="col-lg-2 broker-banner-col-2 align-items-end">
              <img src='/assets/informative/brokerCartoon.svg' alt='broker' className='broker-banner-cartoon' />
            </div>
          </Zoom>
          {/* BuilderForm */}
          <BrokerForm />
        </div >
      </div >
    </>
  )
}

export default BrokerBanner