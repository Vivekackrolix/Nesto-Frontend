import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
const sort = [
  { value: "Lorem Ipsum", label: "Lorem Ipsum" },
  { value: "Lorem ipsum", label: "Lorem Ipsum" },
];
const Report = (props) => {
  const submitHandler = () => {
    // props.onChange((prev) => ({ ...prev, repost: false, submit: true }));
    props.onHide(false);
    // props.onSubmit(true);
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onHide(false);
        }}
      >
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title>Report Abuse</Modal.Title>
        </Modal.Header>
        <br />

        <Container className=" dashboard__wrapper">
          <Form className="profile__form ps-2">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Reason *</h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Choose"
                options={sort}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
              />
              <br />
              <Form.Label>
                <h5>Any Comment</h5>
              </Form.Label>
              {/* <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm"
                style={{ background: "#F8F8F8" }}
              > */}
              <Form.Control
                className="rounded-0 d-flex justify-content-start"
                as="textarea"
                placeholder="Lorem Ipsum"
                style={{
                  fontFamily: "Bahnschrift",
                  height: "241px",
                }}
              />
              {/* <div
                  className="p-2 d-flex justify-content-between "
                  style={{
                    fontFamily: "Bahnschrift",

                    height: "341px",
                  }}
                ></div> */}
              {/* </Container> */}
              <br />
            </Form.Group>
          </Form>
        </Container>

        <div className="d-flex justify-content-center align-items-center">
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
