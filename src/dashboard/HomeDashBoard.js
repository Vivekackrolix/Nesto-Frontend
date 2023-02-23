import { Col, Container, Row } from 'react-bootstrap';
import ContentCard from './dashboard-info-cards/DashboardInfoCards';
import DashboardHeader from './header/DashboardHeader';
import {
  FaChartLine,
  FaMoneyBillWave,
  FaUser,
  FaCreditCard,
} from 'react-icons/fa';

const dashboardInfoCardsData = [
  { icon: <FaChartLine size={35} />, title: 'Dashboard' },
  { icon: <FaMoneyBillWave size={35} />, title: 'Loan Management' },
  { icon: <FaCreditCard size={35} />, title: 'Payment' },
  { icon: <FaUser size={35} />, title: 'Profile' },
];

const HomeDashBoard = () => {
  return (
    <>
      <DashboardHeader />
      <Container>
        <Row className="gx-4">
          {dashboardInfoCardsData.map(cardItem => (
            <Col md={6} lg={3} className="mb-4">
              <ContentCard icon={cardItem.icon} title={cardItem.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeDashBoard;
