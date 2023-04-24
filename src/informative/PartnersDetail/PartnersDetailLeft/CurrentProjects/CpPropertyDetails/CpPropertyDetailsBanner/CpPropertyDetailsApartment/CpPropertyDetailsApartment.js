import React from 'react'
import './CpPropertyDetailsApartment.css'
import { ImStarEmpty, ImStarFull } from 'react-icons/im'

const CpPropertyDetailsApartment = () => {
    return (
        <div className='container CpPropertyDetailsApartment'>
            <div className='col-lg-12 CpPropertyDetailsApartment-col'>
                <div className='CpPropertyDetailsApartment-div-1'>
                    {/*  */}
                    <div className='CpPropertyDetailsApartment-div-2 gap-4'>
                        <div className='CpPropertyDetailsApartment-div-2_child'>
                            <img src='/assets/informative/partner-2.png' className='CpPropertyDetailsApartment-div-2_img' />
                        </div>
                        <div className='CpPropertyDetailsApartment-div-2_child'>
                            <span className='div-2_child_heading'>Sky Dandelions Apartment</span>
                            <span className='div-2_child_stars gap-2'>
                                <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarEmpty />
                            </span>
                            <span className='div-2_child_address'>Luxury Apartment in Sector-29, Gurugram</span>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default CpPropertyDetailsApartment