import { Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../Images/propertyimage.png";
import { Link } from "react-router-dom";
import "./SoldOut.css";

const SoldOut = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Col md={3}
        className="card mb-4 shadow-sm rounded-4 col-md-3 p-0 border-0"
        style={{
          width: "21.75rem"
        }}
      >
        <Card.Img className="w-100" variant="top" src={propertyImage} />
        <Card.Body>
          {/* <Card.Title></Card.Title> */}
          
            <div>
              <div>
                {" "}
                <Link
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "1.4em",
                    textDecoration: "none",
                  }}
                  to="/builder/home-dashboard/description"
                >
                  Sky Danelions Apartment
                </Link>
              </div>
              <div style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
                Farmhouse in Sector 63 Gurgaon
              </div>
            </div>
            <Row className="p-2">
              <Col>
                <Row style={{ opacity: 0.5 }}>Unit Type</Row>
                <Row>2BHK</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Unit Number</Row>
                <Row>123456789</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Selling Price</Row>
                <Row>₹ 3.94 Cr</Row>
              </Col>
            </Row>
            <Row className="p-2">
              <Col>
                <Row style={{ opacity: 0.5 }}>Client Name</Row>
                <Row>Lorem Ipsum</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Broker ID</Row>
                <Row>1234456</Row>
              </Col>
              <Col>
                <Row style={{ opacity: 0.5 }}>Selling Date</Row>
                <Row>10/11/22</Row>
              </Col>
            </Row>
          
        </Card.Body>
      </Col>
    );
  });
  return (
    <Container className="mt-5">
      <div className="row justify-content-between">
        <h3 className="col-4" style={{ fontFamily: "Bahnschrift" }}>
          Recently Sold Out Property
        </h3>
        <i
          className="col-1"
          style={{
            color: "#FC5C67",
            fontFamily: "Bahnschrift",
            textDecorationLine: "underline",
          }}
        >
          View all
        </i>
      </div>
      {/* <div className="mt-4">{propertyListing}</div> */}
      <div className="mt-2 row justify-content-around">
        {propertyListing}
      </div>
    </Container>
  );
};

export default SoldOut;
