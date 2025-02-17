import React from 'react'
import { BrowserRouter } from 'react-router'
import { ApplicationRoutes } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  )
}
