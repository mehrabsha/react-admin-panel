import React from 'react';

const RialWithdrawOperation = () => {
  return (
    <div className="my-8">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body px-1 p-lg-7">
              <div className="card-title fs-4 fw-bolder">
                EXAMINE THE DOCUMENT AND THE RECORD RECORDS OF THIS REQUEST
              </div>
              <div className="alert alert-warning mt-6">
                Withdrawal requests may not have a document and a record
                document. This code allows you to check the document and create
                the relevant record document.
                <div className="mt-5">
                  <button className="btn btn-primary fs-8 me-2 mb-2">
                    Document review
                  </button>
                  <button className="btn btn-primary fs-8 me-2 mb-2">
                    Check the record document
                  </button>
                  <button className="btn btn-primary fs-8 mb-2">
                    Check Balance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body px-1 p-lg-7">
              <div className="card-title fs-4 fw-bolder">
                CHECK THE WITHDRAWAL REQUEST AND RELATED BALANCE TRANSACTION
              </div>
              <div className="alert alert-warning mt-6">
                Requests whose withdrawal has been approved but the inventory is
                still in block can be checked through this section
                <div className="mt-5">
                  <button className="btn btn-primary fs-8 me-2 mb-2">
                    Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RialWithdrawOperation;
