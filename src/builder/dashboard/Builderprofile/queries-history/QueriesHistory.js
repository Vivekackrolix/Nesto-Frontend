// import DashboardTabs from "../dashboard-tabs/DashboardTabs";
import SearchFilterBox from "../../search-filter/SearchFilter";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ManageRole from "./ManageRole";
import Finance from "./Finance";
import PropertyManager from "./ManageRole";
import Property from "./Property";
import FinanceProperty from "./FinanceProperty";

// const tabKey2 = ["List of Property Manages", "List of Finance Managers"];
const QueriesHistory = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  // const tabelData = arr.map((itm) => (
  //   <ManageRole className={"mb-3 py-3 border rounded"} />
  // ));
  return (
    <>
      <h3>Manage Roles</h3>
      <SearchFilterBox />
      <Tabs
        defaultActiveKey="visits"
        id="fill-tab-example"
        // className="mb-3 mx-auto w-50"
        className="mb-3 p-5 rounded flex-column flex-sm-row"
        fill
      >
        <Tab eventKey="Property" title="List of Property Manager">
          <Property data={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </Tab>

        <Tab eventKey="Finance" title="List of Finance Manager ">
          <FinanceProperty data={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </Tab>
      </Tabs>
      {/* <DashboardTabs tabsKey={tabKey2} activeState={tabKey2[0]}></DashboardTabs> */}

      {/* <DashboardChildCard cardType="acceptedLoanQueries" /> */}

      {/* <Container className="dashboard__wrapper__filter">
        <Row>
          <Col>Assigned To</Col>
          <Col>Phone Number</Col>
          <Col>Email</Col>
          <Col>Properties </Col>
          <Col>Action</Col>
        </Row>
        <br />
        {tabelData}
      </Container> */}
    </>
  );
};

export default QueriesHistory;
