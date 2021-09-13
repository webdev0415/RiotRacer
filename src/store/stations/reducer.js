import { createReducer } from "@reduxjs/toolkit"
import * as types from "./types"

const initialState = {
  loading: true,
  error: undefined,
  stations: [],
}

const requestSent = (state) => {
  state.loading = true
}

const requestSuccess = (state, action) => {
  state.loading = false
  state.error = null
  state.stations = action.payload
}

const requestFailed = (state, action) => {
  state.loading = false
  state.error = action.payload
}

const stationsReducer = createReducer(initialState, {
  [types.GET_STATIONS_REQ]: requestSent,
  [types.GET_STATIONS_SUCC]: requestSuccess,
  [types.GET_STATIONS_FAIL]: requestFailed,
})

export default stationsReducer
