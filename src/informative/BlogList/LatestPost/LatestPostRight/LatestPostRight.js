import React from 'react'
import './LatestPostRight.css'
import { BsSearch } from 'react-icons/bs'

const LatestPostRight = () => {
  const data = [
    {
      img: '/assets/informative/trending1.png',
      para: 'How to get better agents in New York, USA',
      name: 'Sarah Harding',
      userImg: '/assets/informative/articleImg4.png',
    },
    {
      img: '/assets/informative/trending1.png',
      para: 'How to get better agents in New York, USA',
      name: 'Sarah Harding',
      userImg: '/assets/informative/articleImg4.png',
    },
    {
      img: '/assets/informative/trending1.png',
      para: 'How to get better agents in New York, USA',
      name: 'Sarah Harding',
      userImg: '/assets/informative/articleImg4.png',
    },
    {
      img: '/assets/informative/trending1.png',
      para: 'How to get better agents in New York, USA',
      name: 'Sarah Harding',
      userImg: '/assets/informative/articleImg4.png',
    },
    {
      img: '/assets/informative/trending1.png',
      para: 'How to get better agents in New York, USA',
      name: 'Sarah Harding',
      userImg: '/assets/informative/articleImg4.png',
    },
    {
      img: '/assets/informative/trending1.png',
      para: 'How to get better agents in New York, USA',
      name: 'Sarah Harding',
      userImg: '/assets/informative/articleImg4.png',
    },
    {
      img: '/assets/informative/trending1.png',
      para: 'How to get better agents in New York, USA',
      name: 'Sarah Harding',
      userImg: '/assets/informative/articleImg4.png',
    },
  ]
  return (
    <div className='latest-post-right'>
      <div className='latest-left_input-box'>
        <input
          type='text'
          placeholder='Search...'
          className='latest-left_input'>
        </input>
        <BsSearch className='latest-left_search-icon' />
      </div>
      {/* <div className='container'> */}
      <div className='row'>
        <div className='col-lg-12'>
          <div className='latest-left_box-1'>
            <span className='latest-left_span-1'>Trending Now</span>
            <hr />
            {data.map((item) => {
              return (
                <div className='latest-left_box-2 gap-3'>
                  <div className='latest-left_box-3'>
                    <img className='latest-left_img-1' src={item.img} />
                  </div>
                  <div className='latest-left_box-4'>
                    <span className='latest-left_span-2'>{item.para}</span>
                    <div className='mt-1'>
                      <span>
                        <img src={item.userImg} className='latest-left_img-2' />
                        <span className='latest-left_span-3'> {item.name}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default LatestPostRight