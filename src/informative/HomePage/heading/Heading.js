import React from 'react'

const Heading = ({title,sub}) => {
  return (
    <>
    <div className='text-center'>
                <div className='text-orange '>
                    <h1>{title}</h1>
                </div>
                <div className='text-bold pb-4'>
                    <h1>{sub}</h1>
                </div>
            </div>
    </>
  )
}

export default Heading