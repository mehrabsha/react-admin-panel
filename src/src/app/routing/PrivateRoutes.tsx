import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FallbackView } from '../../_metronic/partials';
import { WithdrawModel } from '../modules/withdraws/models/WithdrawModel';
import { WithdrawData } from '../modules/withdraws/models/WithdrawMockData';
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper';
import WithdrawDetails from '../pages/withdraws/WithdrawDetails';
import { Error404 } from '../modules/errors/components/Error404';

interface WithdrawDataProps {
  WithdrawData: WithdrawModel[];
}
const renderWithdraws = (routerProps: any) => {
  let withdrawId = parseInt(routerProps.match.params.id);
  let foundWithdraw = WithdrawData.find(
    withdrawObj => withdrawObj.id === withdrawId
  );
  return foundWithdraw ? (
    <WithdrawDetails WithdrawData={foundWithdraw} />
  ) : (
    <Error404 />
  );
};

export function PrivateRoutes() {
  // const example = lazy(() => import('../pages/pageFolder/pageFile'))
  const Users = lazy(() => import('../pages/users/Users'));
  const Withdraws = lazy(() => import('../pages/withdraws/Withdraws'));

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path="/dashboard" component={DashboardWrapper} />
        <Route path="/users" component={Users} />
        <Route
          path="/withdraws/:id"
          render={routerProps => renderWithdraws(routerProps)}
        />
        <Route path="/withdraws" component={Withdraws} />
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="error/404" />
      </Switch>
    </Suspense>
  );
}
