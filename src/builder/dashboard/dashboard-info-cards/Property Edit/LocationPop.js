import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

const LocationPop = (props) => {
  // const [showModal, setShowModal] = useState(false);

  // const handleSubmit = () => {
  //   setShowModal((prev) => {
  //     return (prev = true);
  //   });
  // };
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, location: false, submit: true }));
  };
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Location Advantages</Modal.Title>
        </Modal.Header>
        <Form.Group className="mb-3">
          <Form.Label>Add Location</Form.Label>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            {/* <div className="p-1 d-flex justify-around  dropdown">
              <button type="button" class="btn btn-secondary">
                Hospital (200 m)
              </button>
              <button
                className="btn btn-secondary dropdown-toggle mx-2"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Add More
              </button>
            </div> */}
            <div
              className="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button
                type="button"
                className="btn btn-secondary"
                style={{ background: "#EFEFEF" }}
              >
                Hospital(200m)
              </button>

              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Add more
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="btnGroupDrop1"
                ></div>
              </div>
            </div>
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
        </Form.Group>
      </Modal>
    </>
  );
};
export default LocationPop;
