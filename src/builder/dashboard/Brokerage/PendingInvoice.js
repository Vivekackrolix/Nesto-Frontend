import { Col, Container, Row } from "react-bootstrap";
import { GrDocumentPdf } from "react-icons/gr";
import brocker from "../../Images/brocker.png";

const PendingInvoice = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-3 p-3">
        <div className="d-flex  ">
          {/* <div className="d-flex flex-grow-1"> */}
          <img src={brocker} alt="" />
          {/* <div className="p-2 rounded"></div> */}{" "}
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
          <div className="ms-auto p-2" style={{ color: "#8B9199" }}>
            12/12/2022
          </div>
          {/*           
              <div className="d-flex">
                <h2>1</h2>
                <h2>1</h2>
              </div> */}
        </div>
        {/* </div> */}

        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
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
                class=" rounded-pill btn btn-outline-danger"
              >
                Pending
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
              <button type="button" class="rounded-pill btn btn-outline-danger">
                Pending
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
    <Container className="mt-2">
      <div className="mt-4 row row-cols-2 justify-content-center">
        {propertyListing}
      </div>
    </Container>
  );
};

export default PendingInvoice;
