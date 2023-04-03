import { Col, Container, Row } from "react-bootstrap";

import SearchFilterBox from "../../../search-filter/SearchFilter";
import claim from "../../../../Images/claim.png";
import { GrDocumentPdf } from "react-icons/gr";
import Footer from "../../../Footer/Footer";
import Header from "../../../../header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useState } from "react";
import Payment from "./Payment";

const PropertyClaim = () => {
  debugger;
  const [data, setData] = useState([]);
  useEffect(() => {
    const getClaim = async () => {
      const response = await axios.get(
        "http://65.1.3.134:3000/api/v1/claim/getAllClaim?builderId=641069056532f2569479fc9d&claimType=property&claimStatus=pending&boughtPropertyId=64214754483c737b5714ccb3",

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjMzA5MDJjZGYzNjczYTI5YWU3MWQiLCJpYXQiOjE2NzkzOTM1NDksImV4cCI6MTY4NzE2OTU0OX0.doSWScAsJZyCJk62uM7rBbsS8ipkpLZ-FjuYrfYJmu8",
          },
        }
      );
      debugger;
      console.log(response.data.data);
      setData(response.data.data);
    };

    getClaim();
  }, []);

  const [showPayment, setShowPayment] = useState(false);
  const onPayClick = () => {
    setShowPayment((prev) => !prev);
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
          <div className="d-flex col justify-content-between">
            <div className="d-flex row justify-content-between">
              <h5 style={{ color: "#8B9199" }}>Property Name</h5>
              <h3>Sky Dandelions Flat</h3>
            </div>
            <h6 className="d-flex justify-content-end">
              <img src={claim} alt="claim" />
            </h6>
          </div>

          <br />

          <div className="d-flex justify-content-between">
            <span>
              <h5 style={{ color: "#8B9199" }}>Visit ID</h5>
              <h5>12324443</h5>
            </span>
            <span>
              <h5 style={{ color: "#8B9199" }}>Visit Date</h5>
              <h5>20 Nov 2022</h5>
            </span>
            <span>
              <h5 style={{ color: "#8B9199" }}>Client Name</h5>
              <h5>Lorem Ipsum</h5>
            </span>
          </div>

          <br />

          <div className="d-flex justify-content-between">
            <span>
              <h5 style={{ color: "#8B9199" }}>Unit Type</h5>
              <h5>Lorem Ipsum</h5>
            </span>

            <span>
              <h5 style={{ color: "#8B9199" }}>Unit Number</h5>
              <h5>1233212432</h5>
            </span>

            <span>
              <h5 style={{ color: "#8B9199" }}>Selling Price</h5>
              <h5>Rs.3.94 L</h5>
            </span>
          </div>

          <br />

          <div className="d-flex justify-content-between">
            <span>
              <h5 style={{ color: "#8B9199" }}>Broker ID</h5>
              <h5>Lorem Ipsum</h5>
            </span>

            <span>
              <h5 style={{ color: "#8B9199" }}>Broker Name</h5>
              <h5>Lorem Ipsum</h5>
            </span>

            <span>
              <h5 style={{ color: "#8B9199" }}>Selling Date</h5>
              <h5>10/12/2022</h5>
            </span>
          </div>

          <br />
        </Container>
        <br />
        <br />
        <h3>Brokerage plan</h3>

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
            <span>
              <h2>Rs. 830</h2>
              <h5>*Brokerage Percentage -5%</h5>
            </span>
            <span>
              <h6 style={{ color: "#8B9199" }}>Builder Form</h6>
              <h1>
                <GrDocumentPdf />
              </h1>
            </span>
          </div>
          <br />
        </Container>
        <br />
        <br />

        <h3>Milestone</h3>

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

          <div>
            <div className=" d-flex justify-content-between">
              <span>
                <h5 style={{ color: "#8B9199" }}>Brokerage %</h5>
                <h5>12324443</h5>
              </span>

              <span>
                <h5 style={{ color: "#8B9199" }}>Brokerage Amount</h5>
                <h5>Rs. 3.94 L</h5>
              </span>

              <span>
                <h5 style={{ color: "#8B9199" }}>Claimed ID</h5>
                <h5>22132322</h5>
              </span>
            </div>
            <br />
          </div>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <div className="d-flex justify-content-between">
              <h5>Invoice ID</h5>

              <h5>Invoice Amount</h5>

              <h5>Status</h5>

              <h5>View Invoice</h5>

              <h5>Pay</h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>2111321321</h5>

              <h5>Rs. 3.94</h5>

              <button
                type="button"
                className=" rounded-pill btn btn-outline-danger"
              >
                Pending
              </button>

              <h3>
                <GrDocumentPdf />
              </h3>

              <Payment show={showPayment} onHide={onPayClick} />
              <h5 style={{ color: "#278FD9" }} onClick={onPayClick}>
                Pay Now
              </h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>2111321321</h5>

              <h5>Rs. 3.94</h5>

              <button
                type="button"
                className=" rounded-pill btn btn-outline-success"
              >
                Settled
              </button>

              <h3>
                <GrDocumentPdf />
              </h3>

              <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
            </div>
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

          <div>
            <div className=" d-flex justify-content-between">
              <span>
                <h5 style={{ color: "#8B9199" }}>Brokerage %</h5>
                <h5>12324443</h5>
              </span>

              <span>
                <h5 style={{ color: "#8B9199" }}>Brokerage Amount</h5>
                <h5>Rs. 3.94 L</h5>
              </span>

              <span>
                <h5 style={{ color: "#8B9199" }}>Claimed ID</h5>
                <h5>22132322</h5>
              </span>
            </div>
            <br />
          </div>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <div className="d-flex justify-content-between">
              <h5>Invoice ID</h5>

              <h5>Invoice Amount</h5>

              <h5>Status</h5>

              <h5>View Invoice</h5>

              <h5>Pay</h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>2111321321</h5>

              <h5>Rs. 3.94</h5>

              <button
                type="button"
                className=" rounded-pill btn btn-outline-danger"
              >
                Pending
              </button>

              <h3>
                <GrDocumentPdf />
              </h3>
              <Payment show={showPayment} onHide={onPayClick} />
              <h5 style={{ color: "#278FD9" }} onClick={onPayClick}>
                Pay Now
              </h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>2111321321</h5>

              <h5>Rs. 3.94</h5>

              <button
                type="button"
                className=" rounded-pill btn btn-outline-success"
              >
                Settled
              </button>

              <h3>
                <GrDocumentPdf />
              </h3>

              <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
            </div>
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

          <div>
            <div className=" d-flex justify-content-between">
              <span>
                <h5 style={{ color: "#8B9199" }}>Brokerage %</h5>
                <h5>12324443</h5>
              </span>

              <span>
                <h5 style={{ color: "#8B9199" }}>Brokerage Amount</h5>
                <h5>Rs. 3.94 L</h5>
              </span>

              <span>
                <h5 style={{ color: "#8B9199" }}>Claimed ID</h5>
                <h5>22132322</h5>
              </span>
            </div>
            <br />
          </div>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <div className="d-flex justify-content-between">
              <h5>Invoice ID</h5>

              <h5>Invoice Amount</h5>

              <h5>Status</h5>

              <h5>View Invoice</h5>

              <h5>Pay</h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>2111321321</h5>

              <h5>Rs. 3.94</h5>

              <button
                type="button"
                className=" rounded-pill btn btn-outline-danger"
              >
                Pending
              </button>

              <h3>
                <GrDocumentPdf />
              </h3>

              <Payment show={showPayment} onHide={onPayClick} />
              <h5 style={{ color: "#278FD9" }} onClick={onPayClick}>
                Pay Now
              </h5>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>2111321321</h5>

              <h5>Rs. 3.94</h5>

              <button
                type="button"
                className=" rounded-pill btn btn-outline-success"
              >
                Settled
              </button>

              <h3>
                <GrDocumentPdf />
              </h3>

              <h5 style={{ color: "#278FD9" }}>Pay Now</h5>
            </div>
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
