import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
// import { RiStarSFill } from "react-icons/ri";
import "./Rating.css";
const Rating = (props) => {
  const [rating, setRating] = useState(0);
  const [over, setOver] = useState(0);
  const [hover, setHover] = useState(0);

  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, rating: false, submit: true }));
  };

  return (
    <>
      <Modal
        size="sm"
        show={props.show}
        onHide={submitHandler}
        // onHide={() => {
        //   props.submitHandler(false);
        // }}
      >
        <Modal.Header className="justify-content-center">
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <br />
        <Container className=" dashboard__wrapper">
          <Form.Group className="mb-3">
            <Form.Label className="d-flex justify-content-between">
              Over All Rating
              {/* {Array.from({ length: 5 }, (_, index) => (
                <RiStarSFill color="#FFB630" />
              ))} */}
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733; </span>
                    </button>
                  );
                })}
              </div>
            </Form.Label>
            <br />
            <Form.Label className="d-flex justify-content-between">
              Builder Behaviour{" "}
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733; </span>
                    </button>
                  );
                })}
              </div>
            </Form.Label>
            <br />
            <Form.Label className="d-flex justify-content-between">
              Builder Punctuality{" "}
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733; </span>
                    </button>
                  );
                })}
              </div>
            </Form.Label>
            <br />
            <Form.Label className="d-flex justify-content-between">
              Builder Clealiness{" "}
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733; </span>
                    </button>
                  );
                })}
              </div>
            </Form.Label>

            <br />
            <Form.Label className="d-flex justify-content-between">
              Rate the Satisfaction{" "}
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <span className="star">&#9733; </span>
                    </button>
                  );
                })}
              </div>
            </Form.Label>
            <br />

            <Form.Control
              className="rounded-0 d-flex justify-content-start"
              type="text"
              placeholder="Lorem Ipsum"
              style={{
                fontFamily: "Bahnschrift",
                height: "241px",
              }}
            />

            <div className="d-flex justify-content-center align-items-center my-4">
              <Button
                variant="primary"
                className="w-100 rounded-pill bg-color-primary"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </div>
          </Form.Group>
        </Container>
      </Modal>
    </>
  );
};
export default Rating;
