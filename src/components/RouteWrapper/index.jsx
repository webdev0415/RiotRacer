import React from "react"
import { Route, Redirect } from "react-router-dom"

export default function RouteWrapper({
  component: Component,
  isPrivate,
  loading,
  ...rest
}) {
  if (isPrivate) {
    if (loading && rest.isLoggedIn) {
      return <div /> // TODO: add loading component?
    }
    if (rest.isLoggedIn === true) {
      return <Route render={(props) => <Component {...props} {...rest} />} />
    }
    return <Redirect to="/" />
  }
  return <Route render={(props) => <Component {...props} {...rest} />} />
}
