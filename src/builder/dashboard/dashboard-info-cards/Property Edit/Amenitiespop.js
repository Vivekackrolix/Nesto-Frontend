import { Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AmenitiesPop = ({ show }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("s");
    navigate(`/`);
  };
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Amenities</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Add Amenities</Form.Label>
            <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
              <div className="p-1 d-flex justify-around ">
                <button type="button" className="btn btn-secondary">
                  3 Beds
                </button>
                <button type="button" className="btn btn-secondary">
                  2 bathrooms
                </button>
              </div>
            </Container>

            <div className="d-flex justify-content-center align-items-center my-4">
              <Button
                type="submit"
                variant="primary"
                className="w-50 rounded-pill bg-color-primary"
              >
                Submit
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};
export default AmenitiesPop;
