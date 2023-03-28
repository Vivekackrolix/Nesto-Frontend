import { Container, Button, Row, Col } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

import VisitDetailItem from "./VisitDetailItem";
import Header from "../../../header/Header";
// import DashboardTabs from "../../Builderprofile/dashboard-tabs/DashboardTabs";
const VisitDetails = () => {
  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getVisit = async () => {
      const response = await axios.get(
        // "http://13.233.149.97:3000/api/v1/visit/getVisitAnalytics?builderId=641069056532f2569479fc9d",
        "http://localhost:3000/api/v1/visit/getVisitAnalytics?builderId=641069056532f2569479fc9d",

        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;

      console.log(response.data);
      setData(response.data.data);
    };

    getVisit();
  }, []);
  // const tabKey2 = ["All Visits", "Promoted Visits"];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const tabelData = arr.map((itm) => (
    <VisitDetailItem className={"mb-3 py-3 border rounded"} />
  ));
  return (
    <>
      <Header />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        {/* <DashboardTabs
          tabsKey={tabKey2}
          activeState={tabKey2[0]}
        ></DashboardTabs> */}
        <h1> Visit Details</h1>
        <div
          className="w-100 btn-group rounded-pill col-2  justify-content-center  py-2 mx-3 row"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="w-50 rounded-pill col-2 btn btn-primary"
          >
            All Visits
          </button>

          <Button
            variant="secondary"
            type="button"
            className=" w-50 rounded-pill col-2 "
            as={Link}
            to="/builder/home-dashboard/promoted"
          >
            Promoted Visits
          </Button>
        </div>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div className="p-4 d-flex justify-content-around">
            <div className="text-center d-flex flex-column">
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                {data.pendingVisit}
              </span>
              <span style={{ opacity: 0.5 }}>Pending</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                {data.completedVisit}
              </span>
              <span style={{ opacity: 0.5 }}>Completed</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                {data.followUpVisit}
              </span>
              <span style={{ opacity: 0.5 }}>Follow Up</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                {data.negotiationVisit}
              </span>
              <span style={{ opacity: 0.5 }}>Negotiation</span>
            </div>
            <div className="text-center d-flex flex-column">
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                {data.boughtVisit}
              </span>
              <span style={{ opacity: 0.5 }}>Brought</span>
            </div>
          </div>
        </Container>

        <Container className="dashboard__wrapper__filter mt-5">
          <Row>
            <Col>Visit ID</Col>
            <Col>Broker Name</Col>
            <Col>Visit Date</Col>
            <Col>Status </Col>
            <Col>Client Name</Col>
            <Col>Rating & Reviews</Col>
          </Row>
          <br />
          {tabelData}
        </Container>
        <div className="d-flex justify-content-center mt-5">
          <Button
            variant="primary"
            size="sm"
            className="w-70 rounded-pill border-0 bg-color-primary py-2 my-5 mx-5 col-5 "
            //   onClick={onContinueHandler}
          >
            Download Pdf
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default VisitDetails;
