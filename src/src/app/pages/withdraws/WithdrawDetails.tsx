import { PageTitle, PageLink } from '../../../_metronic/layout/core';

const withdrawBreadCrumbs: Array<PageLink> = [
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

const WithdrawDetails = (props: any) => {
  return (
    <>
      <PageTitle breadcrumbs={withdrawBreadCrumbs}>Withdraw Details</PageTitle>
      <div className="card">
        <div className="card-body">{props.WithdrawData.id}</div>
        <div className="card-body">{props.WithdrawData.username}</div>
      </div>
    </>
  );
};

export default WithdrawDetails;
