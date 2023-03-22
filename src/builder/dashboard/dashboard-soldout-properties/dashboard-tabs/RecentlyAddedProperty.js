import { Button, Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../../Images/propertyadded.png";
import build from "../../../Images/build.png";
// import subs from "../../Images/subs.png";

import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { RiVipCrownFill } from "react-icons/ri";
import DashboardHeader from "../../header/DashboardHeader";
import SearchFilterBox from "../../search-filter/SearchFilter";
import Footer from "../../Footer/Footer";

const RecentlyAddedProperty = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Col
        md={3}
        className="card mb-4 shadow-sm rounded-4 p-0 border-0"
        style={{ width: "21.75rem" }}
      >
        <Card.Img variant="top" src={propertyImage} />
        <Card.Body>
          {/* <Card.Title></Card.Title> */}

          <Card.Text>
            <Row>
              <Col md={10} sm={10}>
                <div>
                  {" "}
                  <Link
                    style={{
                      color: "#252B5C",
                      fontWeight: "bold",
                      fontSize: "1.4em",
                      textDecoration: "none",
                    }}
                    to="/builder/home-dashboard/description"
                  >
                    Sky Danelions Apartment
                  </Link>
                </div>
                <p style={{ opacity: 0.5 }}>
                  Luxury Apartment in Sector-29,Gurugram
                </p>
              </Col>
              <Col md={2} sm={2}>
                <RiVipCrownFill
                  style={{
                    padding: "5px",
                    borderRadius: "50%",
                    background: "#ffd600",
                    color: "#fff",
                    width: "1.85em",
                    height: "1.85em",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>2BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>3BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>4BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>5BHK</p>
              </Col>
            </Row>
            {/* <Row>
              {/* <Col className="d-flex justify-content-between">
                <p>Sky Danelions Apartment</p>
                <img src={subs} alt="" />
              </Col>
              <Row style={{ opacity: 0.5 }}>
                Luxury Apartment in Sector-29,Gurugram
              </Row> */}

            {/* <br></br>
              <br></br>

              <Row>
                <img src={build} alt="" />
              </Row> 
              <br></br>
            </Row> */}

            <Row className="align-items-center">
              <Col
                md={5}
                style={{
                  color: "#000000",
                  fontSize: "1.35em",
                  fontWeight: "bold",
                }}
              >
                Rs.3.94-6.01 Cr
              </Col>
              <Col md={7} style={{ color: "#7D7F88", fontSize: "0.8em" }}>
                Book now & get 5% discount
              </Col>
            </Row>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <Button
                variant="transparent"
                type="button"
                className="rounded-pill px-4 py-2 border border-primary"
                style={{ color: "#278FD9", fontSize: "14px" }}
                as={Link}
                to="/builder/home-dashboard/visit"
              >
                50 Visits
              </Button>
              <Button
                variant="transparent"
                type="button"
                className="primary rounded-pill px-4 py-2 border border-primary"
                as={Link}
                to="/builder/home-dashboard/propertyedit"
              >
                <BsPencilFill
                  style={{
                    width: "0.9em",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "2px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    marginBottom: "5px",
                  }}
                />
                Edit
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Col>
    );
  });
  return (
    <>
      <DashboardHeader />
      <Container className="mt-5">
        <SearchFilterBox />

        <div className="row justify-content-between">
          <h3 className="col-4 heading">
            Recently Added
          </h3>
          {/* <i
            className="col-1"
            style={{
              color: "#FC5C67",
              fontFamily: "Bahnschrift",
              textDecorationLine: "underline",
            }}
          >
            View all
          </i> */}
        </div>
        {/* <div className="mt-4">{propertyListing}</div> */}
        <div className="mt-2 mb-5 row row-cols-2 justify-content-around">
          {propertyListing}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default RecentlyAddedProperty;
