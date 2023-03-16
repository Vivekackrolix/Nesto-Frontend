import { BsSearch, BsMic, BsGeoAlt } from "react-icons/bs";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchFilter.css";
import { RiAddFill } from "react-icons/ri";
import { useState } from "react";
import Filter from "../../../components/search-filter/Filter/Filter";
import { MdOutlineArrowDropDown } from "react-icons/md";

const SearchFilterBox = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="row d-flex align-items-center mb-5 mt-4">
      <div
        className="dashboard__wrapper__filter bg-white search-shadow d-flex align-items-center col-10 p-0 rounded-2 me-3"
        style={{ flex: "1" }}
      >
        <div className="px-3 py-1">
          {/*<Form.Select
            defaultValue="All residential"
            className="border-0 rounded-0 border-end"
            onClick={() => {
              setShowFilter(true);
            }}
          >
            <option>Filter</option>
             <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option> 
          </Form.Select>*/}
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
            <FormControl placeholder="Search" className="border-0" style={{background: "#fff"}}/>
          </InputGroup>
        </div>
        <div className="px-3 my-1 voice-location-icons">
          <BsGeoAlt className="rounded-circle me-2 p-2" size={16} />
          <BsMic className="rounded-circle me-2 p-2" size={16} />
          <Button variant="primary" className="ms-2 bg-color-primary">
            Search
          </Button>
        </div>
      </div>
      <div className="col-auto" style={{ gap: "2" }}>
        <Button className="rounded-circle p-2" style={{ boxShadow: "0px 6px 26px rgba(0, 0, 0, 0.25)"}}>
          <RiAddFill size={30} />
        </Button>
      </div>
      <div>
        <Filter show={showFilter} onChange={setShowFilter} />
      </div>
    </div>
  );
};

export default SearchFilterBox;
