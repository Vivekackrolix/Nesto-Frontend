import React from 'react'
import BrokerLogin from './Login/BrokerLogin'
import Header from './Common/Header/Header'
import Banner from './Common/PageBanner/Banner'



export default function Wrapper() {
    return (
        <>
            <section className='mainPage'>
               <Header />
                <div className="container">
                  <Banner/>

                </div>
            </section>
        </>
    )
}
