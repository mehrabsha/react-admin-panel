import React, { FC } from 'react';
import { Pagination } from 'react-bootstrap-v5';
import RialWithdrawListItem from './RialWithdrawListItem';

let active: number = 2;
const pagination: Array<any> = [];
for (let number: number = 1; number < 6; number++) {
  pagination.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const RialWithdrawsList = (props: any) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-row-bordered fs-7 table-row-gray-100 align-middle gs-0 gy-3"
            style={{ whiteSpace: 'nowrap' }}
          >
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
            <tbody>
              {props.items.map((row: any, index: number) => (
                <tr key={index}>
                  <RialWithdrawListItem item={row} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination className="mt-4">{pagination}</Pagination>
      </div>
    </div>
  );
};

export default RialWithdrawsList;
