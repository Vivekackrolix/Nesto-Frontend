import { InputGroup } from 'react-bootstrap'
import './contact.css'
export default function Contact(){
    return(
        <>
             <form className="submit-form shadow-lg text-center p-5 " action="">
                  <div>
                    <h3>Best Platform for Broker</h3>
                  </div>
                  <div className="mb-4">
                    <h5>Enter your details below</h5>
                  </div>
                  <InputGroup className='mb-4'>
                    <input
                      className="form-input border-0"
                      type="text"
                      placeholder="Name"
                    />
                  </InputGroup>
                  <InputGroup className='mb-4'>
                    <input
                      className="form-input border-0"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </InputGroup>
                  <InputGroup className='mb-4'>
                    <input
                      className="form-input border-0"
                      type="mail"
                      placeholder="Email Address"
                    />
                  </InputGroup>
                  <InputGroup className='mb-4'>
                    <select className="form-input border-0">
                      <option value="Ford">Property Type</option>
                      <option value="Volvo">Volvo</option>
                      <option value="Fiat">Fiat</option>
                    </select>
                  </InputGroup>
                  <InputGroup className='mb-4'>
                    <select className="form-input border-0">
                      <option value="Ford">Location Of Property</option>
                      <option value="Volvo">Volvo</option>
                      <option value="Fiat">Fiat</option>
                    </select>
                  </InputGroup>
                  <InputGroup className='mb-4'>
                    <input
                      className="form-input border-0"
                      type="text"
                      placeholder="Brief Description"
                    />
                  </InputGroup>
                  <div>
                    <a href="" className="btn btn-color-primary submit">Submit</a>
                  </div>
                </form>
        </>
    )
}