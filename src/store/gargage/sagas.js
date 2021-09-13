import { put, call, takeLatest } from "redux-saga/effects"
import { getGargageApi, getGargagesApi } from "api/cars"
import notify from "components/commons/notification"
import { GET_GARGAGE_REQ, GET_GARGAGES_REQ } from "./types"
import {
  getGargageSuccAction,
  getGargageFailAction,
  getGargagesSuccAction,
  getGargagesFailAction,
} from "./actions"

function* getGargageSaga({ payload: carId }) {
  try {
    const result = yield call(getGargageApi, carId)
    yield put(getGargageSuccAction(result.data))
  } catch (err) {
    if (err.response) {
      notify({ title: err.response?.message })
    }
    yield put(getGargageFailAction(err))
  }
}

function* getGargagesSaga({ payload: userId }) {
  try {
    const result = yield call(getGargagesApi, userId)
    yield put(getGargagesSuccAction(result.data))
  } catch (err) {
    if (err.response) {
      notify({ title: err?.response?.message })
    }
    yield put(getGargagesFailAction(err))
  }
}

export default [
  takeLatest(GET_GARGAGE_REQ, getGargageSaga),
  takeLatest(GET_GARGAGES_REQ, getGargagesSaga),
]
