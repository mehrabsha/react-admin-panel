import Select from 'react-select';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const statusOptions = [
  { value: 'pending', label: 'Pending' },
  { value: 'canceled', label: 'Canceled' },
  { value: 'approved', label: 'Approved' },
  { value: 'rejected', label: 'Rejected' }
];
const currncyOptions = [
  { value: 'btc', label: 'Bitcoin' },
  { value: 'xrp', label: 'Xripple' },
  { value: 'ada', label: 'Cardano' },
  { value: 'dot', label: 'Polkadot' },
  { value: 'doge', label: 'Dogecoin' },
  { value: 'safemoon', label: 'safemoon' }
];

interface optionItems {
  value: string;
  label: string;
}

const selectDefaultValue = (options: optionItems[], value: string) =>
  options
    ? options.find(option => option.value === value)
    : { value: '', label: '' };

const WithdrawsFilters = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: '',
      currency: 'btc',
      status: 'approved'
    },
    onSubmit: values => {
      console.log(values);
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
        <form>
          <div className="row">
            <div className="col-4 form-group my-2">
              <label htmlFor="withdrawid">Withdraw id</label>
              <input
                className="form-control"
                id="withdrawid"
                name="id"
                placeholder="12345"
                onChange={formik.handleChange}
                value={formik.values.id}
              />
            </div>
            <div className="col-4  form-group my-2">
              <label>Currency</label>
              <Select
                value={selectDefaultValue(
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
            <div className="col-4 form-group my-2">
              <label>Status</label>
              <Select
                value={selectDefaultValue(statusOptions, formik.values.status)}
                onChange={value => formik.setFieldValue('status', value?.value)}
                name="status"
                options={statusOptions}
                placeholder="select status ..."
              />
            </div>

            <div className="col-6 form-group my-2">
              <label htmlFor="user">User</label>
              <input
                className="form-control"
                id="user"
                name="user"
                placeholder="first name , last name , mobile , ..."
              />
            </div>
            <div className="col-3 form-group my-2">
              <label htmlFor="network">From date</label>
              <input
                className="form-control"
                id="network"
                name="network"
                placeholder="2021/10/08"
              />
            </div>
            <div className="col-3 form-group my-2">
              <label htmlFor="network">To date</label>
              <input
                className="form-control"
                id="network"
                name="network"
                placeholder="2021/12/04"
              />
            </div>

            <div className="col-8 form-group my-2">
              <label htmlFor="network">Tx id</label>
              <input
                className="form-control"
                id="network"
                name="network"
                placeholder="2021/12/04"
              />
            </div>
            <div className="col-4  form-group my-2">
              <label htmlFor="network">Network</label>
              <input
                className="form-control"
                id="network"
                name="network"
                placeholder="bep20 ,..."
              />
            </div>
          </div>
        </form>
      </div>
      {/* end::Body */}
    </div>
  );
};

export default WithdrawsFilters;
