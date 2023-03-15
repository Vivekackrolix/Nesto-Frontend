import { Button, Container, Modal } from "react-bootstrap";

const Report = (props) => {
  const submitHandler = () => {
    props.onChange((prev) => ({ ...prev, repost: false, submit: true }));
  };
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header className="justify-content-center">
          <Modal.Title>Report Abuse</Modal.Title>
        </Modal.Header>
        <br />
        <br />
        <Container className="pt-1 pb-5 dashboard__wrapper">
          <h5>Reason*</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div className="p-2 d-flex justify-content-between ">
              <h5 style={{ fontFamily: "Bahnschrift", opacity: "0.5" }}>
                {" "}
                Choose
              </h5>
            </div>
          </Container>
          <br />
          <h5>Any Comment</h5>
          <Container
            className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
            style={{ background: "#F8F8F8" }}
          >
            <div
              className="p-2 d-flex justify-content-between "
              style={{
                fontFamily: "Bahnschrift",

                height: "341px",
              }}
            ></div>
          </Container>
          <br />
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
      </Modal>
    </>
  );
};
export default Report;
