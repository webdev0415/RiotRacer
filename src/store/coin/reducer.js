import { createReducer } from "@reduxjs/toolkit"
import { GET_BALANCE_REQ, GET_BALANCE_SUCC, GET_BALANCE_FAIL } from "./types"

const initialState = {
  loading: true,
  error: undefined,
  balances: {},
}

const coinReducer = createReducer(initialState, {
  [GET_BALANCE_REQ]: (state) => {
    state.loading = true
    state.balances = {}
  },
  [GET_BALANCE_SUCC]: (state, action) => {
    state.error = undefined
    state.balances = action.payload || {}
    state.loading = false
  },
  [GET_BALANCE_FAIL]: (state, action) => {
    state.balances = {}
    state.loading = false
    state.error = action.payload
  },
})

export default coinReducer
