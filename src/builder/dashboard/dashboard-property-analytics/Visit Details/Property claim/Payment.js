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
      <Modal
        // size="lg"
        show={props.show}
        // onHide={() => {
        //   props.onChange(false);
        // }}
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title>Payment Using Below Details</Modal.Title>
        </Modal.Header>
        <br />
        <Container className=" dashboard__wrapper">
          {/* <Form.Label className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"> */}
          <h5>Pay to Account</h5>
          <br />
          <Form.Group className="mb-3">
            <Form.Label>
              <h5> Bank Name</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="HDFC"
            />
            <br />
            <Form.Label>
              <h5>Account No.</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="3343263623"
            />{" "}
            <br />
            <Form.Label>
              <h5>IFSC Code</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="Lorem Ipsum"
            />
            <br />
            <Form.Label>
              <h5>Recipient Name</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="Lorem Ipsum"
            />
            <br />
            {moreOption && (
              <>
                <Form.Label>
                  <h5>Transaction Date*</h5>
                </Form.Label>
                <Form.Control
                  className="rounded-0"
                  type="text"
                  placeholder="Lorem Ipsum"
                />
                <br />

                <Form.Label>
                  <h5>Transaction ID*</h5>
                </Form.Label>
                <Form.Control
                  className="rounded-0"
                  type="text"
                  placeholder="Lorem Ipsum"
                />
                <br />
                <Form.Label>
                  <h5>Transaction Amount*</h5>
                </Form.Label>
                <Form.Control
                  className="rounded-0"
                  type="text"
                  placeholder="Lorem Ipsum"
                />
                <br />
              </>
            )}
            <div className="d-flex justify-content-center align-items-center my-4">
              {!moreOption && (
                <Button
                  variant="primary"
                  className="w-100 rounded-pill bg-color-primary"
                  onClick={update}
                >
                  Update Payment Status
                </Button>
              )}
              {moreOption && (
                <Button
                  variant="primary"
                  className="w-100 rounded-pill bg-color-primary"
                  onClick={submitHandler}
                >
                  Update
                </Button>
              )}
            </div>
          </Form.Group>
        </Container>
      </Modal>
    </>
  );
};
export default Payment;
