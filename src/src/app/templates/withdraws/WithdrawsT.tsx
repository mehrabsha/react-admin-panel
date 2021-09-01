import React, { FC } from 'react';
import { PageTitle, PageLink } from '../../../_metronic/layout/core';
import { WithdrawData } from '../../modules/withdraws/models/WithdrawMockData';
import { WithdrawModel } from '../../modules/withdraws/models/WithdrawModel';
import WithdrawsFilters from '../../modules/withdraws/WithdrawsFilters';
import WithdrawsList from '../../modules/withdraws/WithdrawsList';

const withdrawBreadCrumbs: Array<PageLink> = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    isSeparator: false,
    isActive: false
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false
  }
];

const WithdrawsT = () => {
  return (
    <>
      <PageTitle breadcrumbs={withdrawBreadCrumbs}>Withdraws</PageTitle>
      <div className="d-flex flex-column">
        <WithdrawsFilters />
        <br />
        <WithdrawsList items={WithdrawData} />
      </div>
    </>
  );
};

export default WithdrawsT;
