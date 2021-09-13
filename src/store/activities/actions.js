import { createAction } from "@reduxjs/toolkit"
import {
  GET_ACTIVITIES_REQ,
  GET_ACTIVITIES_SUCC,
  GET_ACTIVITIES_FAIL,
} from "./types"

export const getActivitesReqAction = createAction(GET_ACTIVITIES_REQ)
export const getActivitesSuccAction = createAction(GET_ACTIVITIES_SUCC)
export const getActivitesFailAction = createAction(GET_ACTIVITIES_FAIL)
