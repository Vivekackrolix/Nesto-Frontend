import { Button, Col, Container, Modal, Row } from "react-bootstrap";
// import RangeSlider from "../../range-slider/RangeSlider";
// import { Range } from "react-range";
// import { useState } from "react";

const Filter = (props) => {
  // const Range =({title,min,max}) => {
  //   const [values, setValues] = useState([0, 160]);

  //   const handleChange = (newValues) => {
  //     setValues(newValues);
  //   };
  return (
    <>
      <Modal
        size="xl"
        show={props.show}
        onHide={() => {
          props.onChange(false);
        }}
        animation={false}
        className=" p-2 ml-2"
        // style={{
        //   width: "1261.87px",
        //   height: "1012.34px",
        //   left: "106.96px",
        //   top: "715.26px",
        // }}
      >
        <Container className="pt-5 pb-4 dashboard__wrapper ">
          <Row className="gap-5">
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
              <br />
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
              <br />
              {/* <Row>Price range</Row> */}
              <Row>
                <label for="customRange2" class="form-label">
                  Price range
                </label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="200"
                  id="customRange2"
                />

                {/* <RangeSlider /> */}
                {/* <Form.Group controlId="rangeSlider" className="mb-4">
                <Form.Label className="mb-4">
                  <span className="text-dark">*</span>
                </Form.Label>
                <Range
                  values={values}
                  step={1}
                  min={min}
                  max={max}
                  onChange={handleChange}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        backgroundColor: "#ddd",
                        borderRadius: "3px",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        backgroundColor: "#278FD9",
                        borderRadius: "50%",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  )}
                />
              </Form.Group> */}
              </Row>
              <br />
              <Row>
                Ratings
                {/* <Container
                className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
                style={{ background: "#F8F8F8" }}
              > */}
                {/* <div className="p-2 d-flex justify-content-between ">
                  <h5 style={{ fontFamily: "Bahnschrift" }}> Commercial</h5>
                </div> */}
                <Row>
                  <Col>
                    <button type="button" class="btn btn-light rounded-circle">
                      1
                    </button>
                  </Col>
                  <Col>
                    <button type="button" class="btn btn-light rounded-circle">
                      2
                    </button>
                  </Col>
                  <Col>
                    <button type="button" class="btn btn-light rounded-circle">
                      3
                    </button>
                  </Col>
                  <Col>
                    <button type="button" class="btn btn-light rounded-circle">
                      4
                    </button>
                  </Col>
                  <Col>
                    <button
                      type="button"
                      className="btn btn-primary rounded-circle"
                    >
                      5
                    </button>
                  </Col>
                </Row>
                {/* </Container> */}
              </Row>
              <br />
              <Row>Show Only</Row>
              <Row>
                <Col>
                  <button
                    type="button"
                    className="btn bounded btn-outline-dark"
                  ></button>
                  Properties with Discount and Offers
                </Col>{" "}
              </Row>
              <Row>
                <Col>
                  <button
                    type="button"
                    className="btn bounded btn-outline-dark"
                  ></button>
                  Exclusive Properties
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    type="button"
                    className="btn bounded btn-outline-dark"
                  ></button>
                  Promoted Properties
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                Location
                <Container
                  className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4 btn-group gap-1"
                  role="group"
                  aria-label="Button group with nested dropdown"
                  style={{ background: "#F8F8F8" }}
                >
                  {/* <div
                    class="btn-group gap-2"
                    role="group"
                    aria-label="Button group with nested dropdown"
                  > */}
                  <button type="button" class="btn btn-secondary">
                    Gurugram,Haryana
                  </button>
                  <button type="button" class="btn btn-secondary">
                    Karnal,Haryana
                  </button>

                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      class="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Add More
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      {/* <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a> */}
                    </div>
                  </div>
                  {/* </div> */}
                </Container>
              </Row>
              <br />
              <Row>
                Unit Type
                <Container
                  className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4 btn-group gap-1"
                  role="group"
                  aria-label="Button group with nested dropdown"
                  style={{ background: "#F8F8F8" }}
                >
                  {/* <div
                  class="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                > */}
                  <button type="button" class="btn btn-secondary">
                    2 BHK
                  </button>
                  <button type="button" class="btn btn-secondary">
                    3 BHK
                  </button>

                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      class="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Add More
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      {/* <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a> */}
                    </div>
                  </div>
                  {/* </div> */}
                </Container>
              </Row>
              <br />
              <Row>
                Builders
                <Container
                  className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4 btn-group gap-1"
                  role="group"
                  aria-label="Button group with nested dropdown"
                  style={{ background: "#F8F8F8" }}
                >
                  {/* <div
                  class="btn-group"
                  role="group"
                  aria-label="Button group with nested dropdown"
                > */}
                  <button type="button" class="btn btn-secondary">
                    Lorem Ipsum
                  </button>
                  <button type="button" class="btn btn-secondary">
                    Lorem Ipsum
                  </button>

                  <div class="btn-group" role="group">
                    <button
                      id="btnGroupDrop1"
                      type="button"
                      class="btn btn-secondary dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Add More
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      {/* <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a> */}
                    </div>
                  </div>
                  {/* </div> */}
                </Container>
              </Row>
              <br />
              <Row>Construction Status</Row>
              <Row>
                <Col>
                  <button type="button" class="btn btn-primary btn-sm">
                    Under Construction
                  </button>
                </Col>
                <Col>
                  <button type="button" class="btn btn-light btn-sm">
                    Ready to Move
                  </button>
                </Col>
                <Col>
                  <button type="button" class="btn btn-light btn-sm">
                    Possession Soon
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="d-flex justify-content-center mt-1">
          <Button
            variant="primary"
            size="sm"
            className="w-50 rounded-pill border-0 bg-color-primary py-3 my-5"
          >
            Apply Filters
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Filter;
