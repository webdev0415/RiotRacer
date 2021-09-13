import { put, call, takeLatest, select } from "redux-saga/effects"
import notify from "components/commons/notification"
import { getStationsApi, getStationsByEthApi } from "api/stations"
import { getStationsSuccAction, getStationsFailAction } from "./actions"
import { GET_STATIONS_REQ, GET_STATIONS_ETH_REQ } from "./types"
import { getEthSelector } from "../auth/selectors"

function* getStationSaga() {
  try {
    const result = yield call(getStationsApi)
    yield put(getStationsSuccAction(result.data))
  } catch (err) {
    if (err.response) {
      notify({ title: err.response })
    }
    yield put(getStationsFailAction(err))
  }
}

function* getStationByAddressSaga() {
  try {
    const ethAddress = yield select(getEthSelector)
    const result = yield call(getStationsByEthApi, ethAddress)
    yield put(getStationsSuccAction(result.data))
  } catch (err) {
    if (err.response) {
      notify({ title: err.response })
    }
    yield put(getStationsFailAction(err))
  }
}

export default [
  takeLatest(GET_STATIONS_REQ, getStationSaga),
  takeLatest(GET_STATIONS_ETH_REQ, getStationByAddressSaga),
]
