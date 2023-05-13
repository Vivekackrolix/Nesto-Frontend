import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from 'react';
import './Stats.css';

const Stats = () => {
  const [counter1On, setCounter1On] = useState(false);
  const [counter2On, setCounter2On] = useState(false);
  const [counter3On, setCounter3On] = useState(false);
  const [counter4On, setCounter4On] = useState(false);
  return (
    <div className="row stats-row">
      <div className="col-lg-3 col-md-3 col-sm-6 stats-row-col my-3">
        <img
          className="stats-row-img"
          src="./assets/informative/stats/icon4.svg"
          alt="animation"
        />
        <div className="stats-row-count">
          {/* <ScrollTrigger
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
          </ScrollTrigger> */}
          1500+
        </div>
        <p className="stats-row-p">NestoHub Brokers</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 stats-row-col my-3">
        <img className="stats-row-img" src="./assets/informative/stats/icon1.svg" alt="stats" />
        <div className="stats-row-count">
          500+
        </div>
        <p className="stats-row-p">NestoHub Inventory</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 stats-row-col my-3">
        <img
          className="stats-row-img"
          src="./assets/informative/stats/icon2.svg"
          alt="stats"
        />
        <div className="stats-row-count">
          10+
        </div>
        <p className="stats-row-p">NestoHub Builders</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 stats-row-col my-3">
        <img className="stats-row-img" src="./assets/informative/stats/icon3.svg" alt="stats" />
        <div className="stats-row-count">
          7+
        </div>
        <p className="stats-row-p">NestoHub Cities</p>
      </div>
    </div>
  );
};

export default Stats;
