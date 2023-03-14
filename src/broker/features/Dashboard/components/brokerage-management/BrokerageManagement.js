import { BrokerageManagementCard } from '../../../../components';
import { Col, Container, Row } from 'react-bootstrap';

const BrokerageManagement = ({ data }) => {
  return (
    <section className="mt-5 brokerage__management">
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
    </section>
  );
};

export default BrokerageManagement;
