import React, { useEffect, useState } from "react";
import "./ContactForm.css";
import { FaUserAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";
import { Zoom } from "react-reveal";
import { getAPI, postAPI, putAPI } from "../../../builder/Api/ApiRequest";
import { apiEndpoints } from "../../../builder/Api/ApiEndpoint";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    msg: "",
    service: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevContactForm) => ({
      ...prevContactForm,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    // // debugger;
    // console.log(contactForm);
    // return;
    setIsLoading(true);
    const response = await postAPI(apiEndpoints.addContactus, contactForm);
    console.log(response);
    setIsLoading(false);
  };
  return (
    <>
      <Zoom duration={1300} delay={100}>
        <div className="contact-form">
          <div className="contact-form_container">
            <h3 className="contact-form_heading">Write to us</h3>
            <form>
              <div className="row">
                <div className="col-lg-6 contact-form_col">
                  <input
                    required
                    type="text"
                    placeholder="Enter Your Name"
                    className="contact-form_input"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                  <span className="contact-form_icons">
                    <FaUserAlt />
                  </span>
                </div>
                <div className="col-lg-6 contact-form_col">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="contact-form_input"
                    value={contactForm.email}
                    onChange={handleInputChange}
                  />
                  <span className="contact-form_icons">
                    <IoIosMailOpen />
                  </span>
                </div>
                <div className="col-lg-6 contact-form_col">
                  <select
                    required
                    className="contact-form_select"
                    value={contactForm.services}
                    name="service"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected>
                      I am ...
                    </option>

                    <option value="Builder">Builder</option>
                    <option value="Broker">Broker</option>
                    <option value="Loan Agent">Loan Agent</option>
                    <option value="Others">Others</option>
                  </select>

                  <span className="contact-form_select-icon"></span>
                </div>
                <div className="col-lg-6 contact-form_col">
                  <input
                    required
                    type="text"
                    placeholder="Enter Phone Number"
                    maxLength="10"
                    className="contact-form_input"
                    value={contactForm.phoneNumber}
                    name="phoneNumber"
                    onChange={handleInputChange}
                  />
                  <span className="contact-form_icons">
                    <BsFillTelephoneFill />
                  </span>
                </div>
                <div className="col-lg-12 contact-form_col">
                  <textarea
                    name="msg"
                    onChange={handleInputChange}
                    value={contactForm.msg}
                    required
                    className="form-control contact-form_textArea"
                    placeholder="Leave a comment here"
                  ></textarea>
                  <span className="textArea-icon">
                    <SlPencil />
                  </span>
                </div>
                <div className="d-flex align-items-start gap-2 mt-4">
                  <input
                    required
                    id="check-save"
                    type="checkbox"
                    className="contact-form_checkbox"
                  />
                  <label
                    className="contact-form_checkbox-label"
                    for="check-save"
                  >
                    I agree to the Terms & Conditions and Privacy Policy of NestoHub.
                    I agree to be contacted by NestoHub related this query or similar service via WhatsApp, mobile phone (overiridng NDNC registeration), SMS, Email etc.
                  </label>
                </div>
                <div className="mt-3">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="contact-form_button"
                    onClick={submitHandler}
                  >
                    {isLoading ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default ContactForm;
