import { createAction } from "@reduxjs/toolkit"
import {
  GET_GAS_BALANCE_REQ,
  GET_GAS_BALANCE_SUCC,
  GET_GAS_BALANCE_FAIL,
} from "./types"

export const getGasBalanceReqAction = createAction(GET_GAS_BALANCE_REQ)
export const getGasBalanceSuccAction = createAction(GET_GAS_BALANCE_SUCC)
export const getGasBalanceFailAction = createAction(GET_GAS_BALANCE_FAIL)
