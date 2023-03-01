import { Col, Container, Row } from 'react-bootstrap';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';

const LoanManagement = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <DashboardTabs>
            <DashboardChildCard cardType="propertyDetailsProfile" />
          </DashboardTabs>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanManagement;
