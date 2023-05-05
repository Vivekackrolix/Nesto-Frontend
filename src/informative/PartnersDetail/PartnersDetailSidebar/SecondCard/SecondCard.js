import React from 'react'
import './SecondCard.css'
import { Link } from 'react-router-dom'

const SecondCard = ({ url }) => {
    return (
        <>
            <div className='d-flex justify-content-between partners-second__card rounded-3' data-aos='fade-left'>
                <div style={{ width: '100%' }}>
                    <div className='second-card__box rounded-3'>
                        <div className='text-center'>
                            <span className='second-card__span-1'>Download NestoHub Mobile App</span>
                        </div>
                        <div className='d-flex gap-2 second-card__btn-div'>
                            <div>
                                <Link
                                    to="/"
                                    className="d-flex align-items-center"
                                >
                                    <div>
                                        <img
                                            src="/assets/informative/Google-Play.png"
                                            className="second-card__icon"
                                            alt="google-play"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="/"
                                    className="d-flex align-items-center"
                                >
                                    <div>
                                        <img
                                            src="/assets/informative/Apple.png"
                                            className="second-card__icon"
                                            alt="apple"
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='second-card__box-2' data-aos="flip-left">
                            <img src={url} className='second-card__img-1' alt="second-card" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondCard