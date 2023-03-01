import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './DashboardTabs.css';
const DashboardTabs = ({ children }) => {
  const [key, setKey] = useState('all');

  return (
    <Tabs
      id="dashboard-tabs"
      activeKey={key}
      onSelect={k => setKey(k)}
      className="mb-3 rounded"
    >
      <Tab eventKey="all" title="All">
        <div className="bg-white p-3">{children}</div>
      </Tab>
      <Tab eventKey="assigned" title="Assigned">
        <div className="bg-white p-3">{children}</div>
      </Tab>
      <Tab eventKey="matured" title="Matured">
        <div className="bg-white p-3">{children}</div>
      </Tab>
      <Tab eventKey="not-matured" title="Not Matured">
        <div className="bg-white p-3">{children}</div>
      </Tab>
    </Tabs>
  );
};

export default DashboardTabs;
