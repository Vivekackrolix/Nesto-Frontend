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
import './Dashboard.css';
import DashboardParentCard from './dashboard-card-big/DashboardParentCard';
import DoughnutChartDashboard from './doughnut-chart/DoughnutChart';
import StackedBarChartDashboard from './stacked-bar-chart-loan/StackedBarChart';

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
        <Row>
          <Col md={9}>
            <DashboardParentCard title="Overdue" />
          </Col>
          <Col md={3}>
            <div className="row g-5">
              <div className="col">
                <DoughnutChartDashboard style={{ width: '100%' }} />
              </div>
              <div className="col">
                <StackedBarChartDashboard />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Outlet />
    </>
  );
};

export default HomeDashBoard;
