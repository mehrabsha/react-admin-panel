import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Withdraws = () => {
  const WithdrawT = lazy(() => import('../../templates/withdraws/WithdrawsT'));
  const WithdrawDetailsT = lazy(
    () => import('../../templates/withdraws/withdraw-details/WithdrawDetailsT')
  );

  return (
    <>
      <Route exact path="/withdraws" component={WithdrawT} />
      <Route exact path="/withdraws/:id" component={WithdrawDetailsT} />
    </>
  );
};

export default Withdraws;
