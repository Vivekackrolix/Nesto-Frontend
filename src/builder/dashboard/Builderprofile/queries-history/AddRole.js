import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
const sort = [
  { value: "Lorem Ipsum", label: "Lorem Ipsum" },
  { value: "Lorem ipsum", label: "Lorem Ipsum" },
];
const property = [
  { value: "Commercial", label: "Commercial" },
  { value: "Residential", label: "Residential" },
];
const AddRole = (props) => {
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, rating: false, submit: true }));
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onChange(false);
        }}
      >
        <Modal.Header className="justify-content-center">
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
                isMulti
                placeholder="Property Manager"
                options={sort}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
              />
              <br />
              <Form.Label>
                <h5>Name</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
              />
              <br />
              <Form.Label>
                <h5>Email</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
              />
              <br />
              <Form.Label>
                <h5>Mobile Number</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="tel"
                placeholder="Lorem Ipsum"
              />
              <br />
              <Form.Label>
                <h5>Select Properties</h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Property Manager"
                options={property}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
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
