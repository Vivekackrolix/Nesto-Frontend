//full responsive and triggered stats count up done


import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import './Stats.css'

const Stats = () => {
    const [counter1On, setCounter1On] = useState(false);
    const [counter2On, setCounter2On] = useState(false);
    const [counter3On, setCounter3On] = useState(false);
    const [counter4On, setCounter4On] = useState(false);
    return (
        <div className="row stats-row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-row-col">
                <img className="stats-row-img" src='./assets/stats1.png' />
                <div className="stats-row-count">
                    <ScrollTrigger
                        onEnter={() => setCounter1On(true)}
                        onExit={() => setCounter1On(false)}
                    >
                        {counter1On && (
                            <CountUp
                                start={0.0}
                                end={56.18}
                                decimals={3}
                                decimal=","
                                suffix="+"
                                duration={2}
                            />
                        )}
                    </ScrollTrigger>
                </div>
                <p className="stats-row-p">
                    HOMES FOR SALE
                </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-row-col">
                <img className="stats-row-img" src='./assets/stats2.png' />
                <div className="stats-row-count">
                    <ScrollTrigger
                        onEnter={() => setCounter2On(true)}
                        onExit={() => setCounter2On(false)}
                    >
                        {counter2On && <CountUp
                            start={0.0}
                            end={35.469}
                            decimals={3}
                            decimal=","
                            suffix="+"
                            duration={2}
                        />}

                    </ScrollTrigger>
                </div>
                <p className="stats-row-p">
                    RECENTLY SOLD
                </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-row-col">
                <img className="stats-row-img" src='./assets/stats3.png' />
                <div className="stats-row-count">
                    <ScrollTrigger
                        onEnter={() => setCounter3On(true)}
                        onExit={() => setCounter3On(false)}
                    >
                        {counter3On && <CountUp start={0} end={560} suffix="+" duration={2} />}

                    </ScrollTrigger>
                </div>
                <p className="stats-row-p">
                    TOTAL SQ
                </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 stats-row-col">
                <img className="stats-row-img" src='./assets/stats4.png' />
                <div className="stats-row-count">
                    <ScrollTrigger
                        onEnter={() => setCounter4On(true)}
                        onExit={() => setCounter4On(false)}
                    >
                        {counter4On && <CountUp start={0} end={30} suffix="%" duration={2} />}
                    </ScrollTrigger>
                </div>
                <p className="stats-row-p">
                    PRICE REDUCED
                </p>
            </div>
        </div>
    );
};

export default Stats