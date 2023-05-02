import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { useEffect, useState } from "react";
import axios from "axios";
import { postAPI } from "../../../../Api/ApiRequest";
import { apiEndpoints } from "../../../../Api/ApiEndpoint";

// const reason = [
//   { value: {data.reason}, label: {data.reason} },

// ];
const Report = (props) => {
  const [reason, setReason] = useState({});
  const [comments, setComments] = useState({});

  const submitHandler = async () => {
    const formData = {
      reason: {},
      comments: {},
    };
    // console.log(formData);

    const response = await postAPI(apiEndpoints.addRaiseDispute, formData);
    console.log(response.data);
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
                // options={reason}
                value={reason}
                onChange={(e) => {
                  console.log(e.target.value);
                  setReason(e.target.value);
                }}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
              />
              <br />
              <Form.Label>
                <h5>Any Comment</h5>
              </Form.Label>

              <Form.Control
                className="rounded-0 d-flex justify-content-start"
                as="textarea"
                placeholder="Lorem Ipsum"
                value={comments}
                onChange={(e) => {
                  console.log(e.target.value);
                  setComments(e.target.value);
                }}
                style={{
                  fontFamily: "Bahnschrift",
                  height: "241px",
                }}
              />
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
