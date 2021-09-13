import { createReducer } from "@reduxjs/toolkit"
import {
  GET_GARGAGE_REQ,
  GET_GARGAGE_SUCC,
  GET_GARGAGE_FAIL,
  GET_GARGAGES_REQ,
  GET_GARGAGES_SUCC,
  GET_GARGAGES_FAIL,
} from "./types"

const initialState = {
  loading: true,
  error: undefined,
  gargages: [],
  property: {},
  currentCar: null,
}

const gargageReducer = createReducer(initialState, {
  [GET_GARGAGE_REQ]: (state) => {
    state.loading = true
    state.currentCar = null
  },
  [GET_GARGAGE_SUCC]: (state, action) => {
    state.loading = false
    state.error = null
    state.currentCar = action.payload
  },
  [GET_GARGAGE_FAIL]: (state, action) => {
    state.loading = false
    state.currentCar = null
    state.error = action.payload
  },
  [GET_GARGAGES_REQ]: (state) => {
    state.loading = true
    state.error = null
    state.gargages = []
  },
  [GET_GARGAGES_SUCC]: (state, action) => {
    state.loading = false
    state.error = null
    state.gargages = action.payload
  },
  [GET_GARGAGES_FAIL]: (state, action) => {
    state.loading = false
    state.error = action.payload
  },
})

export default gargageReducer
