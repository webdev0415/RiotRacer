import i18n from "i18n"
import { put, call, takeLatest } from "redux-saga/effects"
import notify from "components/commons/notification"
import * as carsApi from "api/cars"
import { setCarApi } from "api/users"
import {
  getCarsSuccAction,
  getCarsFailAction,
  getSelectedCarSuccAction,
  getSelectedCarFailAction,
} from "./actions"
import {
  GET_ALL_CARS_REQ,
  GET_SELECTED_CAR_REQ,
  SET_SELECTED_CAR_REQ,
} from "./types"

function* getCarsSaga() {
  try {
    const result = yield call(carsApi.getCarsApi)
    yield put(getCarsSuccAction(result.data))
  } catch (err) {
    let msg = i18n.t("apologize")
    if (err.response?.data?.error) {
      msg = err?.response?.data?.error
    }
    notify({ title: msg })
    yield put(getCarsFailAction(err))
  }
}

function* getSelectedCarSaga({ payload: userId }) {
  try {
    const result = yield call(carsApi.getSelectedCarApi, userId)
    yield put(getSelectedCarSuccAction(result.data))
  } catch (err) {
    let msg = i18n.t("apologize")
    if (err.response?.data?.error) {
      msg = err?.response?.data?.error
    }
    notify({ title: msg })
    yield put(getSelectedCarFailAction(err))
  }
}

function* setSelectedCarSaga({ payload: { userId, carId } }) {
  try {
    const result = yield call(setCarApi, userId, carId)
    yield put(getSelectedCarSuccAction(result.data))
  } catch (err) {
    let msg = i18n.t("apologize")
    if (err.response?.data?.error) {
      msg = err?.response?.data?.error
    }
    notify({ title: msg })
    yield put(getSelectedCarFailAction(err))
  }
}

const carsSaga = [
  takeLatest(GET_ALL_CARS_REQ, getCarsSaga),
  takeLatest(GET_SELECTED_CAR_REQ, getSelectedCarSaga),
  takeLatest(SET_SELECTED_CAR_REQ, setSelectedCarSaga),
]

export default carsSaga
