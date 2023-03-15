import { Col, Container, Row } from "react-bootstrap";

import SearchFilterBox from "../../../search-filter/SearchFilter";
import claim from "../../../../Images/claim.png";
import { GrDocumentPdf } from "react-icons/gr";
import Footer from "../../../Footer/Footer";
import Header from "../../../../header/Header";
// import Rating from "./Rating";
import { useState } from "react";
import Payment from "./Payment";
// import { RiShowersFill } from "react-icons/ri";

const PropertyClaim = () => {
  const [show, setShow] = useState({
    payment: false,
    submit: false,
  });
  console.log(show);
  const onLocationClick = () => {
    setShow((prev) => ({ ...prev, payment: true }));
  };
  const onUpdate = () => {
    debugger;
    setShow((prev) => ({ ...prev, payment: false }));
  };

  return (
    <>
      <Header />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <div className="d-flex justify-content-between">
          <h3>Property Claim</h3>
          <h5 style={{ color: "#8B9199" }}>Eligible Claim ID:1253325271</h5>
        </div>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{
            border: "2.94206px solid #E3E3E7",
            boxSizing: "border-box",
            boxShadow: "0px 6.52464px 36.8739px rgba(0, 0, 0, 0.07)",
          }}
        >
          <br />
          <div className="d-flex justify-content-between">
            <Row>
              <h5 style={{ color: "#8B9199" }}>Property Name</h5>
              <h3>Sky Dandelions Flat</h3>
            </Row>

            <h6>
              <img src={claim} alt="" />
            </h6>
          </div>
          <br />

          <Row className="d-flex justify-content-between">
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Visit ID</h5>
                <h5>12324443</h5>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Visit ID</h5>
                <h5>12324443</h5>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Client Name</h5>
                <h5>Lorem Ipsum</h5>
              </Row>
            </Col>
          </Row>

          <br />

          <Row className="d-flex justify-content-between">
            {" "}
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Unit Type</h5>
                <h5>Lorem Ipsum</h5>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Unit Number</h5>
                <h5>1233212432</h5>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Selling Price</h5>
                <h5>Rs.3.94 L</h5>
              </Row>
            </Col>
          </Row>

          <br />

          <Row className="d-flex justify-content-between">
            {" "}
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Broker ID</h5>
                <h5>Lorem Ipsum</h5>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Broker Name</h5>
                <h5>Lorem Ipsum</h5>
              </Row>
            </Col>
            <Col>
              <Row>
                <h5 style={{ color: "#8B9199" }}>Selling Date</h5>
                <h5>10/12/2022</h5>
              </Row>
            </Col>
          </Row>

          <br />
        </Container>
        <br />
        <br />
        <h3>Brokerage plan</h3>

        <br />

        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{
            border: "2.94206px solid #E3E3E7",
            boxSizing: "border-box",
            boxShadow: "0px 6.52464px 36.8739px rgba(0, 0, 0, 0.07)",
          }}
        >
          <br />
          <div className="d-flex justify-content-between">
            <Row>
              <h2>Rs. 830</h2>
              <h5>*Brokerage Percentage -5%</h5>
            </Row>
            <Row>
              <h6 style={{ color: "#8B9199" }}>Builder Form</h6>
              <h1>
                {" "}
                <GrDocumentPdf />
              </h1>
            </Row>
          </div>
          <br />
        </Container>
        <br />
        <br />

        <h3>Milestone</h3>

        <br />
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{
            border: "2.94206px solid #E3E3E7",
            boxSizing: "border-box",
            boxShadow: "0px 6.52464px 36.8739px rgba(0, 0, 0, 0.07)",
          }}
        >
          <br />
          <div className="d-flex justify-content-between">
            <h3>M1 - 10%</h3>
            <h5 style={{ color: "#7D7F88" }}>12 Jan 2023</h5>
          </div>

          <br />
          <br />
          <div>
            <div className="d-flex justify-content-between">
              <Row>
                <h5 style={{ color: "#8B9199" }}>Brokerage %</h5>
                <h5>12324443</h5>
              </Row>

              <Row>
                <h5 style={{ color: "#8B9199" }}>Brokerage Amount</h5>
                <h5>12324443</h5>
              </Row>

              <Row>
                <h5 style={{ color: "#8B9199" }}>Claimed ID</h5>
                <h5>22132322</h5>
              </Row>
            </div>
            <br />
          </div>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <Row>
              <Col>
                <h5>Invoice ID</h5>
              </Col>
              <Col>
                <h5>Invoice Amount</h5>
              </Col>
              <Col>
                <h5>Status</h5>
              </Col>
              <Col>
                <h5>View Invoice</h5>
              </Col>
              <Col>
                <h5>Pay</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h5>2111321321</h5>
              </Col>
              <Col>
                <h5>Rs. 3.94</h5>
              </Col>
              <Col>
                <button type="button" className=" rounded-pill btn btn-danger">
                  Pending
                </button>
              </Col>
              <Col>
                <h3>
                  <GrDocumentPdf />
                </h3>
              </Col>
              <Col>
                <h5 style={{ color: "#278FD9" }} onClick={onLocationClick}>
                  Pay Now
                  {show.payment && (
                    <Payment show={show.payment} onChange={onUpdate} />
                  )}
                </h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h5>2111321321</h5>
              </Col>
              <Col>
                <h5>Rs. 3.94</h5>
              </Col>
              <Col>
                <button type="button" className=" rounded-pill btn btn-success">
                  Settled
                </button>
              </Col>
              <Col>
                <h3>
                  {" "}
                  <GrDocumentPdf />
                </h3>
              </Col>
              <Col>
                <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
              </Col>
            </Row>
          </Container>
          <br />
        </Container>
        <br />
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{
            border: "2.94206px solid #E3E3E7",
            boxSizing: "border-box",
            boxShadow: "0px 6.52464px 36.8739px rgba(0, 0, 0, 0.07)",
          }}
        >
          <br />
          <div className="d-flex justify-content-between">
            <h3>M2 - 10%</h3>
            <h5 style={{ color: "#7D7F88" }}>12 Jan 2023</h5>
          </div>

          <br />
          <br />
          <div>
            <div className="d-flex justify-content-between">
              <Row>
                <h5 style={{ color: "#8B9199" }}>Brokerage %</h5>
                <h5>12324443</h5>
              </Row>

              <Row>
                <h5 style={{ color: "#8B9199" }}>Brokerage Amount</h5>
                <h5>12324443</h5>
              </Row>

              <Row>
                <h5 style={{ color: "#8B9199" }}>Claimed ID</h5>
                <h5>22132322</h5>
              </Row>
            </div>
            <br />
          </div>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <Row>
              <Col>
                <h5>Invoice ID</h5>
              </Col>
              <Col>
                <h5>Invoice Amount</h5>
              </Col>
              <Col>
                <h5>Status</h5>
              </Col>
              <Col>
                <h5>View Invoice</h5>
              </Col>
              <Col>
                <h5>Pay</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h5>2111321321</h5>
              </Col>
              <Col>
                <h5>Rs. 3.94</h5>
              </Col>
              <Col>
                <button type="button" className=" rounded-pill btn btn-danger">
                  Pending
                </button>
              </Col>
              <Col>
                <h3>
                  {" "}
                  <GrDocumentPdf />
                </h3>
              </Col>
              <Col>
                <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h5>2111321321</h5>
              </Col>
              <Col>
                <h5>Rs. 3.94</h5>
              </Col>
              <Col>
                <button type="button" className=" rounded-pill btn btn-success">
                  Settled
                </button>
              </Col>
              <Col>
                <h3>
                  {" "}
                  <GrDocumentPdf />
                </h3>
              </Col>
              <Col>
                <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
              </Col>
            </Row>
          </Container>
          <br />
        </Container>
        <br />
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{
            border: "2.94206px solid #E3E3E7",
            boxSizing: "border-box",
            boxShadow: "0px 6.52464px 36.8739px rgba(0, 0, 0, 0.07)",
          }}
        >
          <br />
          <div className="d-flex justify-content-between">
            <h3>M3 - 10%</h3>
            <h5 style={{ color: "#7D7F88" }}>12 Jan 2023</h5>
          </div>

          <br />
          <br />
          <div>
            <div className="d-flex justify-content-between">
              <Row>
                <h5 style={{ color: "#8B9199" }}>Brokerage %</h5>
                <h5>12324443</h5>
              </Row>

              <Row>
                <h5 style={{ color: "#8B9199" }}>Brokerage Amount</h5>
                <h5>12324443</h5>
              </Row>

              <Row>
                <h5 style={{ color: "#8B9199" }}>Claimed ID</h5>
                <h5>22132322</h5>
              </Row>
            </div>
            <br />
          </div>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <Row>
              <Col>
                <h5>Invoice ID</h5>
              </Col>
              <Col>
                <h5>Invoice Amount</h5>
              </Col>
              <Col>
                <h5>Status</h5>
              </Col>
              <Col>
                <h5>View Invoice</h5>
              </Col>
              <Col>
                <h5>Pay</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h5>2111321321</h5>
              </Col>
              <Col>
                <h5>Rs. 3.94</h5>
              </Col>
              <Col>
                <button type="button" className=" rounded-pill btn btn-danger">
                  Pending
                </button>
              </Col>
              <Col>
                <h3>
                  {" "}
                  <GrDocumentPdf />
                </h3>
              </Col>
              <Col>
                <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h5>2111321321</h5>
              </Col>
              <Col>
                <h5>Rs. 3.94</h5>
              </Col>
              <Col>
                <button type="button" className=" rounded-pill btn btn-success">
                  Settled
                </button>
              </Col>
              <Col>
                <h3>
                  {" "}
                  <GrDocumentPdf />
                </h3>
              </Col>
              <Col>
                <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
              </Col>
            </Row>
          </Container>
          <br />
        </Container>
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
};
export default PropertyClaim;
