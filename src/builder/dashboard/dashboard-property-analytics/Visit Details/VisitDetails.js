import { Table, Container, Button } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import DashboardHeader from "../../header/DashboardHeader";
import { RiStarSFill } from "react-icons/ri";
const VisitDetails = () => {
  return (
    <>
      <DashboardHeader />
      <SearchFilterBox />
      <h1> Visit Details</h1>
      <div
        className=" btn-group rounded-pill border-0 justify-content-center  py-2 mx-5 row"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" className="rounded-pill col-1 btn btn-primary">
          All Visits
        </button>

        <Button
          variant="primary"
          type="button"
          className="rounded-pill col-1 btn btn-secondary "
          as={Link}
          to="/builder/home-dashboard/promoted"
        >
          Promoted Visits
        </Button>
      </div>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10
            </span>
            <span style={{ opacity: 0.5 }}>Pending</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              5
            </span>
            <span style={{ opacity: 0.5 }}>Completed</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              6
            </span>
            <span style={{ opacity: 0.5 }}>Follow Up</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              3
            </span>
            <span style={{ opacity: 0.5 }}>Negotiation</span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              1
            </span>
            <span style={{ opacity: 0.5 }}>Brought</span>
          </div>
        </div>
      </Container>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-5">
        <Table className="profile__transaction">
          <thead>
            <tr>
              <th>Visit ID</th>
              <th>Broker Name</th>
              <th>Visit Date</th>
              <th>Status </th>
              <th>Client Name</th>
              <th>Rating & Reviews</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
            <tr>
              <td>2111321321</td>
              <td>Lorem Ipsum</td>
              <td>12 Jan 2023</td>
              <td style={{ color: "#278FD9" }}>Bought</td>
              <td>Lorem Ipsum</td>
              <td>
                {Array.from({ length: 5 }, (_, index) => (
                  <RiStarSFill color="#FFB630" />
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div className="d-grid mt-5">
        <Button
          variant="primary"
          size="sm"
          className="w-70 rounded-pill border-0 bg-color-primary py-2 my-5 mx-5"
          //   onClick={onContinueHandler}
        >
          Download Pdf
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default VisitDetails;
