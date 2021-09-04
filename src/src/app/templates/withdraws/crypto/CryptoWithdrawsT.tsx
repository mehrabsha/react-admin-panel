import React, { FC } from 'react';
import { PageTitle, PageLink } from '../../../../_metronic/layout/core';
import { CryptoWithdrawData } from '../../../modules/withdraws/crypto/CryptoWithdrawMockData';
import CryptoWithdrawsFilters from '../../../modules/withdraws/crypto/CryptoWithdrawsFilters';
import CryptoWithdrawsList from '../../../modules/withdraws/crypto/CryptoWithdrawsList';

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
        <CryptoWithdrawsFilters />
        <br />
        <CryptoWithdrawsList items={CryptoWithdrawData} />
      </div>
    </>
  );
};

export default WithdrawsT;
