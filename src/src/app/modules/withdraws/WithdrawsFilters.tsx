import Select from 'react-select';
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';

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

const WithdrawsFilters = () => {
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
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="userid">Id</label>
                <input
                  className="form-control"
                  id="userid"
                  name="id"
                  placeholder="12345"
                />
              </div>
            </div>
            <div className="col-4 ">
              <label>Currency</label>
              <Select
                //value={selectedStatus}
                onChange={e => {
                  console.log(e);
                }}
                options={currncyOptions}
                placeholder="select currency ..."
              />
            </div>
            <div className="col-4 form-group">
              <label>Status</label>
              <Select
                //value={selectedStatus}
                onChange={e => {
                  console.log(e);
                }}
                options={statusOptions}
                placeholder="select status ..."
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
