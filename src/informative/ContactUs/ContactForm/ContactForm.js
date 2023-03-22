import React from 'react'
import './ContactForm.css'
import { FaUserAlt } from 'react-icons/fa'
import { IoIosMailOpen } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SlPencil } from 'react-icons/sl'

const ContactForm = () => {
    return (
        <>
            <div className='contact-form' data-aos='zoom-in'>
                <div className='contact-form_container'>
                    <h3 className='contact-form_heading'>Write to us</h3>
                    <form>
                        <div className='row'>
                            <div className='col-lg-6 contact-form_col'>
                                <input
                                    required
                                    type='text'
                                    placeholder='Enter Your Name'
                                    className='contact-form_input'
                                />
                                <span className='contact-form_icons'><FaUserAlt /></span>
                            </div>
                            <div className='col-lg-6 contact-form_col'>
                                <input
                                    required
                                    type='email'
                                    placeholder='Enter Email Address'
                                    className='contact-form_input'
                                />
                                <span className='contact-form_icons'><IoIosMailOpen /></span>
                            </div>
                            <div className='col-lg-6 contact-form_col'>
                                <select required className='contact-form_select'>
                                    <option>Select Service Type</option>
                                    <option>Service One</option>
                                    <option>Service Two</option>
                                    <option>Service Three</option>
                                    <option>Service Four</option>
                                </select>
                                <span className='contact-form_select-icon'></span>
                            </div>
                            <div className='col-lg-6 contact-form_col'>
                                <input
                                    required
                                    type='text'
                                    placeholder='Enter Phone Number'
                                    className='contact-form_input'
                                />
                                <span className='contact-form_icons'><BsFillTelephoneFill /></span>
                            </div>
                            <div className='col-lg-12 contact-form_col'>
                                <textarea required className="form-control contact-form_textArea"
                                    placeholder="Leave a comment here">
                                </textarea>
                                <span className='textArea-icon'><SlPencil /></span>
                            </div>
                            <div className='d-flex align-items-center gap-2 mt-4'>
                                <input
                                    required
                                    id='check-save'
                                    type='checkbox'
                                    className='contact-form_checkbox'
                                />
                                <label className='contact-form_checkbox-label' for='check-save'>
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                            <div className='mt-5'>
                                <button type='submit' className='contact-form_button'>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className='contact-form_map-box' data-aos='fade-up'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112029.38052577531!2d77.16536319999999!3d28.6621696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678211260881!5m2!1sen!2sin" width="100%" height="550"></iframe>
            </div> */}
        </>
    )
}

export default ContactForm