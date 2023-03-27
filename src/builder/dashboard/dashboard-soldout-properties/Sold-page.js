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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SoldPage = () => {
  const params = useParams();
  const [property, setProperty] = useState({});
  // console.log(params.propertyId);
  // const recentlySoldData = useSelector(
  //   (state) => state.soldPropertyDetail.properties
  // );
  // const propertyData = recentlySoldData.filter(
  //   (itm) => itm._id === params.propertyId
  // );
  // console.log(recentlySoldData);
  // console.log(propertyData);
  useEffect(() => {
    const getPropertyById = async () => {
      debugger;
      const response = await axios.get(
        `http://13.233.149.97:3000/api/v1/boughtProperty/getBoughtPropertyById?id=${params.propertyId}`,
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      console.log(response.data.data);
      setProperty(response.data.data[0]);
    };

    getPropertyById();
  }, []);
  return (
    <>
      <DashboardHeader />
      <Container className="pt-2 pb-4 dashboard__wrapper">
        <SearchFilterBox />

        {/* <img src={homeImage} className="rounded my-3" alt="Home" /> */}
        <Row className="gx-4 dashboard-cards align-items-center">
          <Col md={12}>
            <h3>Property Details</h3>
            <img src={homeImage} className="rounded w-100" alt="Home" />
          </Col>
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
        <Danelions data={property} />
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
