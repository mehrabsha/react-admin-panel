import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'

export function MenuInner() {
  return (
    <>
      <MenuItem title="Dashboard" to='/dashboard' />
      <MenuItem title='Users' to='/users' />
    </>
  )
}
