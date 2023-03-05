import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "./dashboard-info-cards/DashboardInfoCards";
import DashboardHeader from "./header/DashboardHeader";
import { Outlet, useLocation } from "react-router-dom";
import SearchFilterBox from "./search-filter/SearchFilter";
import PropertyAnalytics from "./dashboard-property-analytics/PropertyAnalytics";
import SoldOut from "./dashboard-soldout-properties/SoldOut";
// import PaymentOverdueModal from "./payment-overdue-modal/PaymentOverdueModal";
// import RequestDenyModal from "./request-deny-modal/RequestDenyModal";
// import PayNowModal from "./pay-now-modal/PayNowModal";
// import "./Dashboard.css";

const dashboardInfoCardsData = [
  {
    icon: `/assets/home-sharp-`,
    title: "Dashboard",
    path: "/builder/home-dashboard",
  },
  {
    icon: `/assets/wallet-outline-`,
    title: "Loan Management",
    path: "/builder/home-dashboard/loan-management",
  },
  {
    icon: `/assets/card-outline-`,
    title: "Payment",
    path: "/builder/home-dashboard/payment",
  },
  {
    icon: `/assets/user-outline-`,
    title: "Profile",
    path: "/builder/home-dashboard/profile",
  },
];

const HomeDashBoard = () => {
  const location = useLocation();

  return (
    <>
      {/* <PayNowModal show={false} />
      <PaymentOverdueModal show={false} />
      <RequestDenyModal show={false} />*/}
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
        <PropertyAnalytics />
        <SoldOut data={[1, 2, 3, 4, 5, 6]} />
      </Container>
      {/* <Outlet /> */}
    </>
  );
};

export default HomeDashBoard;
