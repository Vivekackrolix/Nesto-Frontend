import { Container } from "react-bootstrap";
import Search from "../../../Images/search.png";
import Sold from "../../../Images/sold.png";
import visit from "../../../Images/visits.png";
import view from "../../../Images/views.png";
import Share from "../../../Images/share.png";
// import Two from "../../../Images/2BHK.png";
// import Three from "../../../Images/3BHK.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Anlytics = () => {
  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getAnlytics = async () => {
      const response = await axios.get(
        "http://65.1.3.134:3000/api/v1/property/getPropertiesAnalyticsForIndividualProperty?builderId=641069056532f2569479fc9d&propertyId=640ee6a8cbe2f98daaa8813f",
        // formData,
        {
          headers: {
            Authorization:
              // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      // debugger;

      // console.log(response.data);
      setData(response.data.data);
    };

    getAnlytics();
  }, []);

  const [data1, setData1] = useState([]); //Later use redux
  useEffect(() => {
    const getAnlyticsA = async () => {
      const response = await axios.get(
        "http://65.1.3.134:3000/api/v1/property/getPropertyById?id=641bf437067c659dc0be278c",
        // formData,
        {
          headers: {
            Authorization:
              // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      // debugger;

      // console.log(response.data);
      setData1(response.data.data);
    };

    getAnlyticsA();
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <h3 className="heading">Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-2">
        {/* {plans} */}
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Sold} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              {data.soldProperties}
              <br></br>Sold
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={visit} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              {data.numberOfvisit}
              <br></br>Visits
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Search} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              {data1.length === 0 ? "Calling API" : data1[0].searchCount}
              <br></br> Search
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={view} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              {data1.length === 0 ? "Calling API" : data1[0].viewsCount}
              <br></br> Views
            </span>
          </div>{" "}
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Share} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              {data.shareCount}
              <br></br> Shared
            </span>
          </div>
        </div>
      </Container>
      <br></br>
    </>
  );
  // });
};
export default Anlytics;
