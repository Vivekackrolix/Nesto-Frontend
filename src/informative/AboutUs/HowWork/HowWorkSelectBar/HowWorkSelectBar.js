import React from 'react'
import './HowWorkSelectBar.css'
import { useState } from 'react'
import HowWork from '../HowWork'
import HowWorkAgent from '../HowWorkAgent/HowWorkAgent'
import HowWorkBuilder from './../HowWorkBuilder/HowWorkBuilder';

const AboutUsSelectBar = () => {
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
                    <div className='col-lg-12 AboutUsSelectBar-col'>
                        <div className='AboutUsSelectBar-div gap-3'>
                            <div className={`AboutUsSelectBar-box ${showBroker ? 'AboutUsSelectBar-box-active' : ''}`}
                                onClick={selectBroker}>
                                <span>Broker</span>
                            </div>
                            <div className={`AboutUsSelectBar-box ${showBuilder ? 'AboutUsSelectBar-box-active' : ''}`}
                                onClick={selectBuilder}>
                                <span className=''>Builder</span>
                            </div>
                            <div className={`AboutUsSelectBar-box ${showAgent ? 'AboutUsSelectBar-box-active' : ''}`}
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

export default AboutUsSelectBar