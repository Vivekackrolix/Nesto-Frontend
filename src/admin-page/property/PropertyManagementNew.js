import { GoPlus } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import Toggle from "react-toggle";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../Admin.css";

const PropertyManagementNew = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const fileList = Array.from(event.dataTransfer.files);
    setFiles([...files, ...fileList]);
  };

  const handleFileInputChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles([...files, ...fileList]);
  };

  return (
    <Row>
      <Col xs={12}>{/* <Sidebar /> */}</Col>
      <Col xs={12} style={{ backgroundColor: "#F5F5F5" }} className="py-4">
        <div className="pb-3  d-flex justify-content-between">
          <h3>Property Listingfbb</h3>
          <div
            className="bg-primary py-2 px-5 flex text-white"
            onClick={() => setLgShow(true)}
          >
            <span>+</span>
            <p>New Property</p>
          </div>
        </div>
        <div className="d-flex gap-2 property-listing-menu">
          <div className="content gap-2 border">
            <span>life</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>health</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>helong-term disabilityalth</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content gap-2 border">
            <span>helong-term disabilityalth</span>
            <RxCross1 className="" style={{ color: "black" }} size={12} />
          </div>
          <div className="content text-primary gap-2 border">
            <GoPlus
              style={{ color: "black" }}
              className="text-primary"
              size={12}
            />
            <span>Add Filter</span>
          </div>
          <div className="content text-primary gap-2 border">
            <span>Delete All</span>
          </div>
        </div>
        <div className="my-4">
          <h6>Showing 10 Property Listing</h6>
        </div>
        <table class="table propery-management-table">
          <thead className="">
            <tr>
              <th scope="col " className="heading">
                <div className="d-flex gap-2  justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>
                    # <img src="/assets/column-sorting.png" alt="" />
                  </span>
                </div>
              </th>
              <th scope="col " className="heading">
                Property Type
              </th>
              <th scope="col " className="heading">
                Location
              </th>
              <th scope="col " className="heading">
                Price
              </th>
              <th scope="col " className="heading">
                Brokerage
              </th>
              <th scope="col " className="heading">
                Tags
              </th>
              <th scope="col " className="heading">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>1</span>
                </div>
              </th>
              <td>
                <div>2 BHK</div>
              </td>
              <td>
                {" "}
                <div>Sec-29</div>
                <p className="num">Gurugram</p>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div>
                  <select name="" id="" className="property-tags">
                    <option value="">Recent</option>
                    <option value="">Featured</option>
                    <option value="">Best Seller</option>
                    <option value="">Promotional</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <label>
                    <Toggle
                      // defaultChecked={this.state.tofuIsReady}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <input type="checkbox" name="" id="" />
                  <span>1</span>
                </div>
              </th>
              <td>
                <div>2 BHK</div>
              </td>
              <td>
                {" "}
                <div>Sec-29</div>
                <p className="num">Gurugram</p>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div className="property-price">-₹270.00</div>
              </td>
              <td>
                <div>
                  <select name="" id="" className="property-tags">
                    <option value="">Recent</option>
                    <option value="">Featured</option>
                    <option value="">Best Seller</option>
                    <option value="">Promotional</option>
                  </select>
                </div>
              </td>
              <td>
                <div>
                  <label>
                    <Toggle
                      // defaultChecked={this.state.tofuIsReady}
                      icons={false}
                      // onChange={this.handleTofuChange}
                    />
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Modal */}
        <>
          <Modal
            size="xl"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Add Property
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container fluid="lg" className="profile-upload p-0">
                <Row>
                  <Col md={4} className="d-flex flex-wrap gap-3">
                    <div>
                      <p>Onboarding</p>
                      <p>Property Description</p>
                      <p>Floor Plan</p>
                      <p>Brokerage</p>
                    </div>
                  </Col>

                  <Col md={8}>
                    <Row className="border-bottom mb-3 ">
                      <Col lg={6} md={6} sm={12}>
                        {!!files.length > 0 && (
                          <ul className="list-unstyled d-flex gap-3">
                            {files.map((file, index) => (
                              <li
                                key={index}
                                className="d-flex justify-content-center align-items-center"
                              >
                                <img
                                  src={`/assets/upload/${file.name}`}
                                  alt={file.name}
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                        <Form
                          className="position-relative"
                          onDragOver={(event) => event.preventDefault()}
                          onDrop={handleDrop}
                        >
                          <Form.Group
                            controlId="formFileMultiple"
                            className="mb-3"
                          >
                            <Form.Control
                              type="file"
                              multiple
                              onChange={handleFileInputChange}
                            />
                            <div className="drag-drop-text">
                              <img
                                src="/assets/gallery-add.png"
                                alt="upload img"
                                className="img-fluid mb-2"
                              />
                              <div className="d-flex align-items-center gap-1">
                                <span className="drag-drop-text-span fw-bold">
                                  Drag and drop files or
                                </span>{" "}
                                <span className="upload-link color-blue fw-bold">
                                  browse
                                </span>
                              </div>
                              <p>Supported formats: JPEG, PNG</p>
                            </div>
                          </Form.Group>
                        </Form>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        {!!files.length > 0 && (
                          <ul className="list-unstyled d-flex gap-3">
                            {files.map((file, index) => (
                              <li
                                key={index}
                                className="d-flex justify-content-center align-items-center"
                              >
                                <img
                                  src={`/assets/upload/${file.name}`}
                                  alt={file.name}
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                        <Form
                          className="position-relative"
                          onDragOver={(event) => event.preventDefault()}
                          onDrop={handleDrop}
                        >
                          <Form.Group
                            controlId="formFileMultiple"
                            className="mb-3"
                          >
                            <Form.Control
                              type="file"
                              multiple
                              onChange={handleFileInputChange}
                            />
                            <div className="drag-drop-text">
                              <img
                                src="/assets/gallery-add.png"
                                alt="upload img"
                                className="img-fluid mb-2"
                              />
                              <div className="d-flex align-items-center gap-1">
                                <span className="drag-drop-text-span fw-bold">
                                  Upload your Photo
                                </span>{" "}
                                <span className="upload-link color-blue fw-bold">
                                  browse
                                </span>
                              </div>
                              <p>Supported formats: JPEG, PNG</p>
                            </div>
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col md={6} className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Sub company</Form.Label>
                          <Form.Control
                            type="text"
                            className="add-property-textfiled"
                            placeholder="Please enter your sub company"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Representative</Form.Label>
                          <Form.Control
                            type="text"
                            className="add-property-textfiled"
                            placeholder="Please enter your representative"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Contact number</Form.Label>
                          <Form.Control
                            type="text"
                            className="add-property-textfiled"
                            placeholder="Please enter your contact number"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            className="add-property-textfiled"
                            placeholder="Please enter your email"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>GST</Form.Label>
                          <Form.Control
                            type="text"
                            className="add-property-textfiled"
                            placeholder="Please enter your GST num ber"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>PAN</Form.Label>
                          <Form.Control
                            type="text"
                            className="add-property-textfiled"
                            placeholder="Please enter your PAN number"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12} className="">
                        <div className="d-flex gap-3 align-items-center">
                          <Button
                            variant="primary"
                            size="sm"
                            className="rounded-2 px-4"
                          >
                            Next
                          </Button>
                          {/* <div className="add-property-btn">Next</div> */}
                          <Button
                            variant="transparent"
                            size="sm"
                            className="rounded-2 px-4 border-primary"
                          >
                            Reset
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </>

        {/* Modal */}
      </Col>
    </Row>
  );
};

export default PropertyManagementNew;
