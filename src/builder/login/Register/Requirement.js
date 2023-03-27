import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import CustomModal from "../../../components/common/CustomModal";
import axios from "axios";
import { useState } from "react";

const Requirement = (props) => {
  //   const [name, setName] = useState("");
  //   const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const onSubmitHandler = async () => {
    debugger;
    if (email.length <= 1) {
      //Set Error true
      return;
    }
    const formData = {
      name: props.name,
      phoneNumber: props.phone,
      email: email,
      typeOfProperty: "Apartment",
      locationProperty: "New Delhi",
      projectName: project,
      description: description,
    };
    const response = await axios.post(
      "http://13.233.149.97:3000/api/v1/builder/addShareYourIntern",
      formData
    );
    console.log(response);
    if (response.data) {
      props.onHide(false);
      props.onSucess(true);
    }
  };

  return (
    <>
      <CustomModal
        title="List your property/requirement"
        show={props.show}
        border
        closeBtn
        onHide={() => {
          props.onHide(false);
        }}
        cssClassName="nes__dashboard__modal"
        modalHeader
      >
        {/* <Modal.Header className="justify-content-center">
        <Modal.Title>List your property/requirement</Modal.Title>
      </Modal.Header> */}
        <Container className="pt-2 pb-5 dashboard__wrapper">
          <Form className="profile__form ps-2">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Name</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                value={props.name}
                readOnly
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
              />
              <Form.Label>
                <h5>Enter Phone Number</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                value={props.phone}
                readOnly
                // onChange={(e) => {
                //   setNumber(e.target.value);
                // }}
              />
              <Form.Label>
                <h5>Enter Email Address</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                // value={name}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Label>
                <h5>Type of Property</h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Choose"
                // options={add}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
                onChange={(e) => {
                  setProperty(e.target.value);
                }}
              />
              <Form.Label>
                <h5>Location of Property </h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Choose"
                // options={add}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />

              <Form.Label>
                <h5>Name of Project</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                onChange={(e) => {
                  setProject(e.target.value);
                }}
                // value={name}
              />

              <Form.Label>
                <h5>Brief Description</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                // value={name}
              />
            </Form.Group>
          </Form>
          <div className="d-grid mt-3">
            <Button
              variant="primary"
              size="md"
              className="rounded-pill border-0 bg-color-primary py-2"
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </div>
        </Container>
      </CustomModal>
      <br />
    </>
  );
};
export default Requirement;
