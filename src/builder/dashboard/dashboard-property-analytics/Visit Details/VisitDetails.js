import { Container, Button, Row, Col, Tab, Tabs } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";
// import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
// import { useEffect, useState } from "react";
// import axios from "axios";

// import VisitDetailItem from "./VisitDetailItem";
import Header from "../../../header/Header";
import AllVisits from './AllVisits';
import PromotedVisits from './PromotedVisits';
const VisitDetails = () => {

  return (
    <>
      <Header />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h3 className="heading"> Visit Details</h3>

        <Tabs
          defaultActiveKey="visits"
          id="fill-tab-example"
          className="visit-details-tab mb-3 mx-auto w-50"
          fill
        >
          <Tab eventKey="visits" title="All Visits">
          <AllVisits />
          </Tab>

          <Tab eventKey="promoted" title="Promoted Visits">
          <PromotedVisits />
          </Tab>
        </Tabs>

      </Container>
      <Footer />
    </>
  );
};

export default VisitDetails;
