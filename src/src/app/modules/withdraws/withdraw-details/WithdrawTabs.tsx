import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap-v5';
import WithdrawForms from './WithdrawForms';
import WithdrawOperation from './WithdrawOperation';

const WithdrawTabs = () => {
  const [key, setKey] = useState('specifications');
  return (
    <div className="card">
      <div className="card-body">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k: any) => setKey(k)}
          className="mb-3 fs-4"
        >
          <Tab eventKey="specifications" title="Withdraw specifications">
            <WithdrawForms />
          </Tab>
          <Tab eventKey="operation" title="Operations">
            <WithdrawOperation />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default WithdrawTabs;
