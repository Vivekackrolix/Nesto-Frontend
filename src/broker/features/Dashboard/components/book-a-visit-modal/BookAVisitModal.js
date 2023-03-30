import CreatableSelect from 'react-select/creatable';
// import RangeSlider from '../../range-slider/RangeSlider';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { CustomModal } from '../../../../../components';
import RangeSlider from '../../../../../components/range-slider/RangeSlider';
import DashboardTabs from '../../../../../components/dashboard-tabs/DashboardTabs';
import { useAddVisitMutation } from '../../../../hooks/LoginQuery';
import { useState } from 'react';

const followUpTime = ['Morning Slots', 'Afternoon Slots', 'Evening Slots'];

const morningSlots = ['9AM', '10AM', '11AM'];
const afternoonSlots = ['1PM', '2PM', '3PM'];
const eveningSlots = ['4PM', '5PM', '6PM'];
const tabKey = ['Old', 'New'];

const BookAVisitModal = ({ show, onHide }) => {
  // const [visitData, setVisitData] = useState({
  //   propertyName: 'Rider Apartment',
  //   clientName: '',
  //   phoneNumber: '',
  //   email: '',
  //   unitType: [],
  //   preferredLocation: ['Gurugram', 'Haryana'],
  //   minPrice: '80K',
  //   maxPrice: '200K',
  //   date: '01-12-2022',
  //   chooseSlot: '1PM',
  //   builderId: '641069056532f2569479fc9d',
  //   brokerId: '64115c5a377e99eee7cd1a50',
  //   propertyId: '640ee6a8cbe2f98daaa8813f',
  // });
  const [visitData, setVisitData] = useState({
    propertyName: 'Rider Apartment',
    clientName: 'Ashu Sharma',
    phoneNumber: '4379042544',
    email: 'Ashusharma212@gmail.com',
    unitType: ['2BHK', '3BHK'],
    preferredLocation: ['Gurugram', 'Haryana'],
    minPrice: '80K',
    maxPrice: '200K',
    date: '01-12-2022',
    timeSlot: null,
    customerId: '64119b48d3024a8939e3dfcf',
    builderId: '64107bce7b4c4240671aeb94',
    brokerId: '64115c5a377e99eee7cd1a50',
    propertyId: '641bf437067c659dc0be278c',
  });

  const options = [
    { value: '2BHK', label: '2 BHK' },
    { value: '3BHK', label: '3 BHK' },
    { value: '4BHK', label: '4 BHK' },
    { value: '5BHK', label: '5 BHK' },
  ];

  const {
    addVisit,
    isAddVisitLoading,
    isAddVisitSuccess,
    isAddIsError,
    isAddVisitError,
    isAddVisitResponse,
  } = useAddVisitMutation();

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    setVisitData({ ...visitData, [name]: value });
  };

  const handleUnitTypeChange = selectedOptions => {
    const values = selectedOptions
      ? selectedOptions.map(option => option.value)
      : [];
    setVisitData({
      ...visitData,
      unitType: values,
    });
  };
  const handlePreferredLocationChange = newValue => {
    setVisitData({
      ...visitData,
      preferredLocation: newValue ? newValue : [],
    });
  };

  const handleSliderChange = (minPrice, maxPrice) => {
    setVisitData({ ...visitData, minPrice, maxPrice });
  };

  const handleBookVisit = () => {
    addVisit(visitData);
  };

  if (isAddVisitSuccess) {
    console.log(isAddVisitResponse);
  }

  return (
    <CustomModal
      show={show}
      title="Book a Visit"
      border
      closeBtn
      onHide={onHide}
      cssClassName="nes__dashboard__modal"
      size="lg"
      modalHeader
    >
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <Form
          className="profile__form ps-2 py-3 custom__modal__form"
          onSubmit={e => e.preventDefault()}
        >
          <InputGroup className="gap-3 mb-4">
            <Form.Group className="flex-grow-1" controlId="companyName">
              <Form.Label>
                Client Name<span className="text-dark">*</span>
              </Form.Label>
              <Form.Control
                className="rounded-0 border-0"
                type="text"
                placeholder="Enter client name"
                name="clientName"
                onChange={handleChange}
                value={visitData.clientName}
              />
            </Form.Group>

            <Form.Group className="flex-grow-1" controlId="phoneNumber">
              <Form.Label>
                Phone Number<span className="text-dark">*</span>
              </Form.Label>
              <Form.Control
                className="rounded-0 border-0"
                type="tel"
                placeholder="Enter phone number"
                name="phoneNumber"
                onChange={handleChange}
                value={visitData.phoneNumber}
              />
            </Form.Group>
          </InputGroup>

          <Form.Group className="mb-4" controlId="email">
            <Form.Label>
              Email<span className="text-dark">*</span>
            </Form.Label>
            <Form.Control
              className="rounded-0 border-0"
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={visitData.email}
            />
          </Form.Group>

          <InputGroup className="mb-4 gap-3">
            <Form.Group className="flex-grow-1">
              <Form.Label>
                Unit Type<span className="text-dark">*</span>
              </Form.Label>
              <CreatableSelect
                isMulti
                options={options}
                placeholder="Add more"
                name="unitType"
                onChange={handleUnitTypeChange}
              />
            </Form.Group>

            <Form.Group className="flex-grow-1">
              <Form.Label>
                Preferred Location<span className="text-dark">*</span>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Add more"
                options={options}
                name="preferredLocation"
              />
            </Form.Group>
          </InputGroup>

          <Form.Group className="mb-4" controlId="email">
            <Form.Label>
              Property Name<span className="text-dark">*</span>
            </Form.Label>
            <Form.Control
              className="rounded-0 border-0"
              type="text"
              name="propertyName"
              onChange={handleChange}
              value={visitData.propertyName}
            />
          </Form.Group>

          {/* range slider */}
          <RangeSlider title="Price Range" min="0" max="160" />
          {/* range slider code end here */}

          <Form.Group className="mb-4">
            <Form.Label>
              Date<span className="text-dark">*</span>
            </Form.Label>
            <Form.Control
              className="form-control-sm border-0"
              type="date"
              required
              name="date"
              onChange={handleChange}
              value={visitData.date}
            />
          </Form.Group>

          {/* time slots */}
          <Form.Group className="mb-1">
            <Form.Label>
              Choose Slot<span className="text-dark">*</span>
            </Form.Label>
          </Form.Group>
          <div>
            <Form.Group className="mb-1">
              <Form.Label>
                Choose Slot<span className="text-dark">*</span>
              </Form.Label>
            </Form.Group>
            <Row className="mb-3 g-3">
              <Col xs={12}>
                <Form.Label>Morning</Form.Label>
                <Row className="mb-3 mb-md-0">
                  {morningSlots.map(slot => (
                    <Col key={slot} className="my-2 my-lg-0" md={4} xs={12}>
                      <Form.Label htmlFor={`${slot}`}>
                        <Form.Check
                          type="radio"
                          id={slot}
                          name="timeSlot"
                          value={slot}
                          checked={visitData.timeSlot === slot}
                          onChange={handleChange}
                        />
                        {slot}
                      </Form.Label>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12}>
                <Form.Label>Afternoon</Form.Label>
                <Row className="mb-3 mb-md-0">
                  {afternoonSlots.map(slot => (
                    <Col key={slot} className="my-2 my-lg-0" md={4} xs={12}>
                      <Form.Label htmlFor={`${slot}`}>
                        <Form.Check
                          type="radio"
                          id={slot}
                          name="timeSlot"
                          value={slot}
                          checked={visitData.timeSlot === slot}
                          onChange={handleChange}
                        />
                        {slot}
                      </Form.Label>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12}>
                <Form.Label>Evening</Form.Label>
                <Row className="mb-3 mb-md-0">
                  {eveningSlots.map(slot => (
                    <Col key={slot} className="my-2 my-lg-0" md={4} xs={12}>
                      <Form.Label htmlFor={`${slot}`}>
                        <Form.Check
                          type="radio"
                          id={slot}
                          name="timeSlot"
                          value={slot}
                          checked={visitData.timeSlot === slot}
                          onChange={handleChange}
                        />
                        {slot}
                      </Form.Label>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>

          {/* time slots code end here */}

          <div className="d-flex gap-4 mt-5">
            <Button
              onClick={handleBookVisit}
              type="submit"
              className="btn-color-primary rounded-pill btn-rounded w-100"
              disabled={isAddVisitLoading}
            >
              {isAddVisitLoading ? 'Booking...' : 'Book'}
            </Button>
          </div>
        </Form>
      </DashboardTabs>
    </CustomModal>
  );
};

export default BookAVisitModal;
