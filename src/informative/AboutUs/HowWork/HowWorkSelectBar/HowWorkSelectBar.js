import React from 'react'
import './HowWorkSelectBar.css'
import { useState } from 'react'
import HowWork from '../HowWork'
import HowWorkAgent from '../HowWorkAgent/HowWorkAgent'
import HowWorkBuilder from './../HowWorkBuilder/HowWorkBuilder';

const HowWorkSelectBar = () => {
    const [showSelect, setShowSelect] = useState(1);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 HowWorkSelectBar-col'>
                        <div className='HowWorkSelectBar-div gap-3'>
                            <div className={`HowWorkSelectBar-box ${showSelect === 1 ? 'HowWorkSelectBar-box-active' : ''}`}
                                onClick={() => setShowSelect(1)}>
                                <span>Broker</span>
                            </div>
                            <div className={`HowWorkSelectBar-box ${showSelect === 2 ? 'HowWorkSelectBar-box-active' : ''}`}
                                onClick={() => setShowSelect(2)}>
                                <span className=''>Builder</span>
                            </div>
                            {/* <div className={`HowWorkSelectBar-box ${showSelect === 3 ? 'HowWorkSelectBar-box-active' : ''}`}
                                onClick={() => setShowSelect(3)}>
                                <span className=''>Loan Agent</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* How Nesto Work Broker */}
            {showSelect === 1 ?
                <HowWork />
                : ''
            }
            {showSelect === 2 ?
                <HowWorkBuilder />
                : ''
            }
            {/* {showSelect === 3 ?
                <HowWorkAgent />
                : ''
            } */}
        </>
    )
}

export default HowWorkSelectBar