import { Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../../Images/propertyadded.png";
import subs from "../../../Images/subs.png";
import build from "../../../Images/build.png";
import edit from "../../../Images/editbutton.png";
import { RiVipCrownFill } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";

const PastPropertyList = ({ data }) => {
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
                <div
                  style={{
                    color: "#000000",
                    fontSize: "1.35em",
                    fontWeight: "bold",
                  }}
                >
                  Sky Danelions Apartment
                </div>
                <p style={{ opacity: 0.5, fontSize: "0.7em" }}>
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

            <Row className="align-items-center">
              <Col
                md={5}
                style={{
                  color: "#000000",
                  fontSize: "1.25em",
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
              <button
                type="button"
                className="btn btn-transparent rounded-pill px-4 py-2 border border-primary"
                style={{ color: "#278FD9", fontSize: "14px" }}
              >
                50 Visits
              </button>
              <button
                type="button"
                className="btn btn-transparent primary rounded-pill px-4 py-2 border border-primary"
                style={{ color: "#278FD9", fontSize: "14px" }}
              >
                {/* <BsPencilFill
                  style={{
                    width: "0.9em",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "2px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    marginBottom: "5px",
                  }}
                /> */}
                Edit
              </button>
            </div>
          </Card.Text>
        </Card.Body>
      </Col>
    );
  });
  return (
    <Container className="mt-5">
      <div
        className="mt-2 mb-5 row row-cols-2 justify-content-around"
        style={{ fontFamily: "Bahnschrift" }}
      >
        {propertyListing}
      </div>
    </Container>
  );
};
export default PastPropertyList;
