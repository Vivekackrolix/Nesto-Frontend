import { Button, Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../../Images/propertyadded.png";
import build from "../../../Images/build.png";
// import subs from "../../Images/subs.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { RiVipCrownFill } from "react-icons/ri";
import DashboardHeader from "../../header/DashboardHeader";
import SearchFilterBox from "../../search-filter/SearchFilter";
import Footer from "../../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAPI } from "../../../Api/ApiRequest";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
// import { recentlyAddedPropertyActions } from "../../../redux/recentlyAddedPropertySlice";

// const RecentlyAddedProperty = ({ data }) => {
const RecentlyAddedProperty = (props) => {
  // const data = useSelector((state) => state.addedPropertyDetails.properties);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAddedProperties = async () => {
      debugger;
      // const response = await axios.get(
      //   // "http://13.233.149.97:3000/api/v1/property/getAllproperty",
      //   "http://65.1.3.134:3000/api/v1/property/getAllproperty",

      //   {
      //     headers: {
      //       Authorization:
      //         "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
      //     },
      //   }
      // );
      const response = await getAPI(apiEndpoints.getAllproperty);
      console.log(response.data);
      // dispatch(
      //   recentlyAddedPropertyActions.setAddedPropertyDetails({
      //     data: response.data.data,
      //   })
      // );
      setData(response.data);
    };
    getAddedProperties();
  }, []);
  const propertyListing = data.map((itm, index) => {
    return (
      <Col
        md={3}
        className="card mb-4 shadow-sm rounded-4 p-0 border-0"
        style={{ width: "21.75rem" }}
        id={itm._id}
        key={itm._id}
      >
        <Card.Img variant="top" src={propertyImage} />
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={10} sm={10}>
                <div>
                  {" "}
                  <Link
                    className="recent-heading"
                    // to="/builder/home-dashboard/description"
                    // to={`/builder/home-dashboard/description/${itm.propertyId._id}`}
                  >
                    {/* {itm.propertyId === null ? "no data Name" : itm._id.name} */}
                    {itm.name}
                  </Link>
                </div>
                <p style={{ opacity: 0.5 }}>
                  {/* {itm.propertyId === null ? "no data" : itm._id.location} */}
                  {itm.location}
                </p>
              </Col>
              <Col md={2} sm={2}>
                <RiVipCrownFill
                  style={{
                    padding: "5px",
                    borderRadius: "50%",
                    background: "#ffd600",
                    color: "#fff",
                    width: "1.85em",
                    height: "1.85em",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>2BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>3BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>4BHK</p>
              </Col>
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>5BHK</p>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col
                md={5}
                style={{
                  color: "#000000",
                  fontSize: "1.35em",
                  fontWeight: "bold",
                }}
              >
                {itm.minPrice}-{itm.maxPrice}
              </Col>
              <Col md={7} style={{ color: "#7D7F88", fontSize: "0.8em" }}>
                {itm.discountDescription}
              </Col>
            </Row>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <Button
                variant="transparent"
                type="button"
                className="rounded-pill px-4 py-2 border border-primary"
                style={{ color: "#278FD9", fontSize: "14px" }}
                as={Link}
                to="/builder/home-dashboard/visit"
              >
                50 Visits
              </Button>
              <Button
                variant="transparent"
                type="button"
                className="primary rounded-pill px-4 py-2 border border-primary"
                as={Link}
                to="/builder/home-dashboard/propertyedit"
              >
                <BsPencilFill
                  style={{
                    width: "0.9em",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "2px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    marginBottom: "5px",
                  }}
                />
                Edit
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Col>
    );
  });
  return (
    <>
      <DashboardHeader />
      <Container className="mt-5">
        <SearchFilterBox />

        <div className="row justify-content-between">
          <h3 className="col-4 heading">Recently Added</h3>
          {/* <i
            className="col-1"
            style={{
              color: "#FC5C67",
              fontFamily: "Bahnschrift",
              textDecorationLine: "underline",
            }}
          >
            View all
          </i> */}
        </div>
        {/* <div className="mt-4">{propertyListing}</div> */}
        <div className="mt-2 mb-5 row row-cols-2 w-100 justify-content-between ms-0">
          {propertyListing}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default RecentlyAddedProperty;
