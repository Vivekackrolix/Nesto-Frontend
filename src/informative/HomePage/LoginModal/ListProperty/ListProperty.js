import React from "react";
import CustomModal from "../../../../components/common/CustomModal";
import "./ListProperty.css";
import { Button, Form, InputGroup } from "react-bootstrap";

const ListProperty = ({ show, onHide }) => {
  return (
    <CustomModal
      title="List your property / requirement"
      show={show}
      closeBtn
      modalHeader
      size="md"
      onHide={onHide}
    >
      <div className="list-property">
        <div className="">
          <Form>
            <InputGroup className="mb-0">
              <Form.Control
                name="Name"
                className="rounded input list-property-input-label"
                required
                type="text"
                placeholder=" "
              />
              <Form.Label className="placeholder">Name</Form.Label>
            </InputGroup>
            <br />
            <InputGroup className="mb-0">
              <Form.Control
                name="phone"
                className="rounded input list-property-input-label"
                required
                type="text"
                maxLength="10"
                placeholder=" "
              />
              <Form.Label className="placeholder">Phone Number</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please enter valid phone number.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Input is valid!
              </Form.Control.Feedback>
            </InputGroup>
            <br />
            <InputGroup className="mb-0">
              <Form.Control
                name="Email"
                className="rounded input list-property-input-label"
                required
                type="text"
                placeholder=" "
              />
              <Form.Label className="placeholder">Email</Form.Label>
            </InputGroup>
            <br />

            <InputGroup>
              <Form.Select
                aria-label="Property type"
                name="Property Type"
                className="rounded input list-property-option"
                required
                type="text"
                placeholder=" "
              >
                <option className="list-property-option" value="flats-apartments">Flats / Apartment</option>
                <option className="list-property-option" value="farmhouse-villa">Farmhouse / Villa</option>
                <option className="list-property-option" value="plots-lands">Plots / Lands</option>
                <option className="list-property-option" value="commercial">Commercial</option>
              </Form.Select>
              <Form.Label className="placeholder">
                Select Property Type
              </Form.Label>
            </InputGroup>

            <br />

            <InputGroup>
              <Form.Select
                aria-label="Property type"
                name="Property Type"
                className="rounded input list-property-option"
                required
                type="text"
                placeholder=" "
              >
                <option className="list-property-option" value="location-1">Location-1</option>
                <option className="list-property-option" value="location-2">Location-2</option>
                <option className="list-property-option" value="location-3">Location-3</option>
                <option className="list-property-option" value="location-4">Location-4</option>
              </Form.Select>
              <Form.Label className="placeholder">
                Select Property Location
              </Form.Label>
            </InputGroup>

            <div className="d-grid mt-2">
              <Button
                variant="primary"
                size="md"
                className="rounded border-0 bg-color-primary py-2 list-property-btn"
              >
                Register
              </Button>
            </div>
          </Form>

          {/* <form>
            <div className="list-property-input-div">
              <label
                for="list-property-input-1"
                className="list-property-input-label"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="list-property-input"
                required
                id="list-property-input-1"
              />
            </div>
            <div className="list-property-input-div">
              <label
                for="list-property-input-2"
                className="list-property-input-label"
              >
                Phone Number
              </label>
              <input
                type="telephone"
                placeholder="Enter Phone Number"
                className="list-property-input"
                required
                id="list-property-input-2"
              />
            </div>
            <div className="list-property-input-div">
              <label
                for="list-property-input-3"
                className="list-property-input-label"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="list-property-input"
                required
                id="list-property-input-3"
              />
            </div>
            <div className="list-property-input-div">
              <label
                for="list-property-input-4"
                className="list-property-input-label"
              >
                Select Types of Property
              </label>
              <select
                className="list-property-input"
                required
                id="list-property-input-4"
              >
                <option className="list-property-option">
                  Types of Property
                </option>
                <option className="list-property-option">Delhi</option>
                <option className="list-property-option">Delhi</option>
                <option className="list-property-option">Delhi</option>
                <option className="list-property-option">Delhi</option>
              </select>
            </div>
            <div className="list-property-input-div">
              <label
                for="list-property-input-5"
                className="list-property-input-label"
              >
                Select Location of Property
              </label>
              <select
                className="list-property-input"
                required
                id="list-property-input-5"
              >
                <option className="list-property-option">
                  Location of Property
                </option>
                <option className="list-property-option">Delhi</option>
                <option className="list-property-option">Delhi</option>
                <option className="list-property-option">Delhi</option>
                <option className="list-property-option">Delhi</option>
              </select>
            </div>
            <button className="list-property-btn">Register</button>
          </form> */}
        </div>
      </div>
    </CustomModal>
  );
};

export default ListProperty;
