import React from 'react';
import HomeBanner from './Images/HomeBanner.png'


export default function Home() {
  return (
    <>

      <div className="row my-5">
        <div className="col-md-12">
          <div className="pageBanner">
            <img
              src={HomeBanner} alt='Page Banner'
              style={{ width: '100%' }}
            />
          </div>
          <div className="bannerText">
            <h1>Summer Vacation</h1>
          </div>
        </div>
      </div>


    </>
  )
}
