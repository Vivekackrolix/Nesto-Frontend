import { BsSearch, BsMic, BsGeoAlt } from "react-icons/bs";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import "./SearchFilter.css";
import { RiAddFill } from "react-icons/ri";
import { useState } from "react";
import Filter from "../../../components/search-filter/Filter/Filter";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { postAPI } from "../../Api/ApiRequest";
import { apiEndpoints } from "../../Api/ApiEndpoint";
const SearchFilterBox = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [typeOfProperty, setTypeOfProperty] = useState("");
  const [locationProperty, setLocationProperty] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showAnotherPopup, setShowAnotherPopup] = useState(false);
  const [data, setData] = useState([]);
  const [reason, setReason] = useState({});
  const [comments, setComments] = useState({});
  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();
    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      handleSearch(speechResult);
    };
  };
  const handleSearch = (query) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredData);
    console.log(`Performing search for ${transcript}`);
  };
  const handleRaiseDispute = async () => {
    setShowPopup(true);
    const formData = {
      reason: {},
      comments: {},
    };
    // console.log(formData);

    const response = await postAPI(apiEndpoints.addRaiseDispute, formData);
    console.log(response.data);
  };
  const handleAnotherAction = async () => {
    setShowAnotherPopup(true);
    if (email.length <= 1) {
      //Set Error true
      return;
    }
    const formData = {
      name: name,
      phoneNumber: phone,
      email: email,
      typeOfProperty: typeOfProperty,
      locationProperty: locationProperty,
      projectName: project,
      description: description,
    };
    const response = await postAPI(
      apiEndpoints.addShareYourIntern,

      formData
    );
    console.log(response);
    setData(response.data);
  };

  return (
    <div className="row d-flex align-items-center mx-auto mb-5 mt-2">
      <div
        className="dashboard__wrapper__filter bg-white search-shadow d-flex align-items-center col-10 p-0 rounded-2 me-3"
        style={{ flex: "1" }}
      >
        <div className="px-3 py-1">
          <button
            onClick={() => {
              setShowFilter(true);
            }}
          >
            <span>Filter</span>
            <span>
              <MdOutlineArrowDropDown />
            </span>
          </button>
        </div>
        <div className="flex-grow-1">
          <InputGroup>
            <InputGroup.Text className="border-0 bg-transparent">
              <BsSearch color="#B3B4B8" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              className="border-0"
              style={{ background: "#fff" }}
              value={transcript}
              onChange={(event) => {
                setTranscript(event.target.value);
                handleSearch(event.target.value);
              }}
            />
          </InputGroup>
        </div>

        <div className="px-3 py-2 voice-location-icons order-last d-flex align-items-center">
          <BsGeoAlt className="rounded-circle me-2 p-2" size={16} />
          <button onClick={handleVoiceSearch}>
            <BsMic className="rounded-circle me-2 p-2" size={16} />
          </button>

          <Button
            variant="primary"
            className="ms-2 bg-color-primary "
            onClick={() => {
              handleSearch(transcript);
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="col-auto" style={{ gap: "2" }}>
        <Dropdown>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="rounded-circle p-2"
            style={{ boxShadow: "0px 6px 26px rgba(0, 0, 0, 0.25)" }}
          >
            <RiAddFill size={30} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* <Dropdown.Item href="#/action-1">Raise Dispute</Dropdown.Item> */}
            <Dropdown.Item onClick={handleRaiseDispute}>
              Raise Dispute
            </Dropdown.Item>

            <hr />
            <Dropdown.Item onClick={handleAnotherAction}>
              Request Property
            </Dropdown.Item>
          </Dropdown.Menu>
          <Modal show={showPopup} onHide={() => setShowPopup(false)}>
            <Modal.Header className="justify-content-center" closeButton>
              <Modal.Title>Raise Dispute</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                className=" align-items-center"
                onClick={() => setShowPopup(false)}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={showAnotherPopup}
            onHide={() => setShowAnotherPopup(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Request Property</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className="profile__form">
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="mb-0">Builder Name</Form.Label>
                  <Form.Control
                    className="rounded-2"
                    type="text"
                    placeholder="Builder Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">Enter Phone Number</Form.Label>
                  <Form.Control
                    className="rounded-2"
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">Enter Email Address</Form.Label>
                  <Form.Control
                    className="rounded-2"
                    type="email"
                    placeholder="Enter Email Address"
                    // value={name}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">Type Of Property</Form.Label>
                  <CreatableSelect
                    isMulti
                    placeholder="Choose Type Of Property"
                    // options={add}
                    className="rounded-2"
                    styles={{ background: "#F8F8F8" }}
                    onChange={(e) => {
                      setTypeOfProperty(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">Location of Property</Form.Label>
                  <CreatableSelect
                    isMulti
                    placeholder="Choose Location Of Property"
                    // options={add}
                    className="rounded-2"
                    styles={{ background: "#F8F8F8" }}
                    onChange={(e) => {
                      setLocationProperty(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">Name Of Project</Form.Label>
                  <Form.Control
                    className="rounded-2"
                    type="text"
                    placeholder="Name Of Project"
                    onChange={(e) => {
                      setProject(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">Brief Description</Form.Label>
                  <Form.Control
                    className="rounded-2"
                    as="textarea"
                    placeholder="Write Brief Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowAnotherPopup(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleAnotherAction}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Dropdown>
      </div>
      <div>
        <Filter show={showFilter} onChange={setShowFilter} />
      </div>
    </div>
  );
};

export default SearchFilterBox;
