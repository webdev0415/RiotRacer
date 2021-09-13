import { createReducer } from "@reduxjs/toolkit"

import {
  GET_ALL_CARS_REQ,
  GET_ALL_CARS_SUCC,
  GET_ALL_CARS_FAIL,
  GET_SELECTED_CAR_REQ,
  GET_SELECTED_CAR_SUCC,
  GET_SELECTED_CAR_FAIL,
  SET_SELECTED_CAR_REQ,
} from "./types"

const initialState = {
  cars: [],
  loading: true,
  selectedCar: null,
  internalLoad: false,
}

const carsReducer = createReducer(initialState, {
  [GET_ALL_CARS_REQ]: (state) => {
    state.loading = true
  },
  [GET_ALL_CARS_SUCC]: (state, action) => {
    state.loading = false
    state.error = null
    state.cars = action.payload
  },
  [GET_ALL_CARS_FAIL]: (state, action) => {
    state.loading = false
    state.cars = []
    state.error = action.payload
  },
  [GET_SELECTED_CAR_REQ]: (state) => {
    state.loading = true
  },
  [GET_SELECTED_CAR_SUCC]: (state, action) => {
    state.loading = false
    state.selectedCar = action.payload
    state.error = null
  },
  [GET_SELECTED_CAR_FAIL]: (state, action) => {
    state.loading = false
    state.selectedCar = null
    state.error = action.payload
  },
  [SET_SELECTED_CAR_REQ]: (state) => {
    state.loading = true
  },
})

export default carsReducer
