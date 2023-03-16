
import React from 'react';
import Heading from '../heading/Heading';
import './chooseus.css';

export default function ChooseUs() {
  const data = [
    {
      img: './assets/informative/choose1.png',
      title: 'Trusted By Thousands',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/choose2.png',
      title: 'Trusted By Thousands',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/choose3.png',
      title: 'Trusted By Thousands',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/choose4.png',
      title: 'Trusted By Thousands',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
  ]
  return (
    <>
      <div className="container" style={{overflow: 'hidden'}}>

        <Heading
          title="Trusted by Millions"
          sub="Why Choose Us"
        />

        <div className="row py-3 mb-4 flex" data-aos='fade-up'>
          {data.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 text-center mb-4">
                <div className="choose-card">
                  <div className="choose-icon-div">
                    <img src={item.img} className='choose-icon-img' />
                  </div>
                  <div className="">
                    <h5 className="card-heading">{item.title}</h5>
                  </div>
                  <div className="">
                    <span className='card-desc'>{item.desc}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
