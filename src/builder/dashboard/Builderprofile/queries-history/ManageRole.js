import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddRole from "./AddRole";
import { BsPencilFill } from "react-icons/bs";
// import delete from "../../../Images/editbutton.png";

const ManageRole = (props) => {
  const [role, setRole] = useState(false);
  const onRole = () => {
    setRole((prev) => ({ ...prev, role: true }));
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
            <RiDeleteBin6Fill />
          </Col>
        </Col>
      </Row>
    </>
  );
};
export default ManageRole;
