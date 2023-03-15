import React from 'react'
import './Heading.css'

const Heading = ({ title, sub }) => {
  return (
    <>
      <div className='text-center pt-5'>
        <div className='text-orange '>
          <h3 className='sections-heading'>{title}</h3>
        </div>
        <div className='text-bold pb-4'>
          <p className=''>{sub}</p>
        </div>
      </div>
    </>
  )
}

export default Heading