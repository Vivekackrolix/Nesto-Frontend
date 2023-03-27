import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import './ListProperty.css';

const ListProperty = ({ show, onHide }) => {
    return (
        <CustomModal
            show={show}
            closeBtn
            modalHeader
            size="md"
            onHide={onHide}
        >
            <span className='list-property-heading'>
                Hello! List your property / Requirement
            </span>
            <hr />
            <div className="list-property">
                <div className="">
                    <form>
                        <div className='list-property-input-div'>
                            <label for='list-property-input-1' className='list-property-input-label'>Name</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="list-property-input"
                                required
                                id='list-property-input-1'
                            />
                        </div>
                        <div className='list-property-input-div'>
                            <label for='list-property-input-2' className='list-property-input-label'>Phone Number</label>
                            <input
                                type="telephone"
                                placeholder="Enter Phone Number"
                                className="list-property-input"
                                required
                                id='list-property-input-2'
                            />
                        </div>
                        <div className='list-property-input-div'>
                            <label for='list-property-input-3' className='list-property-input-label'>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="list-property-input"
                                required
                                id='list-property-input-3'
                            />
                        </div>
                        <div className='list-property-input-div'>
                            <label for='list-property-input-4' className='list-property-input-label'>Select Types of Property</label>
                            <select className="list-property-input" required id='list-property-input-4'>
                                <option className='list-property-option'>Types of Property</option>
                                <option className='list-property-option'>Delhi</option>
                                <option className='list-property-option'>Delhi</option>
                                <option className='list-property-option'>Delhi</option>
                                <option className='list-property-option'>Delhi</option>
                            </select>
                        </div>
                        <div className='list-property-input-div'>
                            <label for='list-property-input-5' className='list-property-input-label'>Select Location of Property</label>
                            <select className="list-property-input" required id='list-property-input-5'>
                                <option className='list-property-option'>Location of Property</option>
                                <option className='list-property-option'>Delhi</option>
                                <option className='list-property-option'>Delhi</option>
                                <option className='list-property-option'>Delhi</option>
                                <option className='list-property-option'>Delhi</option>
                            </select>
                        </div>
                        <button className="list-property-btn">Register</button>
                    </form>
                </div>
            </div>
        </CustomModal>
    );
};

export default ListProperty;
