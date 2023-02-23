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
    <Container>
      <div className="bg-white shadow-sm d-flex align-items-center">
        <div className="px-3 py-2">
          <Form.Select
            defaultValue="All residential"
            className="border-0 rounded-0 border-end"
          >
            <option>All residential</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Form.Select>
        </div>
        <div className="flex-grow-1">
          <InputGroup>
            <InputGroup.Text className="border-0 bg-transparent">
              <BsSearch />
            </InputGroup.Text>
            <FormControl placeholder="Search" style={{ border: 'none' }} />
          </InputGroup>
        </div>
        <div className="px-3 py-2 voice-location-icons">
          <BsGeoAlt className="rounded-circle me-2 p-2" size={24} />
          <BsMic className="rounded-circle me-2 p-2" size={24} />
          <Button variant="primary" className="bg-color-primary">
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SearchFilterBox;
