import React, { FC } from 'react';
import { WithdrawModel } from './models/WithdrawModel';
import clsx from 'clsx';
import { Link, Route } from 'react-router-dom';

interface WithdrawDataProps {
  items: WithdrawModel[];
}

const WithdrawsListItem: FC<WithdrawDataProps> = props => {
  return (
    <tbody>
      {props.items.map((row: any, index: number) => (
        <tr key={index}>
          <td>
            <Link
              to={'withdraws/' + row.id}
              className="text-dark fw-bolder text-hover-primary fs-6"
            >
              {row.id}
            </Link>
          </td>
          <td>
            <a
              href="#"
              className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
            >
              {row.username}
            </a>
            <span className="text-muted fw-bold text-muted d-block fs-7">
              {row.phone}
            </span>
          </td>
          <td>
            {row.emialConfirm ? (
              <span className="text-dark fw-bolder d-block mb-1 fs-7">
                Email:<i className="fas fa-check-square ms-1 text-success"></i>
              </span>
            ) : (
              <span className="text-muted fw-bolder d-block mb-1 fs-7">
                Email:<i className="fas fa-window-close ms-1 text-danger"></i>
              </span>
            )}
            {row.googleConfirm ? (
              <span className="text-dark fw-bolder d-block mb-1 fs-7">
                Google Auth:
                <i className="fas fa-check-square ms-1 text-success"></i>
              </span>
            ) : (
              <span className="text-muted fw-bolder d-block mb-1 fs-7">
                Google Auth:
                <i className="fas fa-window-close ms-1 text-danger"></i>
              </span>
            )}
            {row.googleConfirm && row.emialConfirm ? (
              <span className="text-dark fw-bolder d-block mb-1 fs-7">
                Final:<i className="fas fa-check-square ms-1 text-success"></i>
              </span>
            ) : (
              <span className="text-muted fw-bolder d-block mb-1 fs-7">
                Final:<i className="fas fa-window-close ms-1 text-danger"></i>
              </span>
            )}
          </td>
          <td>
            <span className="text-dark fw-bolder d-block mb-2 fs-7">
              {row.jalaliDate}
            </span>
            <span className="text-muted fw-bolder d-block fs-8">
              {row.date}
            </span>
          </td>
          <td>
            <span className="text-dark fw-bolder d-block mb-1 fs-7">
              {row.amount}
            </span>
            <span className="text-muted fw-bolder d-block mb-1 fs-8">
              Network: {row.network}
            </span>
          </td>
          <td>
            <span
              className={clsx(
                'badge',
                row.status === 'Approved'
                  ? 'badge-light-success'
                  : row.status === 'In Progress'
                  ? 'badge-light-primary'
                  : 'badge-light-warning'
              )}
            >
              {row.status}
            </span>
          </td>
          <td className="text-end">
            <a
              href="#"
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            >
              <i className="fas fa-edit"></i>
            </a>
            <a
              href="#"
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
            >
              <i className="fas fa-trash"></i>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default WithdrawsListItem;
