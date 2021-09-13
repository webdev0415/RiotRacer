import React, { Suspense, useEffect } from "react"
import { Switch, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { initAuthReqAction } from "store/auth/actions"
import { authStateSelector } from "store/auth/selectors"

import RouteWrapper from "components/RouteWrapper"
import ErrorBoundary from "components/ErrorBoundary"
import Loading from "components/commons/Loading"

import appRoutes from "routes"

import useIdleMonitor from "./hooks/useIdleMonitor"

function App() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { isLoggedIn, user, loading } = useSelector(authStateSelector)

  useIdleMonitor({
    delay: 1000, // timer delay in millisecond
    timeout: 60 * 120, // 2hrs in second
  })

  useEffect(() => {
    dispatch(initAuthReqAction({ history }))
  }, [])

  const SwitchRoutes = (
    <Suspense fallback={<Loading />}>
      <Switch>
        {appRoutes.map((route) => (
          <RouteWrapper
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
            isPrivate={route.isPrivate}
            loading={loading}
            isLoggedIn={isLoggedIn}
            user={user}
          />
        ))}
      </Switch>
    </Suspense>
  )
  return <ErrorBoundary>{SwitchRoutes}</ErrorBoundary>
}

export default App
