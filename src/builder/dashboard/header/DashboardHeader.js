import "./DashboardHeader.css";
import { Container, Nav } from "react-bootstrap";
import profile from "../../Images/Profile.png";
import bgImage from "../../Images/bg-image.png";

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
            <Nav.Item className="">Home</Nav.Item>
            <Nav.Item>Property</Nav.Item>
            <Nav.Item>Brockerage</Nav.Item>
          </div>
          <div className="d-flex col-2 ms-auto">
            <Nav.Item className="me-2">
              <img src={bgImage} alt="profile" />
            </Nav.Item>
            <Nav.Item className="me-2">
              <img src={bgImage} alt="profile" />
            </Nav.Item>
            <Nav.Item className="me-2">
              <img src={bgImage} alt="profile" />
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
