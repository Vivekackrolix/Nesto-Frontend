// import { useState } from "react";
import { Container } from "react-bootstrap";
import { GrDocumentPdf } from "react-icons/gr";
import brocker from "../../Images/brocker.png";
import { useEffect, useState } from "react";
import { apiEndpoints } from "../../Api/ApiEndpoint";
import { getAPI } from "../../Api/ApiRequest";
const PendingInvoice = () => {
  // debugger;
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPending = async () => {
      debugger;
      const response = await getAPI(apiEndpoints.getAllInvoiceForBuilder);
      // console.log(response.data.data);
      setData(response.data);
    };
    debugger;

    getPending();
  }, []);

  const propertyListing = data.map((itm, index) => {
    const unitType = itm?.invoices[0]?.claimId?.propertyId?.unitType
      ? itm?.invoices[0]?.claimId?.propertyId?.unitType
      : [];
    return (
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-3 p-3">
        <div className="d-flex ">
          {/* <div className="d-flex flex-grow-1"> */}
          <img src={brocker} alt="broker" />
          {/* <div className="p-2 rounded"></div> */}{" "}
          <div className="d-flex flex-column ">
            <div className="d-flex  justify-content-between">
              <span className="mr-auto p-2">
                <h5>{itm?.invoices[0]?.builderId?.projectName}</h5>
                {/* <h5>{itm.invoices.builderId.companyName}</h5> */}
                <p
                  style={{
                    opacity: 0.5,
                    fontFamily: "Bahnschrift",

                    textDecorationLine: "underline",
                  }}
                >
                  {itm?.invoices[0]?.builderId?.locationOfProperty}
                </p>
              </span>
              <span className="p-2" style={{ color: "#8B9199" }}>
                {itm?.invoices[0]?.claimId?.createdAt}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="p-2">
                <p className="" style={{ color: "#8B9199" }}>
                  Broker Name
                </p>
                <p> {itm?.invoices[0]?.brokerId?.name}</p>
              </span>
              <span className="p-2 ">
                <p className="" style={{ color: "#8B9199" }}>
                  Unit Number
                </p>
                <p>{unitType.map((item) => item)}</p>
              </span>
              <span className="p-2">
                <p className="" style={{ color: "#8B9199" }}>
                  Claimed Amount
                </p>
                <p> {itm?.invoices[0]?.claimId?.brokerageAmount}</p>
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
            <p style={{ color: "#838383" }}>
              {itm?.invoices[0]?._id.slice(-10)}
            </p>
            <p style={{ color: "#838383" }}>
              {itm?.invoices[0]?.invoiceAmount}
            </p>
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
            <p style={{ color: "#838383" }}>
              {" "}
              {itm?.invoices[1]?._id.slice(-10)}
            </p>
            <p style={{ color: "#838383" }}>
              {itm?.invoices[1]?.invoiceAmount}
            </p>
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
