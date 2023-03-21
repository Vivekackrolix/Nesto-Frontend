import DashboardHeader from "../header/DashboardHeader";
import { Col, Container, Row } from "react-bootstrap";
import SearchFilterBox from "../search-filter/SearchFilter";
import homeImage from "../../Images/homeimage.png";
import map from "../../Images/Map.png";
import brochure from "../../Images/brochure.png";
import Anlytics from "../dashboard-property-analytics/dashboard-property-details/anlytics";
import Location from "../dashboard-property-analytics/dashboard-property-details/Location";
import Amenities from "../dashboard-property-analytics/dashboard-property-details/Amenities";
import Payment from "../dashboard-property-analytics/dashboard-property-details/Payment";
import Danelions from "./Danelions";
import Footer from "../Footer/Footer";
import Floor from "../dashboard-property-analytics/dashboard-property-details/Floor";

const SoldPage = () => {
  return (
    <>
      <DashboardHeader />
      <Container className="pt-2 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h2>Property Details</h2>
        {/* <img src={homeImage} className="rounded my-3" alt="Home" /> */}
        <Row className="gx-4 dashboard-cards align-items-center">
          <img src={homeImage} className="rounded my-3" alt="Home" />
        </Row>
        <div
          className="d-flex gap-2"
          style={{ color: "#7D7F88", border: "none", outline: "none" }}
        >
          <button
            type="button"
            // className="btn btn-secondary"
            style={{ color: "#7D7F88", border: "none", outline: "none" }}
          >
            Under Constructions
          </button>
          <button
            type="button"
            // className="btn btn-secondary"
            style={{ color: "#7D7F88", border: "none", outline: "none" }}
          >
            Possession in Dec,2023
          </button>
        </div>
        <br></br>
        <Danelions />
        <Anlytics />
        <Floor />
        <Amenities />
        <Col>
          <Location />
          <Row className="gx-4 dashboard-cards align-items-center">
            <img src={map} className="rounded my-3" alt="Home" />
          </Row>
        </Col>
        <Col>
          <Payment />
        </Col>
        <Col>
          <h2 style={{ fontFamily: "Bahnschrift" }}> View offical brochure</h2>
          <Row className="gx-4 dashboard-cards align-items-center">
            <img src={brochure} className="rounded my-3" alt="Home" />
          </Row>
        </Col>
        <Col>
          <h2 style={{ fontFamily: "Bahnschrift" }}> Terms & Conditions</h2>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <div className="p-4 d-flex justify-content-between">
              <p style={{ color: "#7D7F88", fontFamily: "Bahnschrift" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum <br></br>
                <br></br>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum <br></br>
                <br></br>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum<br></br>
                <br></br> Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>
            </div>
          </Container>
        </Col>
      </Container>
      <Footer />
    </>
  );
};

export default SoldPage;
