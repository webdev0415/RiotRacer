import { createAction } from "@reduxjs/toolkit"
import {
  GET_GARGAGE_REQ,
  GET_GARGAGE_SUCC,
  GET_GARGAGE_FAIL,
  GET_GARGAGES_REQ,
  GET_GARGAGES_SUCC,
  GET_GARGAGES_FAIL,
} from "./types"

export const getGargageReqAction = createAction(GET_GARGAGE_REQ)
export const getGargageSuccAction = createAction(GET_GARGAGE_SUCC)
export const getGargageFailAction = createAction(GET_GARGAGE_FAIL)

export const getGargagesReqAction = createAction(GET_GARGAGES_REQ)
export const getGargagesSuccAction = createAction(GET_GARGAGES_SUCC)
export const getGargagesFailAction = createAction(GET_GARGAGES_FAIL)
