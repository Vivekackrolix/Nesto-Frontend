import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import { Link } from 'react-router-dom';
import './NotRegistered.css';

const NotRegistered = ({ show, onHide }) => {
    return (
        <CustomModal show={show} closeBtn modalHeader size="md" onHide={onHide}>
            <div className="not-register">
                <img
                    src="./assets/informative/notRegister.gif"
                    className="not-register-img"
                />
                <div>
                    <span className="not-register-heading">Not Registered</span>
                    <span className="not-register-sub-heading">
                        You are not registered with us! Please contact with Nestohub team.
                    </span>
                    <button className="not-register-btn">Back to Login</button>
                </div>
            </div>
        </CustomModal>
    );
};

export default NotRegistered;
