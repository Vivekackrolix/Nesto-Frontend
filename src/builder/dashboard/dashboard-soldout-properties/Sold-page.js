import DashboardHeader from "../header/DashboardHeader";
import { Col, Container, Row } from "react-bootstrap";
import SearchFilterBox from "../search-filter/SearchFilter";
import homeImage from "../../Images/Home.png";
import map from "../../Images/Map.png";
import brochure from "../../Images/brochure.png";
import Anlytics from "../dashboard-property-analytics/dashboard-property-details/anlytics";
import Location from "../dashboard-property-analytics/dashboard-property-details/Location";
import Amenities from "../dashboard-property-analytics/dashboard-property-details/Amenities";
import Payment from "../dashboard-property-analytics/dashboard-property-details/Payment";
import Danelions from "./Danelions";

const SoldPage = () => {
  return (
    <>
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <img src={homeImage} className="rounded my-3" alt="Home" />
        <Danelions />
        <Anlytics />
        <Amenities />
        <Col>
          <Location />
          <img src={map} className="rounded my-3" alt="Home" />
        </Col>
        <Col>
          <Payment />
        </Col>
        <Col>
          <h2> View offical brochure</h2>
          <img src={brochure} className="rounded my-3" alt="Home" />
        </Col>
        <Col>
          <h2> Terms & Conditions</h2>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <div className="p-4 d-flex justify-content-between">
              <p style={{ color: "#7D7F88" }}>
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
    </>
  );
};

export default SoldPage;
