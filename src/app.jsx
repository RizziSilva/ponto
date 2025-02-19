import React from 'react'
import { BrowserRouter } from 'react-router'
import { ApplicationRoutes } from './routes'
import 'app-styles/global.scss'

export function App() {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  )
}
