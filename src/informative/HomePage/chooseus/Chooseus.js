
import React from 'react';
import Heading from '../Heading/Heading';
import './ChooseUs.css';

export default function ChooseUs() {
  const data = [
    {
      img: './assets/informative/choose1.png',
      title: 'Trusted By Thousands',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/choose2.png',
      title: 'Wide Range Of Properties',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/choose3.png',
      title: 'Financing Made Easy',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
    {
      img: './assets/informative/choose4.png',
      title: 'See Neighborhoods',
      desc: 'With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.',
    },
  ]
  return (
    <>
      <div className="container" style={{ overflow: 'hidden' }}>

        <Heading
          title="Trusted by Millions"
          sub="Why Choose Us"
        />

        <div className="row p-3 mb-5 flex" data-aos='fade-up'>
          {data.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 choose-col">
                <div className="choose-card">
                  <div className='choose-icon-div'>
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
