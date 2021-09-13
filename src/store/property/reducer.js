import { createReducer } from "@reduxjs/toolkit"
import {
  GET_GAS_BALANCE_REQ,
  GET_GAS_BALANCE_SUCC,
  GET_GAS_BALANCE_FAIL,
} from "./types"

const initialState = {
  loading: true,
  error: undefined,
  gasBalance: 0,
}

const propertyReducer = createReducer(initialState, {
  [GET_GAS_BALANCE_REQ]: (state) => {
    state.loading = true
  },
  [GET_GAS_BALANCE_SUCC]: (state, action) => {
    state.loading = false
    state.error = null
    state.gasBalance = action.payload
  },
  [GET_GAS_BALANCE_FAIL]: (state, action) => {
    state.loading = false
    state.error = action.payload
  },
})

export default propertyReducer
