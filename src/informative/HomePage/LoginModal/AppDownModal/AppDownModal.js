import React from 'react';
import CustomModal from '../../../../components/common/CustomModal';
import './AppDownModal.css';

const AppDownModal = ({ show, onHidePop, popShow }) => {
    return (
        <CustomModal
            show={popShow}
            closeBtn
            modalHeader
            size="md"
            onHide={onHidePop}
        >
            <div className='text-center'>
                <h3 className="login-modal-heading">App is launching soon</h3>
                <span className="login-modal-sub-heading">
                    Stay Tuned
                </span>
            </div>
        </CustomModal>
    );
};

export default AppDownModal;