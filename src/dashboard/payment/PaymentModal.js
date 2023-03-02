import { Modal, Button, Row, Col, Image, Form } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';

function PaymentModal(props) {
  return (
    <Modal {...props} centered size="lg">
      <Modal.Header>
        <Modal.Title>Payment Details</Modal.Title>
        <Button variant="link" onClick={props.onHide}>
          <IoClose />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col>
            <Button className="w-100 shadow" variant="light">
              Pay through UPI
            </Button>
          </Col>
          <Col>
            <h6>Scan the QR code to pay</h6>
            <div className="text-center">
              <Image src="/path/to/qr-code.png" alt="QR code" fluid />
            </div>
            <p className="text-center my-2">UPI ID: example@upi</p>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col>
            <Button className="w-100 shadow" variant="light">
              Pay to Account
            </Button>
          </Col>
          <Col>
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

            <Button className="w-100" variant="primary">
              Update Payment Status
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default PaymentModal;
