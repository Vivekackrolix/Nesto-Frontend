import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { RiStarSFill } from "react-icons/ri";

const Rating = (props) => {
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, rating: false, submit: true }));
  };
  //   const placeholder = "Write a Review";
  return (
    <>
      <Modal show={props.show} onHide={submitHandler}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <br />
        <Form.Group className="mb-3">
          <Form.Label className="d-flex justify-content-between">
            Over All Rating
            {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))}
          </Form.Label>
          <br />
          <Form.Label className="d-flex justify-content-between">
            Builder Behaviour{" "}
            {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))}
          </Form.Label>
          <br />
          <Form.Label className="d-flex justify-content-between">
            Builder Punctuality{" "}
            {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))}
          </Form.Label>
          <br />
          <Form.Label className="d-flex justify-content-between">
            Builder Clealiness{" "}
            {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))}
          </Form.Label>
          <br />
          <Form.Label className="d-flex justify-content-between">
            Rate the Satisfaction{" "}
            {Array.from({ length: 5 }, (_, index) => (
              <RiStarSFill color="#FFB630" />
            ))}
          </Form.Label>
          <br />

          <Container
            className="dashboard__wrapper__filter border border-light"
            style={{
              background: "#F8F8F8",
              width: "497.81px",
              height: " 223.31px",
              left: "340.04px",
              top: "646.76px",
            }}
            // placeholder="Write a Review"
          >
            {/* <form action="">
              <input type="text" placeholder={placeholder} />
            </form> */}
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
export default Rating;
