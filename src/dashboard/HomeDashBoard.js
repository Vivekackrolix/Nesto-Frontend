import { Col, Container, Row } from 'react-bootstrap';
import ContentCard from './dashboard-info-cards/DashboardInfoCards';
import DashboardHeader from './header/DashboardHeader';
import { useLocation } from 'react-router-dom';
import {
  FaChartLine,
  FaMoneyBillWave,
  FaUser,
  FaCreditCard,
} from 'react-icons/fa';

const dashboardInfoCardsData = [
  {
    icon: <FaChartLine size={35} />,
    title: 'Dashboard',
    path: '/home-dashboard',
  },
  {
    icon: <FaMoneyBillWave size={35} />,
    title: 'Loan Management',
    path: '/loan',
  },
  { icon: <FaCreditCard size={35} />, title: 'Payment', path: '/payment' },
  { icon: <FaUser size={35} />, title: 'Profile', path: '/profile' },
];

const HomeDashBoard = () => {
  const location = useLocation();

  return (
    <>
      <DashboardHeader />
      <Container className="pt-4">
        <Row className="gx-4">
          {dashboardInfoCardsData.map(cardItem => (
            <Col md={6} lg={3} className="mb-4">
              <ContentCard
                icon={cardItem.icon}
                title={cardItem.title}
                active={location.pathname === cardItem.path}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeDashBoard;
