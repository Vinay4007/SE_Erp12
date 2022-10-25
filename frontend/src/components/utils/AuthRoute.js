import React from 'react'
import { Route } from "react-router-dom"
import { withAuthenticationRequired } from "@auth0/auth0-react"
import { LoadingPage } from '../content-components/LoadingPage'

export const AuthRoute = ({ component, ...args }) => (
  <Route
    element={withAuthenticationRequired(component, {
      onRedirecting: () => <LoadingPage />
    })}
    {...args}
  />
);

