import { BsSearch, BsMic, BsGeoAlt } from 'react-icons/bs';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap';
import './SearchFilter.css';

const SearchFilterBox = () => {
  return (
    <div className="dashboard__wrapper__filter bg-white shadow-sm d-flex align-items-center mb-5 mt-4">
      <div className="px-3 py-2">
        <Form.Select
          defaultValue="All residential"
          className="border-0 rounded-0 border-end"
        >
          <option>All Residential</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Form.Select>
      </div>
      <div className="flex-grow-1">
        <InputGroup>
          <InputGroup.Text className="border-0 bg-transparent">
            <BsSearch color="#B3B4B8" />
          </InputGroup.Text>
          <FormControl placeholder="Search" className="border-0" />
        </InputGroup>
      </div>
      <div className="px-3 py-2 voice-location-icons">
        <BsGeoAlt className="rounded-circle me-2 p-2" size={16} />
        <BsMic className="rounded-circle me-2 p-2" size={16} />
        <Button variant="primary" className="ms-2 bg-color-primary">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilterBox;
