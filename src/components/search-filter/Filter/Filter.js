import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const Filter = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onChange(false);
        }}
        animation={false}
      >
        <Row>
          <Col>
            <Row>
              Sort BY
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}> Select</h5>
                </div>
              </Container>
            </Row>
            <Row>
              Property Type
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}> Commercial</h5>
                </div>
              </Container>
            </Row>
          </Col>
          <Col>
            <Row>
              Location
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}>
                    {" "}
                    Gurugram,Haryana
                  </h5>
                </div>
              </Container>
            </Row>
            <Row>
              Unit Type
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}> 2 BHK</h5>
                </div>
              </Container>
            </Row>
            <Row>
              Builders
              <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              >
                <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}>Lorem Ipsum</h5>
                </div>
              </Container>
            </Row>
            <Row>Construction Status</Row>
          </Col>
        </Row>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        <Button varient="primary" className="rounded-pill my-2 p-2">
          Apply Filters
        </Button>
      </Modal>
    </>
  );
};

export default Filter;
