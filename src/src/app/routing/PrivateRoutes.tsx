import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FallbackView } from '../../_metronic/partials';
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper';

export function PrivateRoutes() {
  // const example = lazy(() => import('../pages/pageFolder/pageFile'))
  const Users = lazy(() => import('../pages/users/Users'));
  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path="/dashboard" component={DashboardWrapper} />
        <Route path="/users" component={Users} />
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="error/404" />
      </Switch>
    </Suspense>
  );
}
