import React from 'react'
import { Outlet } from 'react-router'
import { Header } from 'app-components'
import style from './style.module.scss'

export function BaseLayout() {
  return (
    <div className={style['container-layout']}>
      <Header />
      <Outlet />
    </div>
  )
}
