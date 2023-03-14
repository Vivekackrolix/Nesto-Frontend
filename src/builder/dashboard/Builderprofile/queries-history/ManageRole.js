import { Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { RiDeleteBin6Fill } from "react-icons/ri";
import editbutton from "../../../Images/editbutton.png";
// import delete from "../../../Images/editbutton.png";

const ManageRole = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Col>2111321321</Col>
        <Col>91-0000000000</Col>
        <Col>Lorem Ipsum</Col>

        <Col>Lorem Ipsum</Col>
        {/* <Col>{editbutton}</Col> */}
        <Col className="d-flex justify-content-between">
          <Col>
            {" "}
            <img src={editbutton} alt="edit" />
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
