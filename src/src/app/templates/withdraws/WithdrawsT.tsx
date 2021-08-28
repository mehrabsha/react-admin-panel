import React from 'react';
import WithdrawsFilters from '../../modules/withdraws/WithdrawsFilters';
import WithdrawsList from '../../modules/withdraws/WithdrawsList';

const WithdrawsT = () => {
  return (
    <div className="d-flex flex-column">
      <WithdrawsFilters></WithdrawsFilters>
      <br />
      <WithdrawsList></WithdrawsList>
    </div>
  );
};

export default WithdrawsT;
