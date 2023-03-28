import { Button, Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../Images/propertyimage.png";
import { Link } from "react-router-dom";
import "./SoldOut.css";

const SoldOut = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Col
        md={3} sm={12}
        className="card mb-4 shadow-sm rounded-4 col-md-3 p-0 border-0 w-100"
        style={{
          maxWidth: "21.5rem",
        }}
      >
        <Card.Img className="w-100" variant="top" src={propertyImage} />
        <Card.Body>
          {/* <Card.Title></Card.Title> */}

          <div className="pb-2">
            <div>
              {" "}
              <Link className="sold-heading"
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
        <h3 className="col-8 heading">
          Recently Sold Out Property
        </h3>
        <a
          className="col-4 text-danger text-end w-auto"
          as={Link}
          href="/builder/home-dashboard/recentlysold"
        >
          View All
        </a>
      </div>
      {/* <div className="mt-4">{propertyListing}</div> */}
      <div className="mt-2 row w-100 justify-content-between ms-0">{propertyListing}</div>
    </Container>
  );
};

export default SoldOut;
