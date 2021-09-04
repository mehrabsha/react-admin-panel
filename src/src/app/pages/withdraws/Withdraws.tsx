import { lazy } from 'react';
import { Route } from 'react-router-dom';
import WithdrawsT from '../../templates/withdraws/WithdrawsT';

const Withdraws = () => {
  const WithdrawDetailsT = lazy(
    () => import('../../templates/withdraws/withdraw-details/WithdrawDetailsT')
  );

  return (
    <>
      <Route exact path="/withdraws" component={WithdrawsT} />
      <Route exact path="/withdraws/:id" component={WithdrawDetailsT} />
    </>
  );
};

export default Withdraws;
