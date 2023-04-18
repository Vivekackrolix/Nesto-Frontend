import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import { Link } from 'react-router-dom';
import './NotRegistered.css';
import { Button } from 'react-bootstrap';

const NotRegistered = ({ show, onHide }) => {
    return (
        <CustomModal show={show} closeBtn modalHeader size="md" onHide={onHide}>
            <div className="not-register">
                <img
                    src="./assets/informative/notRegister.gif"
                    className="not-register-img"
                    alt='not-register'
                />
                <div>
                    <span className="not-register-heading">Not Registered</span>
                    <span className="not-register-sub-heading">
                        You are not registered with us! Please contact with Nestohub team.
                    </span>
                    <Link to='/contact-us'>
                        <Button variant='primary' className="not-register-btn">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </CustomModal>
    );
};

export default NotRegistered;
