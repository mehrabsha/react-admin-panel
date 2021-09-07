/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { PageTitle } from '../../../_metronic/layout/core';
import {
  MixedWidget10,
  ListsWidget5
} from '../../../_metronic/partials/widgets';
import { AuthenticatedUsersChart } from '../../modules/dashboard/charts/AuthenticatedUsersChart';
import { DepositsChart } from '../../modules/dashboard/charts/DepositsChart';
import { NewUsersChart } from '../../modules/dashboard/charts/NewUsersChart';
import { WithdrawsChart } from '../../modules/dashboard/charts/WithdrawsChart';

const DashboardPage: FC = () => (
  <>
    <div className="row gy-5 g-xl-8">
      <div className="col-xxl-4">
        <NewUsersChart
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="info"
          chartHeight="150px"
        />
        <AuthenticatedUsersChart
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="primary"
          chartHeight="150px"
        />
      </div>
      <div className="col-xxl-4">
        <ListsWidget5 className="card-xxl-stretch" />
      </div>
      <div className="col-xxl-4">
        <DepositsChart
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="success"
          chartHeight="150px"
        />
        <WithdrawsChart
          className="card-xxl-stretch-50 mb-5 mb-xl-8"
          chartColor="danger"
          chartHeight="150px"
        />
      </div>
    </div>
  </>
);

const DashboardWrapper: FC = () => {
  return (
    <>
      <PageTitle showTitle breadcrumbs={[]}>
        Dashboard
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
