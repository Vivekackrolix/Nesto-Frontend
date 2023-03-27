import { Container } from "react-bootstrap";
import Search from "../../../Images/search.png";
import Sold from "../../../Images/sold.png";
import visit from "../../../Images/visits.png";
import view from "../../../Images/views.png";
import Share from "../../../Images/share.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Anlytics = () => {
  // const [data, setData] = useState([]); //Later use redux
  // useEffect(() => {
  //   const getSubscription = async () => {
  //     const response = await axios.get(
  //       "http://13.233.149.97:3000/api/v1/subscription/getAllSubscription",
  //       // formData,
  //       {
  //         headers: {
  //           Authorization:
  //             // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
  //             "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
  //         },
  //       }
  //     );
  //     debugger;
  //     console.log(response.data.data);
  //     setData(response.data.data);
  //   };

  //   getSubscription();
  // }, []);

  // const plans = data.map((itm) => {
  // console.log(itm.colour);
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
              2<br></br>Sold
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={visit} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              20<br></br>Visits
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Search} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              200 <br></br> Search
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={view} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              100 <br></br> Views
            </span>
          </div>{" "}
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Share} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              40 <br></br> Shared
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
