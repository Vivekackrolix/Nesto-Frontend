import { BsSearch, BsMic, BsGeoAlt } from "react-icons/bs";
import {MdLocationSearching} from 'react-icons/md'
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import "./SearchBox.css";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const SearchBox = ({ addBtn }) => {
  return (
    <div className="dashboard__wrapper__filter nes__dashboard__filter bg-white shadow-sm d-flex align-items-center mb-0 mt-4">
      <div className="flex-grow-1 order-first order-md-2">
        <InputGroup>
          <InputGroup.Text className="border-0 bg-transparent">
            <BsSearch color="#B3B4B8" />
          </InputGroup.Text>
          <FormControl placeholder="Search" className="border-0" />
        </InputGroup>
      </div>
      <div className="px-3 py-2 voice-location-icons order-last d-flex align-items-center">
        <MdLocationSearching className="rounded-circle me-2 p-1" size={20} />
        <BsMic className="rounded-circle me-2 p-1" size={14} />
        <Button variant="primary" className="ms-2 bg-color-primary">
          Search
        </Button>
        {addBtn && (
          <Button className="nes__add__btn rounded-circle p-0 d-flex ms-2">
            <IoMdAdd color="#fff" size={25} className="m-auto" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
