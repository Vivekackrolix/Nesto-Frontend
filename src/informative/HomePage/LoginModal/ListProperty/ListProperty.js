import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import './ListProperty.css';
import { Link } from 'react-router-dom';

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
                <div className="list-property-input-div">
                    <form>
                        <input
                            type="text"
                            placeholder="Name"
                            className="list-property-input"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Enter Phone Number"
                            className="list-property-input"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="list-property-input"
                            required
                        />
                        <select className="list-property-input" required>
                            <option className='list-property-option'>Types of Property</option>
                            <option className='list-property-option'>Delhi</option>
                            <option className='list-property-option'>Delhi</option>
                            <option className='list-property-option'>Delhi</option>
                            <option className='list-property-option'>Delhi</option>
                        </select>
                        
                        <select className="list-property-input" required>
                            <option className='list-property-option'>Location of Property</option>
                            <option className='list-property-option'>Delhi</option>
                            <option className='list-property-option'>Delhi</option>
                            <option className='list-property-option'>Delhi</option>
                            <option className='list-property-option'>Delhi</option>
                        </select>
                        <button className="list-property-btn">Register</button>
                    </form>
                </div>
            </div>
        </CustomModal>
    );
};

export default ListProperty;
