// import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddRole from "./AddRole";
import { BsPencilFill } from "react-icons/bs";
// import delete from "../../../Images/editbutton.png";
import { useEffect, useState } from "react";
import axios from "axios";

const ManageRole = (props) => {
  const [role, setRole] = useState(false);
  const [visible, setVisible] = useState(true);

  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getRemove = async () => {
      const response = await axios.del(
        "http://13.233.149.97:3000/api/v1/roles/deleteRoles?id=64194fb9734b3a4ba5181d23",
        // formData,
        {
          headers: {
            Authorization:
              // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      // debugger;

      // console.log(response.data);
      setData(response.data.data);
    };

    getRemove();
  }, []);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  const onRole = () => {
    // setRole((prev) => ({ ...prev, role: true }));
    setRole(true);
  };

  return (
    <>
      <Row className={props.className}>
        <Col>2111321321</Col>
        <Col>91-0000000000</Col>
        <Col>Lorem Ipsum</Col>

        <Col>Lorem Ipsum</Col>

        <Col className="d-flex justify-content-between">
          <Col onClick={onRole} role="button">
            {" "}
            <BsPencilFill
                  style={{
                    width: "0.95rem",
                    height: "0.95rem",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "2px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    marginBottom: "5px",
                  }}
                />
            <AddRole show={role.role} onChange={setRole} />
          </Col>
          <Col>
            {visible && (
              <button onClick={removeElement}>
                <RiDeleteBin6Fill />
              </button>
            )}
          </Col>
        </Col>
      </Row>
    </>
  );
};
export default ManageRole;
