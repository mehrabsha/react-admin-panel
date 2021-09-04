import React from 'react';
import { PageTitle, PageLink } from '../../../../_metronic/layout/core';
import WithdrawTabs from '../../../modules/withdraws/withdraw-details/WithdrawTabs';

const withdrawDetailsBreadCrumbs: Array<PageLink> = [
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
  },
  {
    title: 'Withdraws',
    path: '/withdraws',
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

const WithdrawDetialsT = () => {
  return (
    <>
      <PageTitle breadcrumbs={withdrawDetailsBreadCrumbs}>
        Withdraw details
      </PageTitle>
      <WithdrawTabs />
    </>
  );
};

export default WithdrawDetialsT;
