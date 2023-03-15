import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const AmenitiesPop = ({ show }) => {
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     navigate(`/`);
//   };
const AmenitiesPop = (props) => {
  // const [showModal, setShowModal] = useState(false);

  // const onContinueHandler = () => {
  //   setShowModal((prev) => {
  //     return (prev = true);
  //   });
  // };
  const onSubmitHandler = () => {
    // debugger;
    console.log(props.show);
    props.onChange((prev) => ({ ...prev, amenities: false, submit: true }));
  };
  console.log(props.show);

  return (
    <>
      <Modal show={props.show.amenities}>
        <Modal.Header>
          <Modal.Title>Amenities</Modal.Title>
        </Modal.Header>
        {/* <Form onSubmit={handleSubmit}> */}
        <Form.Group className="mb-3">
          <Form.Label>Add Amenities</Form.Label>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div
              className="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button type="button" className="btn btn-secondary">
                3 Beds
              </button>
              <button type="button" className="btn btn-secondary">
                2 Bathrooms
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
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  {/* <a className="dropdown-item" href="#">Dropdown link</a>
      <a className="dropdown-item" href="#">Dropdown link</a> */}
                </div>
              </div>
            </div>
          </Container>

          <div className="d-flex justify-content-center align-items-center my-4">
            <Button
              type="submit"
              variant="primary"
              className="w-50 rounded-pill bg-color-primary"
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </div>
        </Form.Group>
        {/* </Form> */}
      </Modal>
    </>
  );
};
export default AmenitiesPop;
