import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
// import CustomModal from "../../../../../components/common/CustomModal";
import { useNavigate } from "react-router-dom";
// import { RiStarSFill } from "react-icons/ri";
import "./Rating.css";
const Rating = (props) => {
  // const [over, setOver] = useState(0);
  const [rating1, setRating1] = useState(0);
  const [hover1, setHover1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [hover2, setHover2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [hover3, setHover3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [hover4, setHover4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [hover5, setHover5] = useState(0);
  // const [close, setClose] = useState(false);
  const [show, setShow] = useState(false);
  // const handleClose = () => setClose(false);
  // const navigate = useNavigate();
  const handleClose = () => setShow(false);
  // const submitHandler = () => {

  // debugger;
  // props.onHide(true);
  // props.onChange((prev) => ({ ...prev, rating: false, submit: true }));
  // navigate("/builder/home-dashboard/promoted");
  // };

  return (
    <>
      <Modal
        size="sm"
        show={props.show}
        // show={show}
        onHide={handleClose}
        // onHide={handleClose}
        // onClick={() => setClose(!close)}
      >
        <Modal.Header className="justify-content-center" closeButton>
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
                      className={index <= (hover1 || rating1) ? "on" : "off"}
                      onClick={() => setRating1(index)}
                      onMouseEnter={() => setHover1(index)}
                      onMouseLeave={() => setHover1(rating1)}
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
                      className={index <= (hover2 || rating2) ? "on" : "off"}
                      onClick={() => setRating2(index)}
                      onMouseEnter={() => setHover2(index)}
                      onMouseLeave={() => setHover2(rating2)}
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
                      className={index <= (hover3 || rating3) ? "on" : "off"}
                      onClick={() => setRating3(index)}
                      onMouseEnter={() => setHover3(index)}
                      onMouseLeave={() => setHover3(rating3)}
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
                      className={index <= (hover4 || rating4) ? "on" : "off"}
                      onClick={() => setRating4(index)}
                      onMouseEnter={() => setHover4(index)}
                      onMouseLeave={() => setHover4(rating4)}
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
                      className={index <= (hover5 || rating5) ? "on" : "off"}
                      onClick={() => setRating5(index)}
                      onMouseEnter={() => setHover5(index)}
                      onMouseLeave={() => setHover5(rating5)}
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
              // type="text"

              as="textarea"
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
                // onClick={submitHandler}
                onClick={handleClose}
                // onClick={() => {
                // props.onHide(false);
                // }}
              >
                Submit
              </Button>
            </div>
          </Form.Group>
        </Container>
      </Modal>
      {/* </CustomModal> */}
    </>
  );
};
export default Rating;
