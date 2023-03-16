import { Container } from "react-bootstrap";
import "./PropertyAnalytics.css";

const PropertyInvoice = () => {
  return (
    <>
      <h3>Property Invoices</h3>
      <Container
        className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4 "
        style={{ boxShadow: "0px 10.7036px 46.8282px rgba(0, 0, 0, 0.07)" }}
      >
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Invoice
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              ₹ 99 L
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Amount
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10 Days
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Since
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10 Days
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Average <br></br> Payout Time
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertyInvoice;
