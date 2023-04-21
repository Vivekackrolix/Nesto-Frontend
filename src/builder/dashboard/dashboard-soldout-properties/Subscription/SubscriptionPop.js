import { Button, Container, ListGroup, Modal } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";

import { useEffect, useState } from "react";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";

const SubscriptionPop = (props) => {
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
                  // onClick={() => handleBuyNow(itm._id)}
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
      <Modal
        show={props.show}
        onHide={() => {
          props.onHide(false);
        }}
        size="lg"
        animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Container className="pt-2 pb-4 dashboard__wrapper">
          <h3>Buy New Packages</h3>
          <br />
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {plans}
          </div>
          <br />
        </Container>
      </Modal>
    </>
  );
};
export default SubscriptionPop;
