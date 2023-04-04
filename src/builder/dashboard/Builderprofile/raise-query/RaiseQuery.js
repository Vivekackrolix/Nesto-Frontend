import AccordionCard from "../accordion/AccordionCard";
import ShadowCard from "../shadow-card/ShadowCard";
import "./RaiseQuery.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const RaiseQuery = () => {
  const [queryData, setQueryData] = useState([]); //Later use redux
  useEffect(() => {
    const getQuery = async () => {
      const response = await axios.get(
        // "http://13.233.149.97:3000/api/v1/raiseQuery/getAllRaiseQuery",
        "http://localhost:3000/api/v1/raiseQuery/getAllRaiseQuery",

        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;

      console.log(response.data);
      setQueryData(response.data.data);
    };

    getQuery();
  }, []);

  const recentQuery = queryData.map((data, index) => {
    return (
      // <ShadowCard
      //   // itemLength={queryData.length}
      //   // itemLength={data.totalCount}
      //   // title="Loreum ipsum dolor sit amet, consectetur elit"
      //   title={data.subject}
      //   // text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      //   //  labore et dolore magna aliqua. Ut."
      //   text={data.description}
      // />
      // </div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{data.subject}</Accordion.Header>
        <Accordion.Body> {data.description} </Accordion.Body>
      </Accordion.Item>
    );
  });
  return (
    <>
      <div className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <Accordion defaultActiveKey="0"> {recentQuery}</Accordion>
      </div>

      <div className="mt-5 mb-3 chat-text">Chat With Us</div>

      <AccordionCard itemLength={1} accordionTitle="Contact 24×7 Help" />
      <AccordionCard itemLength={1} accordionTitle="Email Us" />
    </>
  );
};

export default RaiseQuery;
