import { Button, Form, Modal, Col } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AddRole = (props) => {
  const [add, setAdd] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [property, setProperty] = useState("");
  const navigate = useNavigate();

  const submitHandler = async () => {
    const formData = {
      add: [],
      name,
      email: mail,
      mobileNumber: number,
      selectProperties: [],
    };
    // console.log(formData);
    const response = await axios.post(
      "http://13.233.149.97:3000/api/v1/roles/addRoles",

      formData,
      {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNjkwNTY1MzJmMjU2OTQ3OWZjOWQiLCJpYXQiOjE2Nzg3OTc1ODMsImV4cCI6MTY4NjU3MzU4M30.8QjZtAmk342PMxa0CvGdqfp36BWk6lJ4QFyN6f1MO_A",
        },
      }
    );
    // console.log(response);
    // props.onChange((prev) => ({ ...prev, rating: false, submit: true }));
    navigate("/builder/home-dashboard/profile");
  };
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => {
          props.onChange(false);
        }}
        animation={false}
      >
        <Modal.Header closeButton>
          <h5>Add Role</h5>
        </Modal.Header>
        <Modal.Body>
          <Form className="profile__form ps-2 row">
            <Col md={6} sm={12}>
              <Form.Group className="mb-4" controlId="email">
                <Form.Label>Add</Form.Label>
                <CreatableSelect
                  // isMulti
                  placeholder="Property Manager"
                  value={add}
                  // options={finance}
                  className="rounded-0"
                  onChange={(e) => {
                    setAdd(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="rounded-2"
                  type="text"
                  placeholder="Lorem Ipsum"
                  value={name}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="rounded-2"
                  type="text"
                  placeholder="Lorem Ipsum"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12} className="mb-4">
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  className="rounded-2"
                  type="tel"
                  placeholder="Lorem Ipsum"
                  maxLength="10"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                    // console.log(e.target);
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={12} sm={12}>
              <Form.Group>
                <Form.Label>Select Properties</Form.Label>
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
            </Col>
            <Col md={12} sm={12} className="text-center mt-4">
              <Button
                variant="primary"
                className="w-100 rounded-2 bg-color-primary"
                onClick={submitHandler}
              >
                Add
              </Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddRole;
