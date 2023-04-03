import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashboardTabs from "../../../components/dashboard-tabs/DashboardTabs";
import DashboardHeader from "../header/DashboardHeader";
import SearchFilterBox from "../search-filter/SearchFilter";
import PendingInvoice from "./PendingInvoice";
import SettledInvoice from "./SettledInvoice";

// const tabKey = ["Pending Invoices", "Settled Invoices"];

const Brokerage = () => {
  return (
    <>
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <br /> <h1> Brokerage Management</h1>
        <div
          className="w-100 btn-group rounded-pill col-1  justify-content-center  py-2 mx-3 row"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="w-50 rounded-pill col-1 btn btn-primary"
          >
            Pending Invoices
          </button>

          <Button
            variant="primary"
            type="button"
            className=" w-50 rounded-pill col-1 btn btn-secondary "
            as={Link}
            to="/builder/home-dashboard/Brokerage/settled"
          >
            Settled Invoice
          </Button>
        </div>
        <PendingInvoice data={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </Container>
    </>
  );
};
export default Brokerage;
