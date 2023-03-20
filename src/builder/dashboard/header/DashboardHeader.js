import "./DashboardHeader.css";
import { Container, Nav } from "react-bootstrap";
import profile from "../../Images/Profile.png";
import bgImage from "../../Images/bg-image.png";
import { Link } from "react-router-dom";

import notification from "../../Images/notification.png";
import property from "../../Images/property.png";
import Brokerage from "../../Images/brokrage.png";
import home from "../../Images/Home.png";
import NotificationDropdown from "../Builderprofile/notification/NotificationDropdown";

const DashboardHeader = () => {
  return (
    <header className="py-2 login__header" style={{ background: "#ECF7FF" }}>
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
            <Nav.Item
              as={Link}
              to="/builder/home-dashboard/property"
              className="d-flex align-items-center gap-2 "
              style={{ textDecoration: "none" }}
            >
              <img src={home} alt="home" />
              Home
            </Nav.Item>
            <Nav.Link
              className="d-flex align-items-center gap-2"
              style={{ color: "black" }}
            >
              <img src={property} alt="property" />
              Property
            </Nav.Link>
            <Nav.Item
              className="d-flex align-items-center gap-2"
              as={Link}
              to="/builder/home-dashboard/Brokerage"
              style={{ textDecoration: "none", color: "#282431" }}
            >
              <img src={Brokerage} alt="Brokerage" />
              Brokerage
            </Nav.Item>
          </div>
          <div className="d-flex col-3 ms-auto align-items-center justify-content-end">
            {/* <Nav.Item className="p-3">
              <img src={bgImage} alt="profile" />
            </Nav.Item> */}
            <Nav.Item className="p-3">
              <img
                src="/assets/subscription.png"
                alt="subscription"
                className="subscription"
              />
            </Nav.Item>
            {/* <Nav.Item
              className="p-2"
              as={Link}
              to="/builder/home-dashboard/notification"
            > */}
            {/* <img src={notification} alt="notification" /> */}
            {/* <img
                src="/assets/notification.png"
                alt="notification"
                className="notification"
              /> */}
            <NotificationDropdown notification={3} />
            {/* </Nav.Item> */}
            <Nav.Item
              className="me-3 mx-1 my-2"
              as={Link}
              to="/builder/home-dashboard/profile"
            >
              <img src={profile} alt="profile" />
            </Nav.Item>
          </div>
        </Nav>
      </Container>
    </header>
  );
};

export default DashboardHeader;
