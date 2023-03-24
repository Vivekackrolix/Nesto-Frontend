import { Button, Col, Form, Modal } from "react-bootstrap";
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
  { value: "Featured First", label: "Featured First" },
  { value: "Recent First", label: "Recent First" },
  { value: "Price: low to high", label: "Price: low to high" },
  { value: "Price: high to low", label: "Price: high to low" },
  { value: "Sort by A-Z", label: "Sort by A-Z" },
  { value: "Sort by Z-A", label: "Sort by Z-A" },
];
const property = [
  { value: "Commercial", label: "Commercial" },
  { value: "Residential", label: "Residential" },
];
const Filter = (props) => {
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => {
          props.onChange(false);
        }}
        animation={false}
        className=" p-3 ml-3"
      >
        <Modal.Header closeButton>
          <h5 className="mb-0">Filter Properties As Per Your Requirement</h5>
        </Modal.Header>
        <Modal.Body>
          <Form className="profile__form pb-4 row">
            <Col md={6} sm={12}>
              <Form.Group className="mb-4" controlId="email">
                <Form.Label>Sort By</Form.Label>

                <CreatableSelect isMulti placeholder="Select" options={sort} />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Location</Form.Label>

                <CreatableSelect
                  isMulti
                  placeholder="Add location"
                  options={options}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-4" controlId="phoneNumber">
                <Form.Label>Property Type</Form.Label>

                <CreatableSelect
                  isMulti
                  placeholder="Add property type"
                  options={property}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Unit Type</Form.Label>
                <CreatableSelect
                  isMulti
                  placeholder="Add unit type"
                  options={unit}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <RangeSlider title="range" min="40" max="160" />
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Builders</Form.Label>
                <CreatableSelect
                  isMulti
                  placeholder="Add builders"
                  options={builder}
                />
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label> Ratings</Form.Label>

                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-light btn-lg rounded-circle me-2"
                  >
                    1
                  </button>

                  <button
                    type="button"
                    className="btn btn-light btn-lg rounded-circle me-2"
                  >
                    2
                  </button>

                  <button
                    type="button"
                    className="btn btn-light btn-lg rounded-circle me-2"
                  >
                    3
                  </button>

                  <button
                    type="button"
                    className="btn btn-light btn-lg rounded-circle me-2"
                  >
                    4
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg rounded-circle me-2"
                  >
                    5
                  </button>
                </div>
              </Form.Group>
            </Col>
            <Col md={6} sm={12}>
              <Form.Group className="mb-4">
                <Form.Label>Construction Status</Form.Label>

                <div className="d-flex justify-content-around">
                  <h6>
                    <button type="button" className="btn btn-primary btn-sm">
                      Under Construction
                    </button>
                  </h6>
                  <h6>
                    <button type="button" className="btn btn-light btn-sm">
                      Ready to Move
                    </button>
                  </h6>
                  <h6>
                    <button type="button" className="btn btn-light btn-sm">
                      Possession Soon
                    </button>
                  </h6>
                </div>
              </Form.Group>
            </Col>
            <Col md={12} sm={12}>
              <Form.Group>
                <Form.Label>Show Only</Form.Label>
                <Form.Check
                  type={"checkbox"}
                  id={"discountOffer"}
                  className="mb-2"
                >
                  <Form.Check.Input type={"checkbox"} isValid />
                  <Form.Check.Label>
                    Properties with Discount and Offers
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  type={"checkbox"}
                  id={"exclusiveProperties"}
                  className="mb-2"
                >
                  <Form.Check.Input type={"checkbox"} isValid />
                  <Form.Check.Label>Exclusive Properties</Form.Check.Label>
                </Form.Check>
                <Form.Check
                  type={"checkbox"}
                  id={"promotedProperties"}
                  className="mb-2"
                >
                  <Form.Check.Input type={"checkbox"} isValid />
                  <Form.Check.Label>Promoted Properties</Form.Check.Label>
                </Form.Check>
              </Form.Group>
            </Col>
            <Col md={12} sm={12}>
              <div className="d-flex justify-content-center mt-1">
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-pill border-0 bg-color-primary py-2 px-5"
                  onClick={() => {
                    props.onHide(false);
                  }}
                >
                  Apply Filters
                </Button>
              </div>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Filter;
