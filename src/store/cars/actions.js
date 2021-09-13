import { createAction } from "@reduxjs/toolkit"
import {
  GET_ALL_CARS_REQ,
  GET_ALL_CARS_SUCC,
  GET_ALL_CARS_FAIL,
  GET_SELECTED_CAR_REQ,
  GET_SELECTED_CAR_SUCC,
  GET_SELECTED_CAR_FAIL,
  SET_SELECTED_CAR_REQ,
} from "./types"

export const getCarsReqAction = createAction(GET_ALL_CARS_REQ)
export const getCarsSuccAction = createAction(GET_ALL_CARS_SUCC)
export const getCarsFailAction = createAction(GET_ALL_CARS_FAIL)

export const getSelectedCarReqAction = createAction(GET_SELECTED_CAR_REQ)
export const getSelectedCarSuccAction = createAction(GET_SELECTED_CAR_SUCC)
export const getSelectedCarFailAction = createAction(GET_SELECTED_CAR_FAIL)

export const setSelectedCarReqAction = createAction(SET_SELECTED_CAR_REQ)
