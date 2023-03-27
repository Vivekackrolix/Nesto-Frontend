// import { Card, Col, Container, Row } from "react-bootstrap";
// import propertyImage from "../../../Images/propertyadded.png";
// import subs from "../../../Images/subs.png";
// import build from "../../../Images/build.png";
// import edit from "../../../Images/editbutton.png";
// import { RiVipCrownFill } from "react-icons/ri";
// import { BsPencilFill } from "react-icons/bs";

// const PastPropertyList = ({ data }) => {
//   const propertyListing = data.map((itm, index) => {
//     return (
//       <Col
//         md={3}
//         className="card mb-4 shadow-sm rounded-4 p-0 border-0"
//         style={{ width: "21.75rem" }}
//       >
//         <Card.Img variant="top" src={propertyImage} />
//         <Card.Body>
//           {/* <Card.Title></Card.Title> */}

//           <Card.Text>
//             <Row>
//               <Col md={10} sm={10}>
//                 <div
//                   style={{
//                     color: "#000000",
//                     fontSize: "1.35em",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Sky Danelions Apartment
//                 </div>
//                 <p style={{ opacity: 0.5, fontSize: "0.7em" }}>
//                   Luxury Apartment in Sector-29,Gurugram
//                 </p>
//               </Col>
//               <Col md={2} sm={2}>
//                 <RiVipCrownFill
//                   style={{
//                     padding: "5px",
//                     borderRadius: "50%",
//                     background: "#ffd600",
//                     color: "#fff",
//                     width: "1.85em",
//                     height: "1.85em",
//                   }}
//                 />
//               </Col>
//             </Row>
//             <Row>
//               <Col md={3} sm={3} className="text-center">
//                 <img src={build} alt="build" className="build-icon" />
//                 <p style={{ opacity: 0.5 }}>2BHK</p>
//               </Col>
//               <Col md={3} sm={3} className="text-center">
//                 <img src={build} alt="build" className="build-icon" />
//                 <p style={{ opacity: 0.5 }}>3BHK</p>
//               </Col>
//               <Col md={3} sm={3} className="text-center">
//                 <img src={build} alt="build" className="build-icon" />
//                 <p style={{ opacity: 0.5 }}>4BHK</p>
//               </Col>
//               <Col md={3} sm={3} className="text-center">
//                 <img src={build} alt="build" className="build-icon" />
//                 <p style={{ opacity: 0.5 }}>5BHK</p>
//               </Col>
//             </Row>

//             <Row className="align-items-center">
//               <Col
//                 md={5}
//                 style={{
//                   color: "#000000",
//                   fontSize: "1.25em",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Rs.3.94-6.01 Cr
//               </Col>
//               <Col md={7} style={{ color: "#7D7F88", fontSize: "0.8em" }}>
//                 Book now & get 5% discount
//               </Col>
//             </Row>
//             <div className="d-flex justify-content-end gap-2 mt-2">
//               <button
//                 type="button"
//                 className="btn btn-transparent rounded-pill px-4 py-2 border border-primary"
//                 style={{ color: "#278FD9", fontSize: "14px" }}
//               >
//                 50 Visits
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-transparent primary rounded-pill px-4 py-2 border border-primary"
//                 style={{ color: "#278FD9", fontSize: "14px" }}
//               >

//                 Edit
//               </button>
//             </div>
//           </Card.Text>
//         </Card.Body>
//       </Col>
//     );
//   });
//   return (
//     <Container className="mt-5">
//       <div
//         className="mt-2 mb-5 row row-cols-2 justify-content-around"
//         style={{ fontFamily: "Bahnschrift" }}
//       >
//         {propertyListing}
//       </div>
//     </Container>
//   );
// };
// export default PastPropertyList;

import { Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../../Images/propertyimage.png";
import { Link } from "react-router-dom";
import DashboardHeader from "../../header/DashboardHeader";
import SearchFilterBox from "../../search-filter/SearchFilter";
import Footer from "../../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { recentlySoldPropertyActions } from "../../../redux/recentlySoldPropertySlice";
// import "./SoldOut.css";

const PastPropertyList = (props) => {
  const data = useSelector((state) => state.soldPropertyDetail.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBoughtProperties = async () => {
      // debugger;
      const response = await axios.get(
        "http://13.233.149.97:3000/api/v1/boughtProperty/getAllBoughtProperty",
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );

      console.log(response.data);
      dispatch(
        recentlySoldPropertyActions.setSoldPropertyDetails({
          data: response.data.data,
        })
      );
    };

    getBoughtProperties();
  }, []);

  const propertyListing = data.map((itm, index) => {
    return (
      <Col
        md={3}
        className="card mb-4 shadow-sm rounded-4 col-md-3 p-0 border-0"
        style={{
          width: "21.75rem",
        }}
        id={itm._id}
        key={itm._id}
      >
        <Card.Img className="w-100" variant="top" src={propertyImage} />
        <Card.Body>
          <div>
            <div>
              {" "}
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                  textDecoration: "none",
                }}
                to="/builder/home-dashboard/description"
              >
                {itm.propertyId === null ? "no data Name" : itm.propertyId.name}
                {/* {itm.propertyId.companyName} */}
              </Link>
            </div>
            <div style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              {itm.propertyId === null ? "no data" : itm.propertyId.location}
            </div>
          </div>
          <Row className="p-2">
            <Col>
              <Row style={{ opacity: 0.5 }}>Unit Type</Row>
              <Row>{itm.unitType}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Unit Number</Row>
              <Row>{itm.unitNumber}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Selling Price</Row>
              <Row>₹ {itm.sellingPrice}</Row>
            </Col>
          </Row>
          <Row className="p-2">
            <Col>
              <Row style={{ opacity: 0.5 }}>Client Name</Row>
              <Row>{itm.customerId.clientName}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Broker ID</Row>
              <Row>{itm.brokerId.referalCode}</Row>
              <Row>{itm.brokerId._id}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Selling Date</Row>
              <Row>{itm.bookingDate}</Row>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    );
  });
  return (
    <>
      {/* <DashboardHeader /> */}
      <Container className="mt-5">
        {/* <SearchFilterBox />
        <div className="row justify-content-between">
          <h3 className="col-4" style={{ fontFamily: "Bahnschrift" }}>
            Recently Sold Out Property
          </h3>
        </div> */}

        <div className="mt-2 row justify-content-around">{propertyListing}</div>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default PastPropertyList;
