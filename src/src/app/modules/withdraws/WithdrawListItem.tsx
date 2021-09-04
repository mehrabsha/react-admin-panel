import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap-v5';

const WithdrawListItem = (props: any) => {
  return (
    <>
      <td>
        <Link
          to={'/withdraws/' + props.item.id}
          className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
        >
          {props.item.id}
        </Link>
      </td>
      <td>
        <Link
          to={'/withdraws/' + props.item.id}
          className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
        >
          {props.item.username}
        </Link>
        <span className="text-muted fw-bold text-muted d-block fs-7">
          {props.item.phone}
        </span>
      </td>
      <td>
        <div className="text-dark fw-bolder d-flex justify-content-between mb-1 fs-7">
          <span>Email:</span>
          {props.item.emialConfirm ? (
            <i className="fas fa-check-square ms-1 text-success me-4"></i>
          ) : (
            <i className="fas fa-window-close ms-1 text-danger me-4"></i>
          )}
        </div>
        <span className="text-dark fw-bolder d-flex justify-content-between mb-1 fs-7">
          <span>Google 2FA:</span>
          {props.item.googleConfirm ? (
            <i className="fas fa-check-square ms-1 text-success me-4"></i>
          ) : (
            <i className="fas fa-window-close ms-1 text-danger me-4"></i>
          )}
        </span>
        <span className="text-dark fw-bolder d-flex justify-content-between mb-1 fs-7">
          <span>Final:</span>
          {props.item.googleConfirm && props.item.emialConfirm ? (
            <i className="fas fa-check-square ms-1 text-success me-4"></i>
          ) : (
            <i className="fas fa-window-close ms-1 text-danger me-4"></i>
          )}
        </span>
      </td>
      <td>
        <span className="text-dark fw-bolder d-block mb-2 fs-7">
          {props.item.jalaliDate}
        </span>
        <span className="text-muted fw-bolder d-block fs-8">
          {props.item.date}
        </span>
      </td>
      <td>
        <span className="text-dark fw-bolder d-block mb-1 fs-7">
          {props.item.amount}
        </span>
        <span className="text-muted fw-bolder d-block mb-1 fs-8">
          Network: {props.item.network}
        </span>
      </td>
      <td>
        <span
          className={clsx(
            'badge',
            props.item.status === 'Approved'
              ? 'badge-light-success'
              : props.item.status === 'In Progress'
              ? 'badge-light-primary'
              : props.item.status === 'Canceled'
              ? 'badge-light-danger'
              : 'badge-light-warning'
          )}
        >
          {props.item.status}
        </span>
      </td>
      <td className="text-end">
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="delete-tooltip">Cancel</Tooltip>}
        >
          <div className="btn btn-icon btn-bg-light btn-color-danger btn-sm me-1">
            <i className="fas fa-trash"></i>
          </div>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="delete-tooltip">Edit</Tooltip>}
        >
          <Link
            to={'/withdraws/' + props.item.id}
            className="btn btn-icon btn-bg-light btn-color-primary btn-sm me-1"
          >
            <i className="fas fa-edit"></i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="delete-tooltip">Complete</Tooltip>}
        >
          <div className="btn btn-icon btn-bg-light btn-color-success btn-sm">
            <i className="fas fa-check"></i>
          </div>
        </OverlayTrigger>
      </td>
    </>
  );
};

export default WithdrawListItem;
