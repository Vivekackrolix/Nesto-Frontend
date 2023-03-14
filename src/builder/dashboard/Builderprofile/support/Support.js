// import DashboardTabs from '../../dashboard-tabs/DashboardTabs';
import { Container } from "react-bootstrap";
import AccordionCard from "../accordion/AccordionCard";
import DashboardTabs from "../dashboard-tabs/DashboardTabs";
import { GrDocumentPdf } from "react-icons/gr";

const tabKey = ["Support", "FAQ"];
const Support = () => {
  return (
    <>
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]} />

      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <Container className="pt-5 pb-4 dashboard__wrapper">
          <h3>What is App flow and why is the best App?</h3>
          <p style={{ color: "#8BA0AE", fontFamily: "Bahnschrift" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="d-flex justify-content-end">
            <h3>
              <GrDocumentPdf />
            </h3>
          </div>
        </Container>
        <h3 className="d-flex justify-content-center">
          Was this information helpful?
        </h3>
        <div className="d-flex justify-content-center gap-5">
          <button
            type="button"
            className="btn btn-outline-dark btn-lg btn-block"
          >
            Yes
          </button>
          <button
            type="button"
            className="btn  btn-outline-dark btn-lg btn-block "
          >
            No
          </button>
        </div>
        <br />
      </Container>
      <br />
      <AccordionCard
        itemLength={4}
        accordionTitle="Lorem Ipsum dolor sit amet,consectetur elit"
        // accordionText="text goes here"
      />
    </>
  );
};

export default Support;
