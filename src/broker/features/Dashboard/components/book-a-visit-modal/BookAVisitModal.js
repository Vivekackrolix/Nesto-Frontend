import CreatableSelect from 'react-select/creatable';
// import RangeSlider from '../../range-slider/RangeSlider';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { CustomModal } from '../../../../../components';
import RangeSlider from '../../../../../components/range-slider/RangeSlider';
import DashboardTabs from '../../../../../components/dashboard-tabs/DashboardTabs';

const options = [
  { value: 'sector 28', label: 'Sector 28' },
  { value: 'hDFC Bank', label: 'HDFC Bank' },
];

const followUpTime = ['Morning Slots', 'Afternoon Slots', 'Evening Slots'];

const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM  ',
];

const tabKey = ['Old', 'New'];

const BookAVisitModal = ({ show, onHide }) => {
  return (
    <CustomModal
      show={show}
      title="Book a Visit"
      border
      closeBtn
      onHide={onHide}
      cssClassName="nes__dashboard__modal"
      size="lg"
    >
      <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
        <Form className="profile__form ps-2 py-3 custom__modal__form">
          <Form.Group className="mb-4" controlId="companyName">
            <Form.Label>
              Client Name<span className="text-dark">*</span>
            </Form.Label>
            <Form.Control
              className="rounded-0 border-0"
              type="text"
              placeholder="Enter client name"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="phoneNumber">
            <Form.Label>
              Phone Number<span className="text-dark">*</span>
            </Form.Label>
            <Form.Control
              className="rounded-0 border-0"
              type="tel"
              placeholder="Enter phone number"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="email">
            <Form.Label>
              Email<span className="text-dark">*</span>
            </Form.Label>
            <Form.Control
              className="rounded-0 border-0"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>
              Unit Type<span className="text-dark">*</span>
            </Form.Label>
            <CreatableSelect isMulti placeholder="Add more" options={options} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>
              Preferred Location<span className="text-dark">*</span>
            </Form.Label>
            <CreatableSelect isMulti placeholder="Add more" options={options} />
          </Form.Group>

          <Form.Group className="mb-4" controlId="email">
            <Form.Label>
              Property Name<span className="text-dark">*</span>
            </Form.Label>
            <Form.Control className="rounded-0 border-0" type="text" />
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
            />
          </Form.Group>

          {/* time slots */}
          <Form.Group className="mb-1">
            <Form.Label>
              Choose Slot<span className="text-dark">*</span>
            </Form.Label>
          </Form.Group>
          <Row className="mb-3 g-3">
            {followUpTime.map((item, index) => (
              <Col key={index} xs={12}>
                <Form.Label>{item}</Form.Label>
                <Row className="mb-3 mb-md-0">
                  {Array.from({ length: 3 }, (_, index) => (
                    <Col key={index} className="my-2 my-lg-0" md={4} xs={12}>
                      <Form.Select className="form-control-sm">
                        <option>Choose time slot</option>
                        {timeSlots.map(timeSlot => (
                          <option key={timeSlot} value={timeSlot}>
                            {timeSlot}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  ))}
                </Row>
              </Col>
            ))}
          </Row>
          {/* time slots code end here */}

          <div className="d-flex gap-4 mt-5">
            <Button className="btn-color-primary rounded-pill btn-rounded w-100">
              Book
            </Button>
          </div>
        </Form>
      </DashboardTabs>
    </CustomModal>
  );
};

export default BookAVisitModal;
