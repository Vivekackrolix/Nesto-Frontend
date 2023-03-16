import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
const sort = [
  { value: "Hospital (200 m)", label: "Hospital (200 m)" },
  { value: "Canteen (200 m)", label: "Canteen (200 m)" },
];
const LocationPop = (props) => {
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, location: false, submit: true }));
  };
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Location Advantages</Modal.Title>
        </Modal.Header>
        <Container className="pt-2  dashboard__wrapper">
          <Form className="profile__form ">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Add Locations</h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Property Manager"
                options={sort}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
              />
              <br />
            </Form.Group>
          </Form>
        </Container>

        <div className="d-flex justify-content-center align-items-center my-4">
          <Button
            variant="primary"
            className="w-50 rounded-pill bg-color-primary"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default LocationPop;
