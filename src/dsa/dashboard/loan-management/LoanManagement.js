import { Col, Container, Row } from 'react-bootstrap';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';

const tabKey = ['All', 'Assigned ', ' Matured', 'Not Matured'];

const LoanManagement = () => {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
            <DashboardChildCard cardType="assigned" status={true} />
          </DashboardTabs>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanManagement;
