import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Navbar expand="lg" className="shadow-sm py-3 dashboard__navbar" style={{ background: '#ECF7FF' }}>
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
              className="btn btn-outline-primary dropdown-toggle my-3 my-lg-0 me-3 p-0 btn-sm"
              onClick={() => setDropdown(!dropdown)}
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <button className="btn btn-color-primary mb-3 mb-lg-0 btn-sm">
                List your Property
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
