import React, { useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import { useDispatch } from "react-redux"

import DashboardLayout from "layout/DashboardLayout"
import OverView from "components/Dashboard/OverView"
import Account from "components/Dashboard/Account"
import Activities from "components/Dashboard/Activities"
import ClaimTokens from "components/Dashboard/ClaimTokens"
import Withdrawal from "components/Dashboard/Withdrawal"
import MyGarage from "components/Dashboard/MyGarage"
import AccountSetting from "components/Dashboard/Settings"
import Assets from "components/Dashboard/Assets"

import { getGargagesReqAction } from "store/gargage/actions"
import { getSelectedCarReqAction } from "store/cars/actions"

function Dashboard(props) {
  const dispatch = useDispatch()
  const { path, user } = props

  useEffect(() => {
    dispatch(getGargagesReqAction(user.id))
    dispatch(getSelectedCarReqAction(user.id))
  }, [])

  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${path}/overview`} exact component={OverView} />
        <Route path={`${path}/wallet`} exact component={Account} />
        <Route path={`${path}/garage`} exact component={MyGarage} />
        <Route path={`${path}/activity`} exact component={Activities} />
        <Route path={`${path}/claim-tokens`} exact component={ClaimTokens} />
        <Route path={`${path}/withdrawal`} exact component={Withdrawal} />
        <Route path={`${path}/setting`} exact component={AccountSetting} />
        <Route path={`${path}/assets`} exact component={Assets} />
      </Switch>
    </DashboardLayout>
  )
}

export default Dashboard
