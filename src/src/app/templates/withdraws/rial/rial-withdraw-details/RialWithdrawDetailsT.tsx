import React from 'react';
import { PageTitle, PageLink } from '../../../../../_metronic/layout/core';
import RialWithdrawTabs from '../../../../modules/withdraws/rial/rial-withdraw-details/RialWithdrawTabs';

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
      <RialWithdrawTabs />
    </>
  );
};

export default WithdrawDetialsT;
