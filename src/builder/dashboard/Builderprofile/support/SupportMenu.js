import { Container } from "react-bootstrap";
import { GrDocumentPdf } from "react-icons/gr";
// import AccordionCard from "../accordion/AccordionCard";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import { useEffect, useState } from "react";
const SupportMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getSupport = async () => {
      const response = await axios.get(
        "http://65.1.3.134:3000/api/v1/faqAndSupport/getAllFaqAndSupport?search=&for=builder&type=support",

        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;
      console.log(response.data.data);
      setData(response.data.data);
    };

    getSupport();
  }, []);

  const accordionData = data.map((itm) => {
    return (
      <Accordion.Item eventKey="0">
        <Accordion.Header>{itm.question}</Accordion.Header>
        <Accordion.Body>{itm.answer}</Accordion.Body>
        <div className="d-flex justify-content-end">
          <h3>
            <GrDocumentPdf />
          </h3>
        </div>
        {/* </Container> */}
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
      </Accordion.Item>
    );
  });

  return (
    <>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <Accordion defaultActiveKey="0">{accordionData}</Accordion>
      </Container>
      <br />
    </>
  );
};
export default SupportMenu;
