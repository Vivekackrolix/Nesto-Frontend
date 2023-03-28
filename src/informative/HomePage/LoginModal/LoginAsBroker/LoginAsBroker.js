import React from 'react'
import CustomModal from '../../../../components/common/CustomModal'
import './LoginAsBroker.css'
// import { Link } from 'react-router-dom'

const LoginAsBroker = ({ show, onHide }) => {
    return (
        <CustomModal show={show} title="Login" closeBtn modalHeader size="md" onHide={onHide}>
            <div className='login-as-broker'>
                <div className="login-as-broker-div">
                    <div>
                        <span>
                            <img src="./assets/informative/profile.png" alt='profile' className='login-as-broker-img' />
                        </span>
                    </div>
                    <div>
                        <span className="login-as-broker-text">Login as a Broker</span>
                    </div>
                </div>
                <div className='login-as-broker-input-div'>
                    <form>
                        <input type='number' placeholder='Mobile Number' className='login-as-broker-input' required />
                        <input type='submit' className='login-as-broker-btn' />
                    </form>
                </div>
            </div>
        </CustomModal>

    )
}

export default LoginAsBroker