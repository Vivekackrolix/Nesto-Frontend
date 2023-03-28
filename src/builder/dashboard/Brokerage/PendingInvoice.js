import { Col, Container, Row } from "react-bootstrap";
import { GrDocumentPdf } from "react-icons/gr";
import brocker from "../../Images/brocker.png";

const PendingInvoice = ({ data }) => {
  const propertyListing = data.map((itm, index) => {
    return (
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-3 p-3">
        <div className="d-flex ">
          {/* <div className="d-flex flex-grow-1"> */}
          <img src={brocker} alt="broker" />
          {/* <div className="p-2 rounded"></div> */}{" "}
          <div className="d-flex flex-column ">
            <div className="d-flex  justify-content-between">
              <span className="mr-auto p-2">
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
              </span>
              <span className="p-2" style={{ color: "#8B9199" }}>
                12/12/2022
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="p-2">
                <p className="" style={{ color: "#8B9199" }}>
                  Broker Name
                </p>
                <p>Lorem Ipsum</p>
              </span>
              <span className="p-2 ">
                <p className="" style={{ color: "#8B9199" }}>
                  Unit Number
                </p>
                <p>32322132</p>
              </span>
              <span className="p-2">
                <p className="" style={{ color: "#8B9199" }}>
                  Claimed Amount
                </p>
                <p>RS.3.94 L</p>
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}

        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-2 ">
          <div className="d-flex justify-content-around">
            <h5>Invoice ID</h5>
            <h5>Invoice Amount</h5>
            <h5>Status</h5>
            <h5>View Invoice</h5>
          </div>
          <hr />
          <div className="d-flex justify-content-around">
            <p style={{ color: "#838383" }}>32245554778</p>
            <p style={{ color: "#838383" }}>Rs.3.94</p>
            <h5>
              <button
                type="button"
                class=" rounded-pill btn btn-outline-danger"
              >
                Pending
              </button>
            </h5>

            <h2>
              <GrDocumentPdf />
            </h2>
          </div>
          <hr />
          <div className="d-flex justify-content-around">
            <p style={{ color: "#838383" }}>32245554778</p>
            <p style={{ color: "#838383" }}>Rs.3.94</p>
            <h5>
              <button
                type="button"
                class=" rounded-pill btn btn-outline-danger"
              >
                Pending
              </button>
            </h5>

            <h2>
              <GrDocumentPdf />
            </h2>
          </div>
        </Container>
      </Container>
    );
  });
  return (
    <Container className="mt-5">
      <div className="mt-2 mb-5 row row-cols-2 justify-content-around">
        {propertyListing}
      </div>
    </Container>
  );
};

export default PendingInvoice;
