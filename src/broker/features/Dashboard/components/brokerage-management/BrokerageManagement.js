import DashboardTabs from '../../../../../components/dashboard-tabs/DashboardTabs';
import { BrokerageManagementCard } from '../../../../components';
import { Col, Container, Row } from 'react-bootstrap';
const tabKey = ['Eligible Claims', 'Claim History', 'Loan Queries'];
const BrokerageManagement = ({ data }) => {
  return (
    <section className="mt-5 brokerage__management">
      <Container>
        <Row>
          <Col>
            <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
              <Container>
                <Row>
                  <Col lg={6} md={6} className="mb-3">
                    <BrokerageManagementCard />
                  </Col>
                  <Col lg={6} md={6} className="mb-3">
                    <BrokerageManagementCard />
                  </Col>
                </Row>
              </Container>
            </DashboardTabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrokerageManagement;
