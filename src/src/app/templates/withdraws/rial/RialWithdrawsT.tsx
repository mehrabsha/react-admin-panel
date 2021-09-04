import { PageTitle, PageLink } from '../../../../_metronic/layout/core';
import { RialWithdrawData } from '../../../modules/withdraws/rial/RialWithdrawMockData';
import RialWithdrawsList from '../../../modules/withdraws/rial/RialWithdrawsList';
import RialWithdrawsFilters from '../../../modules/withdraws/rial/RialWithdrawsFilters';

const withdrawBreadCrumbs: Array<PageLink> = [
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
  }
];

const RialWithdrawsT = () => {
  return (
    <>
      <PageTitle breadcrumbs={withdrawBreadCrumbs}>Withdraws</PageTitle>
      <div className="d-flex flex-column">
        <RialWithdrawsFilters />
        <br />
        <RialWithdrawsList items={RialWithdrawData} />
      </div>
    </>
  );
};

export default RialWithdrawsT;
