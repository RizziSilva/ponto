import React from 'react'
import { Outlet } from 'react-router'
import './style.scss'

export function BaseLayout() {
  return (
    <div id="base-layout">
      <Outlet />
    </div>
  )
}
