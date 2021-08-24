/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
    
    <AsideMenuItem
      to='/dashboard'
      icon='/media/icons/duotune/art/art002.svg'
      title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
      fontIcon='bi-app-indicator'
    />
    <AsideMenuItem
      to='/users'
      icon='/media/icons/duotune/art/art002.svg'
      title="Users"
      fontIcon='bi-app-indicator'
    />
    </>
  )
}
