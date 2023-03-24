import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import Header from "../../../header/Header";
import SearchFilterBox from "../../search-filter/SearchFilter";
import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

const Subscription = () => {
  const [data, setData] = useState([]); //Later use redux
  useEffect(() => {
    const getSubscription = async () => {
      const response = await axios.get(
        "http://13.233.149.97:3000/api/v1/subscription/getAllSubscription",
        // formData,
        {
          headers: {
            Authorization:
              // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;
      console.log(response.data.data);
      setData(response.data.data);
    };

    getSubscription();
  }, []);

  const plans = data.map((itm) => {
    console.log(itm.colour);
    return (
      <div className="col">
        <div className="shadow-recent mt-2 rounded-3">
          <div class="card mb-4 rounded shadow-sm">
            <div class={`card-header py-3 ${itm.colour}`}>
              <h5 className="fw-bold">{itm.name}</h5>
              <p style={{ opacity: "0.6" }}>The perfect all-rounder</p>
            </div>
          </div>

          <div className="p-4 d-flex justify-content-center">
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                {itm.numberOfVisit}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                {itm.numberOfproperty}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                {itm.planValidityInDays}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                {itm.totalCount}
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="p-4 text-center">
            <div style={{ borderTop: "1px solid #d4d4d4" }}>
              <br />
              <h5
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                }}
              >
                $ {itm.costPerMonth}
              </h5>
              <p>Per Month</p>
              <span className="p-2 d-flex justify-content-center">
                <Button
                  type="button"
                  variant="transparent"
                  size="lg"
                  className="rounded-2 px-4 py-2 border border-primary wd-120 "
                >
                  Buy Now
                </Button>
              </span>
              <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>{itm.minimumSpend}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />

      <Container className="pt-2 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h3>Buy New Packages</h3>
        <br />
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {plans}
          {/* <div className="col">
            <div className="shadow-recent mt-2 rounded-3">
              <div class="card mb-4 rounded shadow-sm">
                <div class="card-header py-3 plan ">
                  <h5 className="fw-bold">Silver Plan</h5>
                  <p style={{ opacity: "0.6" }}>The perfect all-rounder</p>
                </div>
              </div>
              <div className="p-4 d-flex justify-content-center">
                <ListGroup as="ul">
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="#57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="#57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="#57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="#57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div className="p-4 text-center">
                <div style={{ borderTop: "1px solid #d4d4d4" }}>
                  <br />
                  <h5
                    style={{
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.4em",
                    }}
                  >
                    $99
                  </h5>
                  <p>Per Month</p>
                  <span className="p-2 d-flex justify-content-center">
                    <Button
                      type="button"
                      variant="transparent"
                      size="lg"
                      className="rounded-2 px-4 py-2 border border-primary wd-120 "
                    >
                      Buy Now
                    </Button>
                  </span>
                  <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    Minimum Spend $16 over 12 months
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="shadow-recent mt-2 rounded-3">
              <div class="card mb-4 rounded shadow-sm">
                <div class="card-header py-3 planp ">
                  <h5 className="fw-bold">Platinum Plan</h5>
                  <p style={{ opacity: "0.6" }}>The perfect all-rounder</p>
                </div>
              </div>
              <div className="p-4 d-flex justify-content-center">
                <ListGroup as="ul">
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="
                      #57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="
                      #57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="
                      #57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <AiFillCheckCircle
                      size={20}
                      color="
                      #57DA65"
                      className="me-2"
                    />
                    Lorem Ipsum Dummy
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div className="p-4 text-center">
                <div style={{ borderTop: "1px solid #d4d4d4" }}>
                  <br />
                  <h5
                    style={{
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "1.4em",
                    }}
                  >
                    $205
                  </h5>
                  <p>Per Month</p>
                  <span className="p-2 d-flex justify-content-center">
                    <Button
                      type="button"
                      variant="transparent"
                      size="lg"
                      className="rounded-2 px-4 py-2 border border-primary wd-120 "
                    >
                      Buy Now
                    </Button>
                  </span>
                  <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                    Minimum Spend $16 over 12 months
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <br />
        <br />
        <h3>Current Packages</h3>
        <Container className="shadow-recent mt-2 mb-5 rounded">
          <Row>
            <Col
              md={3}
              className="plan rounded-start"
              style={{ padding: "50px" }}
            >
              <h5 className="fw-bold">Silver Plan</h5>
              <p style={{ opacity: "0.6" }}>The perfect all-rounder</p>
              <p className="fw-bold">₹ 99/per-month</p>
            </Col>
            <Col md={3} className="p-4">
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  Sky Apartment
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  DLF Apartment
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  Sky Apartment
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  DLf Apartment
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} className="p-4 text-center">
              <div style={{ borderLeft: "1px solid #d4d4d4" }}>
                <h5
                  style={{
                    color: "#0070C0",
                    fontWeight: "bold",
                    fontSize: "1.4em",
                  }}
                >
                  6 Days Left
                </h5>
                <p>(12/24 Visits Left)</p>
                <span className="p-3 gap-4 d-flex justify-content-center">
                  <Button
                    type="button"
                    variant="transparent"
                    size="lg"
                    className="rounded-2 px-4 py-2 border border-primary wd-120 "
                  >
                    Renew
                  </Button>
                  <Button
                    type="button"
                    variant="transparent"
                    size="lg"
                    className="rounded-2 px-4 py-2 border border-primary wd-120 "
                  >
                    Upgrade
                  </Button>
                </span>
                <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                  Suggested Subscription:Lorem Ipsum
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <br /> */}
        <Container className="shadow-recent mt-2 mb-5 rounded">
          <Row>
            <Col
              md={3}
              className="plang rounded-start"
              style={{ padding: "50px" }}
            >
              <h5 className="fw-bold">Gold Plan</h5>
              <p style={{ opacity: "0.6" }}>The perfect all-rounder</p>
              <p className="fw-bold">₹ 68/per-month</p>
            </Col>
            <Col md={3} className="p-4">
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  Sky Apartment
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  DLF Apartment
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  Sky Apartment
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  DLf Apartment
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} className="p-4 text-center">
              <div style={{ borderLeft: "1px solid #d4d4d4" }}>
                <h5
                  style={{
                    color: "#0070C0",
                    fontWeight: "bold",
                    fontSize: "1.4em",
                  }}
                >
                  6 Days Left
                </h5>
                <p>(12/24 Visits Left)</p>
                <span className="p-3 gap-4 d-flex justify-content-center">
                  <Button
                    type="button"
                    variant="transparent"
                    size="lg"
                    className="rounded-2 px-4 py-2 border border-primary wd-120 "
                  >
                    Renew
                  </Button>
                  <Button
                    type="button"
                    variant="transparent"
                    size="lg"
                    className="rounded-2 px-4 py-2 border border-primary wd-120 "
                  >
                    Upgrade
                  </Button>
                </span>
                <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                  Suggested Subscription:Lorem Ipsum
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Subscription;
