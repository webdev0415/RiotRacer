import React from "react"
import { Route, Switch } from "react-router-dom"
import DefaultLayout from "layout/DefaultLayout"
import FuelMe from "./FuelMe"
import Mechanic from "./Mechanic"
import Tracks from "./Tracks"
import Billboards from "./Billboards"

import "./style.scss"

function TheWorld(props) {
  const { path } = props
  return (
    <DefaultLayout>
      <Switch>
        <Route path={path} exact component={FuelMe} />
        <Route path={`${path}/mechanic`} exact component={Mechanic} />
        <Route path={`${path}/tracks`} exact component={Tracks} />
        <Route path={`${path}/billboards`} exact component={Billboards} />
      </Switch>
    </DefaultLayout>
  )
}

export default TheWorld
