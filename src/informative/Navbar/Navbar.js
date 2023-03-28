import React, { useState } from 'react';
import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsApple } from 'react-icons/bs';
import { AiFillAndroid } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LoginModal from '../HomePage/LoginModal/LoginModal';
import LoginAsBroker from '../HomePage/LoginModal/LoginAsBroker/LoginAsBroker';
import ReffrelRegister from '../HomePage/LoginModal/ReffrelRegister/ReffrelRegister';
import SuccessfulLogin from '../HomePage/LoginModal/SuccessfulLogin/SuccessfulLogin';
import ListProperty from '../HomePage/LoginModal/ListProperty/ListProperty';
import NotRegistered from '../HomePage/LoginModal/NotRegistered/NotRegistered';

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
      {/* <LoginModal show={show} onHide={onHide} /> */}
      {/* <LoginAsBroker show={show} onHide={onHide} /> */}
      {/* <ReffrelRegister show={show} onHide={onHide} /> */}
      {/* <SuccessfulLogin show={show} onHide={onHide} /> */}
      {/* <ListProperty show={show} onHide={onHide} /> */}
      <NotRegistered show={show} onHide={onHide} />
      <Navbar bg="light" expand="lg" className="login__header nes__header py-0">
        <Container className="nav-container">
          <Link to="/" className="navbar-brand nav-image">
            <img
              src="/assets/nesto-logo.png"
              alt="logo"
              className="login__header__img me-auto"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-5">
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
                      <img src="./assets/profle.png" alt="" />
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
                <div className="list-property-div">
                  <button className="list-property-link" onClick={showLoginModal}>
                    List your Property
                  </button>
                </div>
              </Nav.Item>
              {/* Download btn */}
              <Nav.Item className="download">
                <Link
                  to="/"
                  className="download-button d-flex mb-3 p-4 mb-lg-0 btn-lg"
                >
                  <div>
                    <span>Download App</span>
                    <span className="text-white mx-2">
                      <AiFillAndroid size={24} />
                    </span>
                  </div>
                  <div>
                    <span className="text-white ">
                      <BsApple size={24} />
                    </span>
                  </div>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default InformativeNavbar;
