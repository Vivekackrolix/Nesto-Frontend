import { Link } from 'react-router-dom';

import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { BsQuestionCircle, BsBoxArrowRight } from 'react-icons/bs';

import './DashboardHeader.css';
import NotificationDropdown from '../profile/notification/NotificationDropdown';

const DashboardHeader = () => {
  return (
    <Navbar className="shadow-sm py-3 dashboard__navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/assets/nesto-logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/profile" className="p-0 me-2 profile-img">
              <Image
                className="h-100 profile-img"
                src="/assets/dashboard-profile.png"
                rounded
                roundedCircle
                alt="profile img"
              />
            </Nav.Link>
            <NotificationDropdown notification={3} />
            <Nav.Link as={Link} to="/faq" className="p-0 mx-2 text-dark">
              <BsQuestionCircle className="icon" size={18} />
            </Nav.Link>
            <Nav.Link as={Link} to="/logout" className="p-0 ms-2 color-blue">
              <BsBoxArrowRight className="icon" size={18} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardHeader;
