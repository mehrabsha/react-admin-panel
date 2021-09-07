import { lazy } from 'react';
import Switch from 'react-bootstrap-v5/lib/esm/Switch';
import { Route } from 'react-router-dom';
import CryptoWithdrawsT from '../../../templates/withdraws/crypto/CryptoWithdrawsT';

const Withdraws = () => {
  const WithdrawDetailsT = lazy(
    () =>
      import(
        '../../../templates/withdraws/crypto/crypto-withdraw-details/CryptoWithdrawDetailsT'
      )
  );

  return (
    <>
      <Route exact path="/withdraws/crypto" component={CryptoWithdrawsT} />
      <Route exact path="/withdraws/crypto/:id" component={WithdrawDetailsT} />
    </>
  );
};

export default Withdraws;
