import { useState } from "react";
import { Button, Container, Form, FormGroup, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
const sort = [
  { value: "3 Beds", label: "3 Beds" },
  { value: "2 Bathrooms", label: "2 Bathrooms" },
];
const SubscriptionAdd = (props) => {
  // const onSubmitHandler = () => {
  //   props.onHide(false);
  //   props.onSubmit(true);
  // };
  // console.log(props.show);

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onHide(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-center">
            Property
          </Modal.Title>
        </Modal.Header>

        <Container className="pt-2  dashboard__wrapper">
          <Form className="profile__form ">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Add Property</h5>
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
            type="submit"
            variant="primary"
            className="w-50 rounded-pill bg-color-primary"
            //   onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </div>
        {/* </Form.Group> */}
        {/* </Form> */}
      </Modal>
    </>
  );
};
export default SubscriptionAdd;
