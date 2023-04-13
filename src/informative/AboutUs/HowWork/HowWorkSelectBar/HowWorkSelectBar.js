import React from 'react'
import './HowWorkSelectBar.css'
import { useState } from 'react'
import HowWork from '../HowWork'
import HowWorkAgent from '../HowWorkAgent/HowWorkAgent'
import HowWorkBuilder from './../HowWorkBuilder/HowWorkBuilder';

const HowWorkSelectBar = () => {
    const [showBroker, setShowBroker] = useState(true);
    const [showBuilder, setShowBuilder] = useState(false)
    const [showAgent, setShowAgent] = useState(false)

    function selectBroker() {
        setShowBroker(true)
        setShowBuilder(false)
        setShowAgent(false)
    }

    function selectBuilder() {
        setShowBroker(false)
        setShowBuilder(true)
        setShowAgent(false)
    }

    function selectAgent() {
        setShowBroker(false)
        setShowBuilder(false)
        setShowAgent(true)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 HowWorkSelectBar-col'>
                        <div className='HowWorkSelectBar-div gap-3'>
                            <div className={`HowWorkSelectBar-box ${showBroker ? 'HowWorkSelectBar-box-active' : ''}`}
                                onClick={selectBroker}>
                                <span>Broker</span>
                            </div>
                            <div className={`HowWorkSelectBar-box ${showBuilder ? 'HowWorkSelectBar-box-active' : ''}`}
                                onClick={selectBuilder}>
                                <span className=''>Builder</span>
                            </div>
                            <div className={`HowWorkSelectBar-box ${showAgent ? 'HowWorkSelectBar-box-active' : ''}`}
                                onClick={selectAgent}>
                                <span className=''>Loan Agent</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* How Nesto Work Broker */}
            {showBroker === true ?
                <HowWork />
                : ''
            }
            {showBuilder === true ?
                <HowWorkBuilder />
                : ''
            }
            {showAgent === true ?
                <HowWorkAgent />
                : ''
            }
        </>
    )
}

export default HowWorkSelectBar