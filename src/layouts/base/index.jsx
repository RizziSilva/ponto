import React from 'react'
import { Outlet } from 'react-router'
import style from './style.module.scss'

export function BaseLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
