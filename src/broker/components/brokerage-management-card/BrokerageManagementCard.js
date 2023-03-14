import { Card, Button, Row, Col } from 'react-bootstrap';
import './BrokerageManagementCard.css';

const BrokerageManagementCard = ({ type, text }) => {
  return (
    <Card className="brokerage__management__card border-0">
      <Row className="g-0">
        {type !== 'assigned' && (
          <Col md={4}>
            <Card.Img
              src="/assets/broker/broker-img.png"
              alt="Media"
              className="img-fluid w-100 h-100"
            />
          </Col>
        )}
        <Col md={type === 'assigned' ? 12 : 8}>
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <span className="text-truncate fw-semibold">
                Sky Dandelions Apartment
              </span>{' '}
              <span className="text-muted m-0">12/12/2022</span>
            </Card.Title>
            <Card.Text className="text-muted m-0 mb-3">
              Sector-29,Gurugram
            </Card.Text>
            <Row>
              <Col>
                <Card.Text className="text-muted m-0">Builder Name</Card.Text>
                <Card.Text>Lorem Ipsum</Card.Text>
              </Col>
              <Col>
                <Card.Text className="text-muted m-0">Lorem Ipsum</Card.Text>
                <Card.Text>₹ 3.94 L</Card.Text>
              </Col>
              <Col>
                <Card.Text className="text-muted m-0">Customer Name</Card.Text>
                <Card.Text>Lorem Ipsum</Card.Text>
              </Col>
            </Row>
            <Button
              variant="primary"
              className={`mt-3 rounded-pill w-100 ${
                type === 'raise' || type === 'claimSubmitted'
                  ? `raise claim-submitted`
                  : type === 'paymentReceived' ||
                    type === 'paid' ||
                    type === 'assigned'
                  ? 'custom-green-btn'
                  : 'claim-approved'
              }`}
            >
              {text}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BrokerageManagementCard;
