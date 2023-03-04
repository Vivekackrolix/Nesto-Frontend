import "./Header.css";
import { Container, Nav } from "react-bootstrap";
import profile from "../Images/Profile.png";
import bgImage from "../Images/bg-image.png";

const Header = () => {
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
          {/* <Nav.Item className="ms-auto">
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
          </Nav.Item> */}
          <div className="d-flex flex-row col-4 justify-content-between ms-auto">
            <Nav.Item className="">Home</Nav.Item>
            <Nav.Item>Client</Nav.Item>
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

export default Header;
