import { createAction } from "@reduxjs/toolkit"
import * as types from "./types"

export const getStationsReqAction = createAction(types.GET_STATIONS_REQ)
export const getStationsSuccAction = createAction(types.GET_STATIONS_SUCC)
export const getStationsFailAction = createAction(types.GET_STATIONS_FAIL)

export const getStationsByEthReqAction = createAction(
  types.GET_STATIONS_ETH_REQ
)
