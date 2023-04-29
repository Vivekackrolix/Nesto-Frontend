import DashboardHeader from "../header/DashboardHeader";
import { Col, Container, Row } from "react-bootstrap";
import SearchFilterBox from "../search-filter/SearchFilter";
import homeImage from "../../Images/homeimage.png";
import map from "../../Images/Map.png";
import Anlytics from "../dashboard-property-analytics/dashboard-property-details/anlytics";
import Location from "../dashboard-property-analytics/dashboard-property-details/Location";
import Amenities from "../dashboard-property-analytics/dashboard-property-details/Amenities";
import Payment from "../dashboard-property-analytics/dashboard-property-details/Payment";
import Danelions from "./Danelions";
import Footer from "../Footer/Footer";
import Floor from "../dashboard-property-analytics/dashboard-property-details/Floor";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SoldPage = () => {
  const params = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    const getPropertyById = async () => {
      const response = await axios.get(
        // `https://apis.nestohub.in/api/v1/property/getPropertyById?id=${params.propertyId}`,
        `http://nestobackend-env.eba-fk3zufmz.ap-south-1.elasticbeanstalk.com/api/v1/property/getPropertyById?id=${params.propertyId}`,
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );

      setProperty(response.data.data[0]);
    };

    getPropertyById();
  }, []);

  return (
    <>
      <DashboardHeader />
      <Container className="pt-2 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <Row className="gx-4 dashboard-cards align-items-center">
          <Col md={12}>
            <h3 className="m-0 heading">Property Details</h3>
            <img src={homeImage} className="rounded w-100 my-3" alt="Home" />
          </Col>
        </Row>
        <div
          className="d-flex gap-2 mb-4"
          style={{ color: "#7D7F88", border: "none", outline: "none" }}
        >
          <span className="prop-tag me-2">{property?.constructionStatus}</span>
          <span className="prop-tag">{property?.possessionDate}</span>
        </div>
        <br></br>
        <Danelions data={property} />
        <Anlytics data={property} />
        <Floor data={property} />
        <Amenities data={property} />
        <Row>
          <Col md={12}>
            <Location data={property} />
            <Row className="gx-4 dashboard-cards align-items-center">
              {/* <img
                src={map}
                className="rounded my-3"
                alt="Home"
              /> */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.621621626714!2d${property?.longitude}!3d${property?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd08c16bad3b%3A0x26668a270e9365b7!2sKashmere%20Gate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1682425730846!5m2!1sen!2sin`}
                allowfullscreen=""
                title="Unique Title"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  width: "100%",
                  height: "300px",
                  marginTop: "30px",
                  borderRadius: "14px",
                }}
              ></iframe>
            </Row>
          </Col>

          <Col md={12}>
            <Payment data={property} />
          </Col>
          <Col md={12}>
            <h3 className="heading"> View offical brochure</h3>
            <Row className="gx-4 dashboard-cards align-items-center">
              <img
                src={property?.brochureUrl}
                sizes="140"
                className="rounded my-3"
                alt="Home"
              />
            </Row>
          </Col>
          <Col md={12}>
            <h3 className="heading"> Terms & Conditions</h3>
            <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
              <div className="p-4 d-flex justify-content-between">
                <p style={{ color: "#7D7F88", fontFamily: "Bahnschrift" }}>
                  {property?.termAndCondition}
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SoldPage;
