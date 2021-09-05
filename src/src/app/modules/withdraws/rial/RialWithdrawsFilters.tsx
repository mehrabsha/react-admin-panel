import Select from 'react-select';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import selectValueSelector from '../../../../utils/selectValueSelector';
import DatePicker from 'react-multi-date-picker';
import CustomDatePicker from '../../global/date-picker/DatePicker';

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'canceled', label: 'Canceled' },
  { value: 'approved', label: 'Approved' },
  { value: 'rejected', label: 'Rejected' }
];
const networkOptions = [
  { value: 'all', label: 'All' },
  { value: 'bep20', label: 'Bep20' },
  { value: 'erc20', label: 'Bep20' },
  { value: 'bsc', label: 'Bsc' },
  { value: 'trc20', label: 'Trc20' }
];
const currncyOptions = [
  { value: 'all', label: 'All' },
  { value: 'btc', label: 'Bitcoin' },
  { value: 'xrp', label: 'Xripple' },
  { value: 'ada', label: 'Cardano' },
  { value: 'dot', label: 'Polkadot' },
  { value: 'doge', label: 'Dogecoin' },
  { value: 'safemoon', label: 'safemoon' }
];

const RialWithdrawsFilters = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: '',
      currency: 'all',
      status: 'all',
      network: 'all',
      tcode: '',
      dateFrom: '',
      dateTo: ''
    },
    onSubmit: values => {
      console.log('VALUES', values);
      history.push({
        // search: `?id=${values.id}&currency=${values.crypto}`
        search: `?${new URLSearchParams(values).toString()}`
      });
    }
  });

  return (
    <div className="card card-xl-stretch mb-5 mb-xl-8">
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bolder text-dark">Filters</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-0">
        <form onSubmit={formik.handleSubmit}>
          <div className="row gy-5">
            <div className="col-12 col-sm-6 col-xl-2 form-group">
              <label htmlFor="withdrawid">Withdraw id</label>
              <input
                className="form-control"
                id="withdrawid"
                name="id"
                placeholder="Ex : 135"
                onChange={formik.handleChange}
                value={formik.values.id}
              />
            </div>
            <div className="col-12 col-sm-6 col-xl-2 form-group">
              <label>Status</label>
              <Select
                value={selectValueSelector(statusOptions, formik.values.status)}
                onChange={value => formik.setFieldValue('status', value?.value)}
                name="status"
                options={statusOptions}
                placeholder="select status ..."
              />
            </div>
            <div className="col-12 col-sm-6 col-xl-2  form-group">
              <label>Currency</label>
              <Select
                value={selectValueSelector(
                  currncyOptions,
                  formik.values.currency
                )}
                onChange={value =>
                  formik.setFieldValue('currency', value?.value)
                }
                name="currency"
                options={currncyOptions}
                placeholder="select currency ..."
              />
            </div>
            <div className="col-12 col-sm-6 col-xl-2 form-group">
              <label>Network</label>
              <Select
                value={selectValueSelector(
                  networkOptions,
                  formik.values.network
                )}
                onChange={value =>
                  formik.setFieldValue('network', value?.value)
                }
                name="network"
                options={networkOptions}
                placeholder="select network ..."
              />
            </div>

            <div className="col-12 col-sm-6 col-xl-4 form-group">
              <label htmlFor="user">User</label>
              <input
                className="form-control"
                id="user"
                name="user"
                placeholder="first name , last name , mobile , ..."
              />
            </div>
            <div className="col-12 col-sm-6 col-xl-3 form-group">
              <label htmlFor="network">From date</label>
              <CustomDatePicker
                name="dateFrom"
                value={formik.values.dateFrom}
                setFieldValue={formik.setFieldValue}
              />
            </div>
            <div className="col-12 col-sm-6 col-xl-3 form-group">
              <label htmlFor="network">To date</label>
              <CustomDatePicker
                name="dateTo"
                value={formik.values.dateTo}
                setFieldValue={formik.setFieldValue}
              />
            </div>

            <div className="col-12 col-sm-6 col-xl-6 form-group">
              <label htmlFor="tcode">Tracking code:</label>
              <input
                className="form-control"
                id="tcode"
                name="tcode"
                placeholder="Ex : 880518344"
              />
            </div>
          </div>
          <div className="row mt-2 gy-5">
            <div className="col-12 col-sm-6 col-xl-2">
              <button type="submit" className="w-100 btn btn-primary">
                Search
              </button>
            </div>

            <div className="col-12 col-sm-6 col-xl-2">
              <button
                onClick={formik.handleReset}
                type="button"
                className="w-100 btn btn-danger"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end::Body */}
    </div>
  );
};

export default RialWithdrawsFilters;
