import "./DashboardHeader.css";
import { Container, Nav } from "react-bootstrap";
import profile from "../../Images/Profile.png";
import bgImage from "../../Images/bg-image.png";
import { Link } from "react-router-dom";
import eye from "../../Images/Eye.png";
import notification from "../../Images/notification.png";
import property from "../../Images/property.png";
import brockerage from "../../Images/brokrage.png";
import home from "../../Images/Home.png";

const DashboardHeader = () => {
  return (
    <header className="py-3 login__header" style={{ background: "#ECF7FF" }}>
      <Container>
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <img
              src="/assets/nesto-logo.png"
              alt="logo"
              className="login__header__img"
            />
          </Nav.Item>
          <div className="d-flex flex-row col-4 justify-content-between ms-auto">
            <Nav.Item as={Link} to="/builder/home-dashboard/property">
              <img src={home} alt="home" />
              Home
            </Nav.Item>
            <Nav.Link>
              <img src={property} alt="property" />
              Property
            </Nav.Link>
            <Nav.Item>
              <img src={brockerage} alt="brockerage" />
              Brockerage
            </Nav.Item>
          </div>
          <div className="d-flex col-2 ms-auto">
            <Nav.Item className="me-2 p-3">
              <img src={eye} alt="eye" />
            </Nav.Item>
            <Nav.Item className="me-2 p-2">
              <img src={bgImage} alt="profile" />
            </Nav.Item>
            <Nav.Item className="me-2">
              <img src={notification} alt="notification" />
            </Nav.Item>
            <Nav.Item className="me-2">
              <img src={profile} alt="profile" />
            </Nav.Item>
          </div>
        </Nav>
      </Container>
    </header>
  );
};

export default DashboardHeader;
