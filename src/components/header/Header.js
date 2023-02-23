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
              id="login-dropdown"
              show={dropdown}
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
