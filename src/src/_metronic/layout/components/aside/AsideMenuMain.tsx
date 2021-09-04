/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useIntl } from 'react-intl';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

export function AsideMenuMain() {
  const intl = useIntl();

  return (
    <>
      <AsideMenuItem
        to="/dashboard"
        icon="/media/icons/duotune/art/art002.svg"
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon="bi-app-indicator"
      />
      <AsideMenuItem
        to="/users"
        icon="/media/icons/duotune/art/art002.svg"
        title="Users"
        fontIcon="bi-app-indicator"
      />

      <AsideMenuItemWithSub
        icon="/media/icons/duotune/art/art002.svg"
        title="Withdras"
        to=""
      >
        <AsideMenuItem
          to="/withdraws/crypto"
          icon="/media/icons/duotune/art/art002.svg"
          title="Crypto withdraws"
        />
        <AsideMenuItem
          to="/withdraws/rial"
          icon="/media/icons/duotune/art/art002.svg"
          title="Rial withdraws"
        />
      </AsideMenuItemWithSub>
    </>
  );
}
