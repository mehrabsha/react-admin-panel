import React from 'react';
import { useFormik } from 'formik';
import clsx from 'clsx';

const WithdrawForms = () => {
  const formik = useFormik({
    initialValues: {
      username: 'ftm mehrani',
      id: '5630',
      currency: 'TRX',
      amount: '3',
      date: '25/08/2021 - 13:56',
      jalaliDate: '03/06/1400 - 13:56',
      status: 'Canceled',
      orderId: 'wthRXb5IYLHBBB8zN65e99beef66c1eCN2g5YfBB9WbjmH'
    },
    onSubmit: values => {
      console.log(values);
    }
  });
  return (
    <div className="card-body px-1 p-lg-7">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-8 row">
          <div className="col-md-4 form-group mb-md-0 mb-6">
            <label className="text-muted form-label">Full Name</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={formik.values.username}
              readOnly
            />
          </div>
          <div className="col-md-4 form-group mb-md-0 mb-6">
            <label className="text-muted form-label">Identifier</label>
            <input
              className="form-control"
              type="text"
              name="id"
              value={formik.values.id}
              readOnly
            />
          </div>
          <div className="col-md-4 form-group mb-md-0 mb-6">
            <label className="text-muted form-label">Currency</label>
            <input
              className="form-control"
              type="text"
              value={formik.values.currency}
              name="currency"
              readOnly
            />
          </div>
        </div>
        <div className="mb-8 row">
          <div className="col-md-4 form-group mb-md-0 mb-6">
            <label className="text-muted form-label">Amount</label>
            <input
              className="form-control"
              type="text"
              value={formik.values.amount}
              name="amount"
              readOnly
            />
          </div>
          <div className="col-md-6 form-group mb-md-0 mb-9">
            <label className="text-muted form-label">Date</label>
            <div className="d-flex">
              <input
                className="form-control me-1"
                type="text"
                value={formik.values.date}
                name="date"
                readOnly
              />
              <input
                className="form-control"
                type="text"
                value={formik.values.jalaliDate}
                name="jalaliDate"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-2 form-group d-md-block d-flex">
            <label className="text-muted form-label me-4">Status</label>
            <div className="mt-md-3">
              <span
                className={clsx(
                  'badge',
                  formik.values.status === 'Approved'
                    ? 'badge-light-success'
                    : formik.values.status === 'In Progress'
                    ? 'badge-light-primary'
                    : formik.values.status === 'Canceled'
                    ? 'badge-light-danger'
                    : 'badge-light-warning'
                )}
              >
                {formik.values.status}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-8 row">
          <div className="col-md-12 form-group">
            <label className="text-muted form-label">Sender Address</label>
            <input
              className="form-control"
              type="text"
              name="senderAddress"
              onChange={formik.handleChange}
            />
            <small className="text-info">
              You as a developer can edit this field
            </small>
          </div>
        </div>
        <div className="mb-8 row">
          <div className="col-md-12 form-group">
            <label className="text-muted form-label">Receiver Address</label>
            <input
              className="form-control"
              type="text"
              name="receiverAddress"
              onChange={formik.handleChange}
            />
            <small className="text-info">
              You as a developer can edit this field
            </small>
          </div>
        </div>
        <div className="mt-20 mb-8 row">
          <div className="col-md-12 form-group">
            <label className="text-muted form-label">Txid</label>
            <input
              className="form-control"
              type="text"
              name="txid"
              onChange={formik.handleChange}
              placeholder="example: c02b5add1fa311f48c767b41f4a7..."
            />
          </div>
        </div>
        <div className="mb-8 row">
          <div className="col-md-12 form-group">
            <label className="text-muted form-label">Exchange ID</label>
            <input
              className="form-control"
              type="text"
              name="exchnageId"
              onChange={formik.handleChange}
              placeholder="example: 1767b05287cb404a8a1d635136ee7fa3"
            />
          </div>
        </div>
        <div className="mb-8 row">
          <div className="col-md-12 form-group">
            <label className="text-muted form-label">
              Order ID to the exchange
            </label>
            <input
              className="form-control"
              type="text"
              name="orderId"
              disabled
              value={formik.values.orderId}
            />
          </div>
        </div>
        <div className="mb-8 row">
          <div className="col-md-12 form-group">
            <label className="text-muted form-label">
              Status in the exchange
            </label>
            <textarea
              className="form-control"
              name="statusExchange"
              rows={4}
              disabled
            ></textarea>
          </div>
        </div>
        <div className="mb-8 row">
          <div className="col-md-6 form-group mb-md-0 mb-6">
            <label className="text-muted form-label">Description</label>
            <textarea
              name="description"
              rows={4}
              className="form-control"
            ></textarea>
          </div>
          <div className="col-md-6 form-group">
            <label className="text-muted form-label">Manager Description</label>
            <textarea
              name="managerDescription"
              rows={4}
              placeholder="This description is for the administrator only"
              className="form-control"
            ></textarea>
          </div>
        </div>
        <div className="text-end">
          <button
            type="submit"
            className="btn btn-danger me-md-2 mb-3"
            style={{ minWidth: '150px' }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-warning me-md-2 mb-3"
            style={{ minWidth: '150px' }}
          >
            Transaction
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ minWidth: '150px' }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithdrawForms;
