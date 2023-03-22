import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsApple } from "react-icons/bs";
import { AiFillAndroid } from 'react-icons/ai'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaICursor } from 'react-icons/fa';

const InformativeNavbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <Navbar bg="light" expand="lg" className="login__header nes__header py-0">
      {/* <Container className='nav-container'> error testing */}
        <Link to='/' className='navbar-brand nav-image'>
          <img
            src="/assets/nesto-logo.png"
            alt="logo"
            className="login__header__img me-auto"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-5">
            <Nav.Item>
              <div className='login-div'>
                <Link to='/' className='login-link'>Login</Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              <div className="broker-link-div">
                <span>
                  <img src="./assets/profle.png" alt="" />
                </span>
                <Link to='/broker-page' className="broker-link">Join as a broker</Link>
              </div>
            </Nav.Item>
            <Nav.Item>
              <div className='list-property-div'>
                <Link to='/' className='list-property-link'>List your Property</Link>
              </div>
            </Nav.Item>
            <Nav.Item className="download">
              <button className="download-button d-flex mb-3 p-4 mb-lg-0 btn-lg">
                <span>Download App</span>
                <span className='text-white mx-2'>
                  <AiFillAndroid size
                    ={24} />
                </span>
                <span className='text-white '>
                  <BsApple size={24} />
                </span>
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default InformativeNavbar;
