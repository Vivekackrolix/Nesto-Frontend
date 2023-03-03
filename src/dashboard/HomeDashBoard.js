import { Col, Container, Row } from 'react-bootstrap';
import ContentCard from './dashboard-info-cards/DashboardInfoCards';
import DashboardHeader from './header/DashboardHeader';
import { Outlet, useLocation } from 'react-router-dom';
import SearchFilterBox from './search-filter/SearchFilter';
import './Dashboard.css';
import CustomModal from '../components/common/CustomModal';
import PaymentOverdueModal from './payment-overdue-modal/PaymentOverdueModal';

const dashboardInfoCardsData = [
  {
    icon: `/assets/home-sharp-`,
    title: 'Dashboard',
    path: '/home-dashboard',
  },
  {
    icon: `/assets/wallet-outline-`,
    title: 'Loan Management',
    path: '/home-dashboard/loan-management',
  },
  {
    icon: `/assets/card-outline-`,
    title: 'Payment',
    path: '/home-dashboard/payment',
  },
  {
    icon: `/assets/user-outline-`,
    title: 'Profile',
    path: '/home-dashboard/profile',
  },
];

const HomeDashBoard = () => {
  const location = useLocation();

  return (
    <>
      <PaymentOverdueModal show={true} />
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <Row className="gx-4 dashboard-cards align-items-center">
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
