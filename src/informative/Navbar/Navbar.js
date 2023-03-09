import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {  BsApple } from "react-icons/bs";
import {AiFillAndroid} from 'react-icons/ai'
import './Navbar.css';
const InformativeNavbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="login__header nes__header">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/nesto-logo.png"
            alt="logo"
            className="login__header__img me-auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <NavDropdown
              title="Login"
              show={dropdown}
              className="border-color-primary text-blue my-3 my-lg-0 me-3 p-0 btn btn-sm"
              onClick={() => setDropdown(!dropdown)}
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <button className="btn border-color-primary mx-4 profile-button py-0 btn-sm">
                <span>
                  <img src="./assets/profle.png" alt="" />
                </span>
                <span className="text-blue mx-2">Join as a broker</span>
              </button>
            </Nav.Item>
            <Nav.Item>
              <button className="btn btn-color-primary mb-3 py-2 mb-lg-0 btn-sm">
                List your Property
              </button>
            </Nav.Item>
            <Nav.Item className="mx-4">
              <button className="download-button d-flex mb-3 p-4 mb-lg-0 btn-lg">
                <span>Download App</span>
                <span className='text-white mx-2'>
                  <AiFillAndroid size
                  ={24} />
                </span>
                <span className='text-white '>
                  <BsApple size={24}/>
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
