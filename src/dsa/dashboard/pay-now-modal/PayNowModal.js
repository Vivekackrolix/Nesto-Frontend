import {
  Modal,
  Button,
  Row,
  Col,
  Image,
  Form,
  FloatingLabel,
} from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import './PayNowModal.css';

const PayNowModal = ({ show }) => {
  return (
    <Modal centered size="lg" show={show} className="pay-now-modal">
      <Modal.Header className="justify-content-center p2-4 pb-0">
        <Modal.Title className="fw-bold">
          Paynow Using Below Details
        </Modal.Title>
        {/* <Button variant="link" onClick={props.onHide}> */}
        {/* <Button variant="link">
          <IoClose />
        </Button> */}
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              className="px-5 py-2 shadow d-flex align-items-center justify-content-center gap-2"
              variant="light"
            >
              <img
                src="/assets/paynow.png"
                alt="pay now"
                className="img-fluid"
              />
              Pay through UPI
            </Button>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center pay-now-modal-qr-text">
              <h3>NestoHub</h3>
              <h6>UPI ID: 123455463423</h6>
            </div>
            <div className="text-center">
              <Image
                src="/assets/qr-img.png"
                alt="qr code"
                className="img-fluid"
              />
            </div>
            <p className="text-center my-2">UPI ID: example@upi</p>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              className="px-5 py-2 shadow d-flex align-items-center justify-content-center gap-2"
              variant="light"
            >
              <img
                src="/assets/paynow.png"
                alt="pay now"
                className="img-fluid"
              />
              Pay to Account
            </Button>
          </Col>
          {/* <Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column htmlFor="bank">
                Bank Name
              </Form.Label>
              <Col>
                <Form.Control type="text" id="bank" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column htmlFor="branch">
                Branch Name
              </Form.Label>
              <Col>
                <Form.Control type="text" id="branch" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column htmlFor="accountNo">
                Account Number
              </Form.Label>
              <Col>
                <Form.Control type="text" id="accountNo" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column htmlFor="ifsc">
                IFSC Code
              </Form.Label>
              <Col>
                <Form.Control type="text" id="ifsc" />
              </Col>
            </Form.Group>

            <Button
              variant="primary"
              className="w-100 rounded-100 bg-color-primary my-4"
            >
              Update Payment Status
            </Button>
          </Col> */}

          <Form>
            <Row className="mb-3">
              <Col>
                <FloatingLabel
                  controlId="clientNameInput"
                  label="Client Name"
                  className="mb-3"
                >
                  <Form.Control
                    className="form-control-sm"
                    type="text"
                    placeholder="Enter client name"
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PayNowModal;
