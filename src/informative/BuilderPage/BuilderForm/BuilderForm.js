import React from 'react'
import './BuilderForm.css'

const BuilderForm = () => {
    return (
        <div className='col-lg-4 builder-banner-col-3' data-aos='fade-up'>
            <div className='builder-banner-col-3_title_div'>
                <span className='builder-banner-col-3_title'>Hello! List Your Property / Requirement</span>
            </div>
            <form action='#' className='builder-banner-col-3_form'>
                <input type='text' placeholder='Name' className='builder-banner-col-3_input' required />
                <input type='number' placeholder='Phone Number' className='builder-banner-col-3_input' required />
                <input type='email' placeholder='Email Address' className='builder-banner-col-3_input' required />
                <select className='builder-banner-col-3_input builder-banner-col-3_select'>
                    <option disabled={false} value="">Property Type</option>
                    <option>Flats / Apartment</option>
                    <option>Farmhouse / Villa</option>
                    <option>Plots / Lands</option>
                    <option>Commercial</option>
                </select>
                <select className='builder-banner-col-3_input builder-banner-col-3_select'>
                    <option disabled={false} value="">Location of Property</option>
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                    <option>option1</option>
                </select>
                <input type='text' placeholder='Brief Description' className='builder-banner-col-3_input' required />
                <button type='submit' className='builder-banner-col-3_btn'>Submit</button>
            </form>
        </div>
    )
}

export default BuilderForm