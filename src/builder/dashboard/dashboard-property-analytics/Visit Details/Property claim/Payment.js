import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Payment = (props) => {
  const navigate = useNavigate();

  const [moreOption, setMoreOption] = useState(false);
  const update = () => {
    setMoreOption(true);
  };
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, payment: false, submit: true }));
    navigate("/builder/home-dashboard/promoted/claim");
  };

  return (
    <>
      <Modal show={props.show}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Payment Using Below Details</Modal.Title>
        </Modal.Header>
        <br />
        {/* <Form.Label className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"> */}
        <h5>Pay to Account</h5>
        <br />
        <Form.Group className="mb-3">
          <h5 style={{ fontFamily: "Bahnschrift" }}>Bank Name</h5>
          <Container
            className="dashboard__wrapper__filter"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}>HDFC</h5>
            </div>
          </Container>
          <br />
          <h5 style={{ fontFamily: "Bahnschrift" }}>Account No.</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}>3343263623</h5>
            </div>
          </Container>
          <br />
          <h5 style={{ fontFamily: "Bahnschrift" }}>IFSC Code</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}>Lorem Ipsum</h5>
            </div>
          </Container>
          <br />
          <h5 style={{ fontFamily: "Bahnschrift" }}>Recipient Name</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift" }}>Lorem Ipsum</h5>
            </div>
          </Container>
          <br />
          {moreOption && (
            <>
              <h5 style={{ fontFamily: "Bahnschrift" }}>Transaction Date*</h5>
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}>Lorem Ipsum</h5>
                </div>
              </Container>
              <br />

              <h5 style={{ fontFamily: "Bahnschrift" }}>Transaction ID*</h5>
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}>Lorem Ipsum</h5>
                </div>
              </Container>
              <br />
              <h5 style={{ fontFamily: "Bahnschrift" }}>Transaction Amount*</h5>
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}>Lorem Ipsum</h5>
                </div>
              </Container>
              <br />
            </>
          )}
          <div className="d-flex justify-content-center align-items-center my-4">
            {!moreOption && (
              <Button
                variant="primary"
                className="w-50 rounded-pill bg-color-primary"
                onClick={update}
              >
                Update Payment Status
              </Button>
            )}
            {moreOption && (
              <Button
                variant="primary"
                className="w-50 rounded-pill bg-color-primary"
                onClick={submitHandler}
              >
                Update
              </Button>
            )}
          </div>
        </Form.Group>
      </Modal>
    </>
  );
};
export default Payment;
