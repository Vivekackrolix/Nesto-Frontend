import DashboardTabs from "../dashboard-tabs/DashboardTabs";
import SearchFilterBox from "../../search-filter/SearchFilter";
import { Col, Container, Row } from "react-bootstrap";
import ManageRole from "./ManageRole";

// const tabKey = ["All", "Assigned ", " Matured", "Not Matured"];
const tabKey2 = ["List of Property Manages", "List of Finance Managers"];
const QueriesHistory = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const tabelData = arr.map((itm) => (
    <ManageRole className={"mb-3 py-3 border rounded"} />
  ));
  return (
    <>
      <h3>Manage Roles</h3>
      <br />
      <SearchFilterBox />
      <DashboardTabs tabsKey={tabKey2} activeState={tabKey2[0]}></DashboardTabs>
      {/* <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <DashboardChildCard cardType="acceptedLoanQueries" />
      </DashboardTabs> */}

      <Container className="dashboard__wrapper__filter mt-5">
        <Row>
          <Col>Assigned To</Col>
          <Col>Phone Number</Col>
          <Col>Email</Col>
          <Col>Properties </Col>
          <Col>Action</Col>
        </Row>
        <br />
        {tabelData}
      </Container>
    </>
  );
};

export default QueriesHistory;
