import { Card, Row, Col, Button } from 'react-bootstrap';
import DashboardChildCard from './DashboardChildCard';

const DashboardParentCard = ({ title }) => {
  return (
    <Card className="border-0 shadow mb-4">
      <Card.Header className="bg-transparent py-3">
        <h5 className="mb-0">{title}</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <DashboardChildCard />
          </Col>
          <Col xs={12}>
            <DashboardChildCard />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 d-flex justify-content-center align-items-center py-3">
        <Button className="btn-color-outline-secondary rounded-100">
          Browse More
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default DashboardParentCard;
