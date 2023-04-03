import { Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../../Images/propertyimage.png";
import { Link } from "react-router-dom";
import DashboardHeader from "../../header/DashboardHeader";
import SearchFilterBox from "../../search-filter/SearchFilter";
import Footer from "../../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { recentlySoldPropertyActions } from "../../../redux/recentlySoldPropertySlice";
// import "./SoldOut.css";

const RecentlySoldOutProperty = (props) => {
  // const data = useSelector((state) => state.soldPropertyDetail.properties);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  debugger;
  useEffect(() => {
    const getBoughtProperties = async () => {
      debugger;
      const response = await axios.get(
        // "http://13.233.149.97:3000/api/v1/boughtProperty/getAllBoughtProperty",
        "http://65.1.3.134:3000/api/v1/boughtProperty/getAllBoughtProperty",
        // "http://localhost:3000/api/v1/boughtProperty/getAllBoughtProperty?propertyId=6421d0cd47ff879954ad7f17",
        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );

      console.log(response.data);
      // dispatch(
      //   recentlySoldPropertyActions.setSoldPropertyDetails({
      //     data: response.data.data,
      //   })
      // );
      setData(response.data.data);
    };

    getBoughtProperties();
  }, []);

  const propertyListing = data.map((itm, index) => {
    debugger;
    // if (data.) return <h1>Solve</h1>;
    return (
      <Col
        md={3}
        sm={12}
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
                className="sold-heading"
                to={`/builder/home-dashboard/description/${itm.propertyId._id}`}
                // to="/builder/home-dashboard/description"
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
              {/* <Row>{itm.brokerId.referalCode}</Row> */}
              <Row>{itm.brokerId._id.slice(-10)}</Row>
              {/* <Row>{itm.brokerId}</Row> */}
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
      <DashboardHeader />
      <Container className="mt-5">
        <SearchFilterBox />
        <Row className="justify-content-between">
          <Col md={12}>
            <h3 className="heading">Recently Sold Out Property</h3>
          </Col>
        </Row>

        <div className="mt-2 row w-100 justify-content-between ms-0">
          {propertyListing}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default RecentlySoldOutProperty;
