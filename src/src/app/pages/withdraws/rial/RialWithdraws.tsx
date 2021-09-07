import { lazy } from 'react';
import { Route } from 'react-router-dom';
import RialWithdrawsT from '../../../templates/withdraws/rial/RialWithdrawsT';

const RialWithdraws = () => {
  const WithdrawDetailsT = lazy(
    () =>
      import(
        '../../../templates/withdraws/rial/rial-withdraw-details/RialWithdrawDetailsT'
      )
  );

  return (
    <>
      <Route exact path="/withdraws/rial" component={RialWithdrawsT} />
      <Route exact path="/withdraws/rial/:id" component={WithdrawDetailsT} />
    </>
  );
};

export default RialWithdraws;
