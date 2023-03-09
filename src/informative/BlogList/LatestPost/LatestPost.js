import React from 'react'
import './LatestPost.css'
import LatestPostLeft from '../LatestPost/LatestPostLeft/LatestPostLeft'
import LatestPostRight from '../LatestPost/LatestPostRight/LatestPostRight'

const LatestPost = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8'>
                <LatestPostLeft />
            </div>
            <div className='col-lg-4'>
                <LatestPostRight />
            </div>
        </div>
    </div>
  )
}

export default LatestPost