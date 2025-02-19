import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from 'app-pages'
import { ROUTES } from 'app-constants'
import { BaseLayout } from '../layouts'

export function ApplicationRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path={ROUTES.HOME.path} element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
