import React, { useState } from 'react'
import { BsMicFill } from "react-icons/bs";
import { MdLocationSearching } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./CpPropertyDetailsSearch.css";
import { TiPlus } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import Dropdown from "react-bootstrap/Dropdown";
import CpPropertyDetailsFilter from "./CpPropertyDetailsFilter/CpPropertyDetailsFilter";

const CpPropertyDetailsSearch = () => {
    const [showFilter, setShowFilter] = useState(false);
    return (
        <>
            <div className="CpPropertyDetailsSearch container">
                <div className="row d-flex align-items-center mx-auto mb-5 mt-2">
                    <div className="col-lg-12 CpPropertyDetailsSearch-col">
                        {/* Filter Start =============== */}
                        <div className="CpPropertyDetailsSearch-child_div_1" onClick={() => { setShowFilter(true); }}   >
                            <span className="CpPropertyDetailsSearch-child_div_1-span">Filter</span>
                            <span className="CpPropertyDetailsSearch-child_div_1-span">
                                <TiArrowSortedDown />
                            </span>
                        </div>
                        {/* Filter End =============== */}
                        {/* Input Field Start =============== */}
                        <div className="flex-grow-1">
                            <InputGroup className='CpPropertyDetailsSearch_input'>
                                <InputGroup.Text className="CpPropertyDetailsSearch_input-search">
                                    <FiSearch className='CpPropertyDetailsSearch_search-icon' />
                                </InputGroup.Text>
                                <FormControl
                                    placeholder="Search here..."
                                    className="CpPropertyDetailsSearch_input-field"
                                />
                            </InputGroup>
                        </div>
                        {/* Input Field End ============ */}
                        {/* Location / Mic / Search Buttons Start ================== */}
                        <div className="voice-location-icons px-3 py-2 d-flex order-last align-items-center">
                            <MdLocationSearching className="rounded-circle me-2 p-2" />
                            <BsMicFill className="rounded-circle p-2" />
                            <Button className="CpPropertyDetailsSearch_search-btn">
                                Search
                            </Button>
                        </div>
                        {/* Location / Mic / Search Buttons End ========== */}
                    </div>
                    <div className="col-auto" style={{ gap: "2" }}>
                        <Dropdown>
                            <Dropdown.Toggle
                                id="dropdown-basic"
                                className="CpPropertyDetailsSearch_plus-toggle"
                                style={{ boxShadow: "0px 6px 26px rgba(0, 0, 0, 0.25)" }}
                            >
                                <TiPlus className='CpPropertyDetailsSearch_plus-icon' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Raise Dispute</Dropdown.Item>
                                <hr />
                                <Dropdown.Item href="#/action-2">Request Property</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <CpPropertyDetailsFilter show={showFilter} onChange={setShowFilter} />
                    </div>
                </div>
            </div >
        </>
    );
};

export default CpPropertyDetailsSearch;
