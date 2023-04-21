import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import Header from "../../../header/Header";
import SearchFilterBox from "../../search-filter/SearchFilter";
import { AiFillCheckCircle } from "react-icons/ai";

import { useEffect, useState } from "react";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";
import SubscriptionPop from "./SubscriptionPop";
import SubscriptionAdd from "./SubscriptionAdd";

const Subscription = () => {
  const [subscription, setSubscription] = useState([]);
  const [addSubscription, setAddSubscription] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getSubscription = async () => {
      const response = await getAPI(apiEndpoints.getAllSubscription);
      setData(response.data);
    };

    getSubscription();
  }, []);

  const plans = data.map((itm) => {
    return (
      <div className="col">
        <div className="shadow-recent  rounded-3">
          <div
            className="rounded shadow-sm"
            style={{ backgroundColor: "#278FD9" }}
          >
            <h3 style={{ color: "#FFFFFF" }}>Recommended</h3>
          </div>

          <div class="card mb-4 rounded shadow-sm">
            <div class={`card-header py-4`} style={{ background: itm.colour }}>
              <h5 className="fw-bold">{itm.name}</h5>
              <p style={{ opacity: "0.6" }}>{itm.description}</p>
            </div>
          </div>

          <div className="p-4 d-flex justify-content-center">
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                Lorem Ipsum Dummy
                {/* {itm.numberOfVisit} */}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                Lorem Ipsum Dummy
                {/* {itm.numberOfproperty} */}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                {/* {itm.planValidityInDays} */}
                Lorem Ipsum Dummy
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <AiFillCheckCircle size={20} color="#51CC5D" className="me-2" />
                {/* {itm.totalCount} */}
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
                {itm.costPerMonth}
              </h5>
              <p>Per Month</p>
              <span className="p-2 d-flex justify-content-center">
                <Button
                  type="button"
                  variant="transparent"
                  size="lg"
                  className="rounded-2 px-4 py-2 border border-primary wd-120 "
                  onClick={() => {
                    setAddSubscription(true);
                  }}
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

  const [data1, setData1] = useState([]);
  useEffect(() => {
    const getSubscription = async () => {
      const response = await getAPI(apiEndpoints.getAllSubscriptionOrder);

      setData1(response.data);
    };

    getSubscription();
  }, []);

  const current = data1?.map((item) => {
    return (
      <Container className="shadow-recent mt-2 mb-5 rounded">
        <Row>
          <Col
            md={3}
            className={` rounded-start`}
            style={{
              padding: "50px",
              background: item?.planId?.colour,
            }}
          >
            <h5 className="fw-bold"> {item?.planId?.name}</h5>

            <p style={{ opacity: "0.6" }}>{item?.planId?.description}</p>
            <p className="fw-bold">
              ₹ {item?.planId?.costPerMonth}
              /per-month
            </p>
          </Col>
          <Col md={3} className="p-4">
            <ListGroup as="ul">
              {item?.selectProperties?.map((i) => (
                <ListGroup.Item as="li">
                  <AiFillCheckCircle
                    size={20}
                    color="#278fd9"
                    className="me-2"
                  />
                  {i?.name}
                </ListGroup.Item>
              ))}
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
                {item?.planId?.planValidityInDays} Days Left
              </h5>
              <p>
                ({item?.planId?.numberOfVisit}
                /24 Visits Left)
              </p>
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
                  onClick={() => {
                    setSubscription(true);
                  }}
                >
                  Upgrade
                </Button>
              </span>
              <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                {item?.planId?.minimumSpend}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
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
        </div>
        <br />
        <br />
        <h3>Current Packages</h3>
        {current}
      </Container>

      <SubscriptionPop
        show={subscription}
        onHide={setSubscription}
        onChange={setSubscription}
      />
      <SubscriptionAdd
        show={addSubscription}
        onHide={setAddSubscription}
        onChange={setAddSubscription}
      />
    </>
  );
};
export default Subscription;
