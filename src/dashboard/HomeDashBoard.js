import { Col, Container, Row } from 'react-bootstrap';
import ContentCard from './dashboard-info-cards/DashboardInfoCards';
import DashboardHeader from './header/DashboardHeader';
import { Outlet, useLocation } from 'react-router-dom';
import {
  FaChartLine,
  FaMoneyBillWave,
  FaUser,
  FaCreditCard,
} from 'react-icons/fa';
import SearchFilterBox from './search-filter/SearchFilter';
// import HomeDashboardContent from './home-dashnoard-content/HomeDashboardContent';
import './Dashboard.css';

const dashboardInfoCardsData = [
  {
    icon: <FaChartLine size={35} />,
    title: 'Dashboard',
    path: '/home-dashboard',
  },
  {
    icon: <FaMoneyBillWave size={35} />,
    title: 'Loan Management',
    path: '/home-dashboard/loan',
  },
  {
    icon: <FaCreditCard size={35} />,
    title: 'Payment',
    path: '/home-dashboard/payment',
  },
  {
    icon: <FaUser size={35} />,
    title: 'Profile',
    path: '/home-dashboard/profile',
  },
];

const HomeDashBoard = () => {
  const location = useLocation();

  return (
    <>
      <DashboardHeader />
      <Container className="pt-5 pb-4">
        <Row className="gx-4 dashboard-cards">
          {dashboardInfoCardsData.map((cardItem, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <ContentCard
                icon={cardItem.icon}
                title={cardItem.title}
                active={location.pathname === cardItem.path}
                path={cardItem.path}
              />
            </Col>
          ))}
        </Row>
        <SearchFilterBox />
      </Container>

      <Outlet />
    </>
  );
};

export default HomeDashBoard;
