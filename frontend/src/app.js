import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from './components/AnimatedRoutes';

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <AnimatedRoutes />
      </BrowserRouter>
    </React.Fragment>
  )
}