import './Header.css';
import { useState } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="py-3">
      <Container>
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <img src="/assets/nesto-logo.png" alt="logo" />
          </Nav.Item>
          <Nav.Item className="ms-auto">
            <NavDropdown
              title="Login"
              show={dropdown}
              className="border-color-primary me-3 p-0 btn btn-sm"
              onClick={() => setDropdown(!dropdown)}
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <button className="btn btn-primary bg-color-primary btn-sm">
              List your Property
            </button>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
