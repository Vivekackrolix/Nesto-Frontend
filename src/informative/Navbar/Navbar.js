import React, { useState } from 'react';
import './Navbar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BsApple } from 'react-icons/bs';
import { AiFillAndroid } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LoginModal from '../HomePage/LoginModal/LoginModal';
import LoginAsBroker from './../HomePage/LoginModal/LoginAsBroker/LoginAsBroker';
import ReffrelRegister from './../HomePage/LoginModal/ReffrelRegister/ReffrelRegister';
import SuccessfulLogin from './../HomePage/LoginModal/SuccessfulLogin/SuccessfulLogin';
import NotRegistered from './../HomePage/LoginModal/NotRegistered/NotRegistered';
import ListProperty from './../HomePage/LoginModal/ListProperty/ListProperty'
const InformativeNavbar = () => {
  const [show, setShow] = useState(false);
  const onHide = () => {
    setShow(false);
  };
  const showLoginModal = () => {
    setShow(true);
  };
  return (
    <>
      <LoginModal show={show} onHide={onHide} /> 
      {/* <LoginAsBroker show={show} onHide={onHide} /> */}
      {/* <ReffrelRegister show={show} onHide={onHide} /> */}
      {/* <SuccessfulLogin show={show} onHide={onHide} />  */}
      {/* <ListProperty show={show} onHide={onHide} />   */}
      {/* <NotRegistered show={show} onHide={onHide} />  */}
      <Navbar bg="light" expand="lg" className="login__header nes__header sticky-top">
        <Link to="/" className="navbar-brand">
          <img
            src="/assets/nesto-logo.png"
            className="info-login__header__img me-auto"
            alt='login-header'
          />
        </Link>
        <Navbar.Toggle className="navbar-toggler " type="Navbar.Toggle" aria-controls="basic-navbar-nav">
          <span className="toggler-icon toggler-icon-top-bar"></span>
          <span className="toggler-icon toggler-icon-middle-bar"></span>
          <span className="toggler-icon toggler-icon-bottom-bar"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className='basic-navbar-nav' id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3 nes__header-collapse-nav">
            {/* Login btn */}
            <Nav.Item>
              <div className="login-div">
                <button className="login-link" onClick={showLoginModal}>
                  Login
                </button>
              </div>
            </Nav.Item>
            {/* Join as a broker btn */}
            <Nav.Item>
              <div className="broker-link-div">
                <div>
                  <span>
                    <img src="/assets/profle.png" alt='profile' />
                  </span>
                </div>
                <div>
                  <Link to='/broker-page' className="informative-navbar-broker-link">
                    Join as a broker
                  </Link>
                </div>
              </div>
            </Nav.Item>
            {/* List your Property btn */}
            <Nav.Item>
              <div className="">
                {/* <button > */}
                <Link className="list-property-link" to='/builder-page'>List your Property</Link>
                {/* </button> */}
              </div>
            </Nav.Item>
            {/* Download btn */}
            <Nav.Item className="download">
              <Link
                to="/"
                className="nes__header-download-button d-flex mb-3 mb-lg-0 btn-lg"
              >
                <div>
                  <span>Download App</span>
                  <span className="text-white mx-1">
                    <AiFillAndroid size={24} />
                  </span>
                </div>
                <div>
                  <span className="text-white">
                    <BsApple size={24} />
                  </span>
                </div>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default InformativeNavbar;
