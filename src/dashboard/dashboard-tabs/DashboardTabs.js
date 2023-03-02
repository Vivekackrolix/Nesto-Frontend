import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './DashboardTabs.css';
const DashboardTabs = ({ children, tabsKey }) => {
  const [key, setKey] = useState('All');

  return (
    <Tabs
      id="dashboard-tabs"
      activeKey={key}
      onSelect={k => setKey(k)}
      className="mb-3 rounded"
    >
      {tabsKey &&
        tabsKey.map((item, index) => (
          <Tab eventKey={item} title={item} key={index}>
            <div className="bg-white p-3">{children}</div>
          </Tab>
        ))}
    </Tabs>
  );
};

export default DashboardTabs;
