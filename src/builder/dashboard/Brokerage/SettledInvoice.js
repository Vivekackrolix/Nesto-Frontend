import { Col, Container, Row } from "react-bootstrap";
import { GrDocumentPdf } from "react-icons/gr";
import brocker from "../../Images/brocker.png";
// import DashboardHeader from "../header/DashboardHeader";

const SettledInvoice = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-3 p-3">
        <div className="d-flex justify-content-between ">
          {/* <Row> */}
          <div className="d-flex flex-grow-1">
            {/* <Col> */}
            <div className="p-2 rounded">
              <img src={brocker} alt="" />
            </div>
            {/* </Col> */}
            {/* <Col> */}
            <div className="p-2">
              <h5>Sky Danelions Apartment</h5>
              <p
                style={{
                  opacity: 0.5,
                  fontFamily: "Bahnschrift",

                  textDecorationLine: "underline",
                }}
              >
                Sector-29,Gurugram
              </p>
            </div>
            {/* </Col> */}
            {/* <Col style={{ color: "#8B9199" }}> */}
            <div className="ms-auto p-2" style={{ color: "#8B9199" }}>
              12/12/2022
              {/* </Col> */}
            </div>
          </div>
          {/* </Row> */}
        </div>

        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-3">
          <Row>
            <Col>Invoice ID</Col>
            <Col>Invoice Amount</Col>
            <Col>Status</Col>
            <Col>View Invoice</Col>
          </Row>
          <hr />
          <Row>
            <Col style={{ color: "#838383" }}>32245554778</Col>
            <Col style={{ color: "#838383" }}>Rs.3.94</Col>
            <Col>
              <button
                type="button"
                class=" rounded-pill btn btn-outline-success"
              >
                Settled
              </button>
            </Col>
            <Col>
              <h3>
                <GrDocumentPdf />
              </h3>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col style={{ color: "#838383" }}>32245554778</Col>
            <Col style={{ color: "#838383" }}>Rs.3.94</Col>
            <Col>
              <button
                type="button"
                class="rounded-pill btn btn-outline-success"
              >
                Settled
              </button>
            </Col>
            <Col>
              <h3>
                <GrDocumentPdf />
              </h3>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  });
  return (
    <Container className="mt-2 gap-2">
      <div className="mt-4 row row-cols-2 justify-content-center">
        {propertyListing}
      </div>
    </Container>
  );
};

export default SettledInvoice;
