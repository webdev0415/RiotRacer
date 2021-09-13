import { createAction } from "@reduxjs/toolkit"
import { GET_BALANCE_REQ, GET_BALANCE_SUCC, GET_BALANCE_FAIL } from "./types"

export const getBalanceReqAction = createAction(GET_BALANCE_REQ)
export const getBalanceSuccAction = createAction(GET_BALANCE_SUCC)
export const getBalanceFailAction = createAction(GET_BALANCE_FAIL)
