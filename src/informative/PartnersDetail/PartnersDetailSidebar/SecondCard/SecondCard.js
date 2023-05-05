import React from 'react'
import './SecondCard.css'
import { Link } from 'react-router-dom'
import { Fade, Flip } from 'react-reveal'

const SecondCard = ({ url }) => {
    return (
        <>
            <Fade right duration={1000} delay={100}>
                <div className='d-flex justify-content-between partners-second__card rounded-3'>
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
                            <Flip right duration={1000} delay={100}>
                                <div className='second-card__box-2'>
                                    <img src={url} className='second-card__img-1' alt="second-card" />
                                </div>
                            </Flip>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default SecondCard