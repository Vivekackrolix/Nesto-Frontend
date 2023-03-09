import { Button, Container, Form, Modal } from "react-bootstrap";

const LocationPop = ({ show }) => {
  return (
    <>
      {/* <h1>Amenities</h1>
      <Form.Group className="mb-3">
        <Form.Label>Add Amenities</Form.Label>

        <Button
          variant="primary"
          className="w-100 rounded-pill bg-color-primary"
          as={Link}
          to="/builder/home-dashboard/proertyedit"
        >
          Submit
        </Button>
      </Form.Group> */}
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Location Advantages</Modal.Title>
        </Modal.Header>
        <Form.Group className="mb-3">
          <Form.Label>Add Location</Form.Label>
          <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
            <div className="p-1 d-flex justify-around  dropdown">
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
            </div>
          </Container>

          <div className="d-flex justify-content-center align-items-center my-4">
            <Button
              variant="primary"
              className="w-50 rounded-pill bg-color-primary"
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
