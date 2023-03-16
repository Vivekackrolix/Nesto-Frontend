import { Col, Container, Row } from "react-bootstrap";
import ContentCard from "./dashboard-info-cards/DashboardInfoCards";
import DashboardHeader from "./header/DashboardHeader";
import { Outlet, useLocation } from "react-router-dom";
import SearchFilterBox from "./search-filter/SearchFilter";
import PropertyAnalytics from "./dashboard-property-analytics/PropertyAnalytics";
import SoldOut from "./dashboard-soldout-properties/SoldOut";
import homeImage from "../Images/summer.png";
import PropertyInvoice from "./dashboard-property-analytics/PendindInvoice";
import RecentPackage from "./dashboard-property-analytics/RecentPackage";
import RecentlyAdded from "./dashboard-soldout-properties/RecentlyAdded";
import Header from "../header/Header";
import Footer from "./Footer/Footer";

const dashboardInfoCardsData = [];

const HomeDashBoard = () => {
  const location = useLocation();

  return (
    <>
      {/* <DashboardHeader /> */}
      <Header />

      <Container className="pt-2 pb-4 dashboard__wrapper">
        <Row className="gx-4 dashboard-cards align-items-center">
        <img src={homeImage} className="rounded my-3" alt="Home" />
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
        <RecentlyAdded data={[1, 2, 3, 4, 5, 6]} />
        <RecentPackage />
        <PropertyInvoice />
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeDashBoard;
