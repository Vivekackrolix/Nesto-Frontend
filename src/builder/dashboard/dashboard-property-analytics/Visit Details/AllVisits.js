import { Container, Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import VisitDetailItem from "./VisitDetailItem";
// import PromotedVisitItem from "./PromotedVisitItem";
import { getAPI } from "../../../Api/ApiRequest";
import { apiEndpoints } from "../../../Api/ApiEndpoint";

// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import FileSaver from "file-saver";

const AllVisits = () => {
  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getVisit = async () => {
      const response = await axios.get(
        "http://65.1.3.134:3000/api/v1/visit/getVisitAnalytics?builderId=641069056532f2569479fc9d",

        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      // const response = await getAPI(apiEndpoints.getVisitAnalytics);
      // console.log(response.data);

      // debugger;

      console.log(response.data.data);
      setData(response.data.data);
    };

    getVisit();
  }, []);

  // const downloadPDF = (data) => {
  //   const doc = new jsPDF();
  //   const tableColumn = [
  //     "Visit ID",
  //     "Customer Name",
  //     "Date",
  //     "Status",
  //     "Location",
  //     "Notes",
  //   ];
  //   const tableRows = [];
  //   data.forEach((visit) => {
  //     const visitData = [
  //       visit.visitId,
  //       visit.customerName,
  //       visit.visitDate,
  //       visit.visitStatus,
  //       visit.visitLocation,
  //       visit.visitNotes,
  //     ];
  //     tableRows.push(visitData);
  //   });
  //   doc.autoTable({
  //     head: [tableColumn],
  //     body: tableRows,
  //     startY: 20,
  //   });

  //   const date = new Date().toISOString().slice(0, 10);
  //   const filename = `visits_${date}.pdf`;
  //   doc.save(filename);
  // };

  const [data1, setData1] = useState([]); //Later use redux
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const getVisit = async () => {
      debugger;
      const response = await getAPI(apiEndpoints.getAllVisit);
      console.log(response.data);

      setData1(response.data);
      setFilterData(response.data);
    };

    getVisit();
  }, []);

  const onPendingClick = () => {
    const pendingData = data1.filter((itm) => itm.visitStatus === "pending");
    setFilterData(pendingData);
  };

  const onCompletedClick = () => {
    // console.log(e);
    const pendingData = data1.filter((itm) => itm.visitStatus === "completed");
    setFilterData(pendingData);
  };

  const onBoughtClick = () => {
    // console.log(e);
    const pendingData = data1.filter((itm) => itm.visitStatus === "bought");
    setFilterData(pendingData);
  };

  const onFollowupClick = () => {
    // console.log(e);
    const pendingData = data1.filter((itm) => itm.visitStatus === "followup");
    setFilterData(pendingData);
  };

  const onNegotiationClick = () => {
    // console.log(e);
    const pendingData = data1.filter(
      (itm) => itm.visitStatus === "negotiation"
    );
    setFilterData(pendingData);
  };
  const tabelData = filterData.map((itm, index) => (
    <VisitDetailItem itm={itm} className={"mb-3 py-3 border rounded"} />
  ));

  return (
    <>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span
              onClick={onPendingClick}
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
            <span onClick={onCompletedClick} style={{ opacity: 0.5 }}>
              Completed
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              onClick={onFollowupClick}
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
              onClick={onNegotiationClick}
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
              onClick={onBoughtClick}
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              {data.boughtVisit}
            </span>
            <span style={{ opacity: 0.5 }}>Bought</span>
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
      <div className="d-flex justify-content-center mt-2">
        <Button
          variant="primary"
          size="sm"
          className="w-70 rounded-pill border-0 bg-color-primary py-2 mx-5 "
          // onClick={() => downloadPDF(filterData)}
        >
          Download Pdf
        </Button>
      </div>
    </>
  );
};

export default AllVisits;
