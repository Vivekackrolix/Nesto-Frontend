import { Button, Form } from 'react-bootstrap';
import CreatableSelect from 'react-select/creatable';
import './Preferences.css';

const options = [
  { value: 'Gurugram, Haryana', label: 'Gurugram, Haryana' },
  { value: 'Noida, Uttar Pradesh', label: 'Noida, Uttar Pradesh' },
];

const Preferences = () => {
  return (
    <Form className="profile__form">
      <Form.Group className="mb-4">
        <Form.Label>Locality</Form.Label>
        <CreatableSelect isMulti placeholder="Add more" options={options} />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Property Type</Form.Label>
        <CreatableSelect isMulti placeholder="Add more" options={options} />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Bank Name</Form.Label>
        <Form.Select className="form-control-sm rounded-0">
          <option>HDFC</option>
          <option>HDFC</option>
          <option>HDFC</option>
          <option>HDFC</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Top 3 Builder whom you worked with</Form.Label>
        <CreatableSelect isMulti placeholder="Add more" options={options} />
      </Form.Group>
      <Button className="btn-color-primary rounded-100 btn-rounded w-100 mt-3">
        Done
      </Button>
    </Form>
  );
};

export default Preferences;
