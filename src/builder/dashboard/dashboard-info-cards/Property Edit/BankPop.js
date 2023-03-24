import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
const bank = [
  { value: "AXIS", label: "AXIS " },
  { value: "HDFC ", label: "HDFC " },
];
const BankPop = (props) => {
  const onSubmitHandler = () => {
    props.onHide(false);
    props.onSubmit(true);
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onHide(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Bank</Modal.Title>
        </Modal.Header>
        <Container className="pt-2  dashboard__wrapper">
          <Form className="profile__form ">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Add Bank</h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Add Bank"
                options={bank}
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
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default BankPop;
