import AccordionCard from "../accordion/AccordionCard";
// import ShadowCard from "../shadow-card/ShadowCard";
import "./RaiseQuery.css";
import { useEffect, useState } from "react";
import axios from "axios";

const RaiseQuery = () => {
  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getQuery = async () => {
      const response = await axios.get(
        "http://13.233.149.97:3000/api/v1/raiseQuery/getAllRaiseQuery",

        {
          headers: {
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      debugger;

      console.log(response.data);
      setData(response.data.data);
    };

    getQuery();
  }, []);

  // const recentQuery = data.map((itm, index) => {
  //   return <></>;
  // });
  return (
    <>
      {/* <ShadowCard
        // itemLength={5}
        itemLength={data.totalCount}
        // title="Loreum ipsum dolor sit amet, consectetur elit"
        title={data.subject}
        // text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        //  labore et dolore magna aliqua. Ut."
        text={data.description}
      /> */}
      <div className="mt-5 mb-3 chat-text">Chat With Us</div>
      {/* <div className="mt-2 row justify-content-around">{recentQuery}</div> */}
      <AccordionCard itemLength={1} accordionTitle="Contact 24×7 Help" />
      <AccordionCard itemLength={1} accordionTitle="Email Us" />
    </>
  );
};

export default RaiseQuery;
