import React, { useState } from 'react'
import bannerLogin from './Images/bannerLogin.png'
import './Borkerlogin.css'
import user from './Images/user.png'
import { Form, Button } from 'react-bootstrap'


export default function BrokerLogin() {
    const [mobile,setMobile]= useState('');

    const changeInput=()=>{


    }

    const onSubmit=()=>{


    }


    return (
        
            <div className="row shadow my-5">
                <div className="col-md-6 loginBanner">
                    <img src={bannerLogin} alt="Login Page Banner" />
                </div>
                <div className="col-md-6 p-5">
                    <div className="brokerLoginForm">
                        <h7>Welcome Back! Glad to </h7>
                        <h7>See you Again!</h7>
                    </div>
                    <div className=" builderLoginPortal text-center">
                        <img src={user} alt='' style={{ height: '25px' }} />
                        <span className='mx-2' style={{ color: '#ddd' }}>Login as a Builder</span>
                    </div>
                    <div className="brokerForm">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control
                                    type="phone"
                                    placeholder="Enter your phone number"
                                    onChange={changeInput} />
                            </Form.Group>
                            <Button
                                type="submit"
                                className='form-control my-2'
                                style={{ background: '#278FD9', borderRadius: '20px' }}
                                onClick={onSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="d-flex align-items-center my-5">
                    <div className="divider flex-grow-1"></div>
                    <p className="m-0 px-1">Or Login Using</p>
                    <div className="divider flex-grow-1"></div>
                  </div>
                    <div className="brokerLoanBtn">
                        <div className="row">
                            <div className="col-md-6 p-2">
                                <Button
                                    type="submit"
                                    className='form-control my-2'
                                    style={{ background: '#278FD9', borderRadius: '20px' }}>
                                    Builder
                                </Button>
                            </div>

                            <div className="col-md-6 p-2">
                                <Button
                                    type="submit"
                                    className='form-control my-2'
                                    style={{ background: '#278FD9', borderRadius: '20px' }}>
                                    Loan Agent
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
