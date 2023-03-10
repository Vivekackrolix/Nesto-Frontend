import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex justify-content-center">
          <img src="/assets/nesto-logo.png" alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="mx-3">
              <AiOutlineHome size={20} />
              Home
            </Nav.Link>
            <Nav.Link href="#" className="mx-3">
              <AiOutlineUser size={20} />
              Client
            </Nav.Link>
            <Nav.Link href="#" className="mx-3">
              <AiOutlineUser size={20} />
              Brokerage
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <div className="d-flex align-items-center">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: 30, height: 30 }}
                >
                  <AiOutlineEye size={20} color="#fff" />
                </div>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="d-flex align-items-center">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: 30, height: 30 }}
                >
                  <AiOutlineShoppingCart size={20} color="#fff" />
                </div>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="d-flex align-items-center position-relative">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: 30, height: 30 }}
                >
                  <RiNotification3Line size={20} color="#fff" />
                </div>
                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  <span className="visually-hidden">New notifications</span>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="d-flex align-items-center">
                <img
                  src="/assets/profile.svg"
                  alt="Profile"
                  className="rounded-circle img-fluid"
                />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
