import { Button, Container, Modal } from "react-bootstrap";
import submit from "../../../Images/submit.png";

const SubmitPop = (props) => {
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, submit: false }));
  };
  return (
    <Container
    // className="pt-5 pb-4 dashboard__wrapper"
    >
      <br />
      <Modal show={props.show}>
        <div className="">
          <h6 className="w-1  d-flex justify-content-center">
            <img src={submit} alt="" />
          </h6>
          <div className="align-item-center">
            <Modal.Title>Request Submitted</Modal.Title>
            <Modal.Title style={{ color: "#838BA1" }}>
              Changes suggested by you will be live.Post review by Nestohub team
            </Modal.Title>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-2">
          <Button
            type="submit"
            variant="primary"
            className="w-80 rounded-pill bg-color-primary py-3 my-2 mx-3 col-5"
            onClick={submitHandler}
          >
            Done
          </Button>
        </div>
      </Modal>
    </Container>
  );
};
export default SubmitPop;
