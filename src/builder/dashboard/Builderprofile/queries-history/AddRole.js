import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// const finance = [
//   { value: "Finance Manager", label: "Finance Manager" },
//   { value: "Property Manager", label: "Property Manager" },
// ];
// const property = [
//   { value: "Commercial", label: "Commercial" },
//   { value: "Residential", label: "Residential" },
// ];
// const add =
// [  {value:"Financial Manager", label:"Financial Manager" },
//   {value:"Property Manager", label:"Property Manager"}],
// [itm.formData];
const AddRole = (props) => {
  const [add, setAdd] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [property, setProperty] = useState("");
  // const navigate = useNavigate();
  const submitHandler = async () => {
    const formData = {
      add: [],
      name,
      email: mail,
      mobileNumber: number,
      selectProperties: [],
    };
    console.log(formData);
    const response = await axios.put(
      "http://13.233.149.97:3000/api/v1/roles/updateRoles",
      formData,
      {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNjkwNTY1MzJmMjU2OTQ3OWZjOWQiLCJpYXQiOjE2Nzg3OTc1ODMsImV4cCI6MTY4NjU3MzU4M30.8QjZtAmk342PMxa0CvGdqfp36BWk6lJ4QFyN6f1MO_A",
        },
      }
    );
    console.log(response);
    // props.onChange((prev) => ({ ...prev, rating: false, submit: true }));
    // navigate("/builder/home-dashboard/profile");
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onHide(false);
        }}
      >
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <br />
        <Container className="pt-2 pb-5 dashboard__wrapper">
          <Form className="profile__form ps-2">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Add</h5>
              </Form.Label>
              <CreatableSelect
                // isMulti
                placeholder="Property Manager"
                value={add}
                // options={finance}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
                onChange={(e) => {
                  setAdd(e.target.value);
                }}
              />
              <br />
              <Form.Label>
                <h5>Name</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
              <br />
              <Form.Label>
                <h5>Email</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
              <br />
              <Form.Label>
                <h5>Mobile Number</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="tel"
                placeholder="Lorem Ipsum"
                maxLength="10"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  console.log(e.target);
                }}
              />
              <br />
              <Form.Label>
                <h5>Select Properties</h5>
              </Form.Label>
              <CreatableSelect
                // isMulti
                placeholder="Property Manager"
                value={property}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
                onChange={(e) => {
                  setProperty(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Container>
        <div className="d-flex justify-content-center align-items-center my-2">
          <Button
            variant="primary"
            className="w-50 rounded-pill bg-color-primary"
            onClick={submitHandler}
          >
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default AddRole;