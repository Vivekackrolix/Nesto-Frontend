import { Card, Row, Col } from 'react-bootstrap';
import DashboardChildCard from './DashboardChildCard';

const DashboardParentCard = ({ title }) => {
  return (
    <Card className="border-0 shadow mb-4">
      <Card.Header className="bg-transparent py-3">
        <h5 className="mb-0">{title}</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <DashboardChildCard />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DashboardParentCard;
