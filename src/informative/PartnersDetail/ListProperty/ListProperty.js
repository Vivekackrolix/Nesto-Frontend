import React from 'react'
import './ListProperty.css'
import { Link } from 'react-router-dom'

const ListProperty = () => {
    return (
        <div className='listing-container shadow-sm rounded-4 mt-5 d-flex' data-aos='fade-right' >
            <div className='col-lg-7 listing-container_col-1'>
                <span className='listing-container_span'>Start listing or Selling a Property with NestoHub</span>
                <Link to='/' className='listing-container_link'>
                    <span>List your Property</span>
                </Link>
            </div>
            <div className='col-lg-5 listing-container_col-2'>
                <img src='/assets/informative/listing1.png' className='listing-container_img' />
            </div>
        </div>
    )
}

export default ListProperty