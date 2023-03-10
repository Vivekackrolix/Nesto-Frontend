import { Navbar, Nav, Container } from 'react-bootstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { BsFillBellFill } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import homeIcon from '../../assets/images/home.svg';
import clientIcon from '../../assets/images/client.svg';
import brokerageIcon from '../../assets/images/brokerage.svg';
import brokerProfileImg from '../../assets/images/broker-profile-img.png';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="nes__navbar">
      <Container>
        <Navbar.Brand href="/" className="d-flex justify-content-center">
          <img src="/assets/nesto-logo.png" alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="mx-3 d-flex align-items-center gap-2">
              <img src={homeIcon} alt="home icon" className="img-fluid" />
              Home
            </Nav.Link>
            <Nav.Link href="/" className="mx-3 d-flex align-items-center gap-2">
              <img
                src={clientIcon}
                alt="client icon"
                className="img-fluid mx-2"
              />
              Client
            </Nav.Link>
            <Nav.Link href="/" className="mx-3 d-flex align-items-center gap-2">
              <img
                src={brokerageIcon}
                alt="brokerage icon"
                className="img-fluid"
              />
              Brokerage
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <div className="nes__navbar__right__circle rounded-circle d-flex align-items-center justify-content-center bg-transparent">
                <AiOutlineEye size={24} color="#278FD9" />
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nes__navbar__right__circle rounded-circle d-flex align-items-center justify-content-center">
                <GiWallet />
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="d-flex align-items-center position-relative">
                <div className="nes__navbar__right__circle rounded-circle d-flex align-items-center justify-content-center">
                  <BsFillBellFill />
                </div>
                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  10
                  <span className="visually-hidden">New notifications</span>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <div className="nes__navbar__right__circle d-flex align-items-center bg-transparent">
                <img
                  src={brokerProfileImg}
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
