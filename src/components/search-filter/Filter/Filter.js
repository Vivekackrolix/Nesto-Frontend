import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import RangeSlider from "../../../builder/dashboard/Builderprofile/range-slider/RangeSlider";

import CreatableSelect from "react-select/creatable";

const options = [
  { value: "Gurugram, Haryana", label: "Gurugram, Haryana" },
  { value: "Noida, Uttar Pradesh", label: "Noida, Uttar Pradesh" },
];
const unit = [
  { value: "2 BHK", label: "2 BHK" },
  { value: "3 BHK", label: "3 BHK" },
];
const builder = [
  { value: "Lorem Ipsum", label: "Lorem Ipsum" },
  { value: "Lorem ipsum", label: "Lorem ipsum" },
];
const sort = [
  { value: "Lorem Ipsum", label: "Lorem Ipsum" },
  { value: "Lorem ipsum", label: "Lorem Ipsum" },
];
const property = [
  { value: "Commercial", label: "Commercial" },
  { value: "Residential", label: "Residential" },
];
const Filter = (props) => {
  return (
    <>
      <Modal
        size="xl"
        show={props.show}
        onHide={() => {
          props.onChange(false);
        }}
        animation={false}
        className=" p-3 ml-3"
      >
        <Container className="pt-5 pb-4 dashboard__wrapper ">
          <Row className="gap-4">
            <Col>
              <Form className="profile__form ps-2">
                <Form.Group className="mb-4" controlId="email">
                  <Form.Label>
                    <h5>Sort By</h5>
                  </Form.Label>

                  <CreatableSelect
                    isMulti
                    placeholder="Select"
                    options={sort}
                    // styles={{ background: "#F8F8F8" }}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="phoneNumber">
                  <Form.Label>
                    <h5>Property Type</h5>
                  </Form.Label>

                  <CreatableSelect
                    isMulti
                    placeholder="Add more"
                    options={property}
                  />
                </Form.Group>
              </Form>

              <RangeSlider title="range" min="40" max="160" />

              <h5> Ratings</h5>

              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  class="btn btn-light btn-lg rounded-circle "
                >
                  1
                </button>

                <button
                  type="button"
                  class="btn btn-light btn-lg rounded-circle"
                >
                  2
                </button>

                <button
                  type="button"
                  class="btn btn-light btn-lg rounded-circle"
                >
                  3
                </button>

                <button
                  type="button"
                  class="btn btn-light btn-lg rounded-circle"
                >
                  4
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-lg rounded-circle"
                >
                  5
                </button>
              </div>

              <br />
              <h5>Show Only</h5>

              <h6>
                <button
                  type="button"
                  className="btn bounded btn-outline-dark"
                ></button>
                Properties with Discount and Offers
              </h6>

              <h6>
                <button
                  type="button"
                  className="btn bounded btn-outline-dark"
                ></button>
                Exclusive Properties
              </h6>

              <h6>
                <button
                  type="button"
                  className="btn bounded btn-outline-dark"
                ></button>
                Promoted Properties
              </h6>
            </Col>
            <Col>
              <Form className="profile__form">
                <Form.Group className="mb-4">
                  <Form.Label>
                    <h5>Location</h5>
                  </Form.Label>

                  <CreatableSelect
                    isMulti
                    placeholder="Add more"
                    options={options}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>
                    <h5>Unit Type</h5>
                  </Form.Label>
                  <CreatableSelect
                    isMulti
                    placeholder="Add more"
                    options={unit}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>
                    <h5>Builders</h5>
                  </Form.Label>
                  <CreatableSelect
                    isMulti
                    placeholder="Add more"
                    options={builder}
                  />
                </Form.Group>
              </Form>

              <h5>Construction Status</h5>

              <div className="d-flex justify-content-around">
                <h6>
                  <button type="button" class="btn btn-primary btn-sm">
                    Under Construction
                  </button>
                </h6>
                <h6>
                  <button type="button" class="btn btn-light btn-sm">
                    Ready to Move
                  </button>
                </h6>
                <h6>
                  <button type="button" class="btn btn-light btn-sm">
                    Possession Soon
                  </button>
                </h6>
              </div>
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
