import React from 'react';
import { WithdrawData } from './models/WithdrawMockData';
import WithdrawsListItem from './WithdrawListItem';

const WithdrawsList = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title card-label fw-bolder fs-3">Withdraws</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
            <thead>
              <tr className="fw-bolder text-muted">
                <th className="min-w-120px">Withdraw Id</th>
                <th className="min-w-180px">User</th>
                <th className="min-w-120px">User confirmation</th>
                <th className="min-w-120px">Date</th>
                <th className="min-w-120px">Amount</th>
                <th className="min-w-120px">Status</th>
                <th className="min-w-100px text-end">Actions</th>
              </tr>
            </thead>
            <WithdrawsListItem items={WithdrawData} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawsList;
