import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap-v5';
import RialWithdrawForms from './RialWithdrawForms';
import RialWithdrawOperation from './RialWithdrawOperation';

const RialWithdrawTabs = () => {
  const [key, setKey] = useState('specifications');
  return (
    <div className="card">
      <div className="card-body">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k: any) => setKey(k)}
          className="mb-3 fs-4 overflow-auto"
          style={{ whiteSpace: 'nowrap', flexWrap: 'nowrap' }}
        >
          <Tab eventKey="specifications" title="Withdraw specifications">
            <RialWithdrawForms />
          </Tab>
          <Tab eventKey="operation" title="Operations">
            <RialWithdrawOperation />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default RialWithdrawTabs;
