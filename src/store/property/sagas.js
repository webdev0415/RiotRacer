import { put, call, takeLatest } from "redux-saga/effects"
import notify from "components/commons/notification"
import { getGasBalanceApi } from "api/users"
import { GET_GAS_BALANCE_REQ } from "./types"
import { getGasBalanceSuccAction, getGasBalanceFailAction } from "./actions"

function* getGasBalanceSaga({ payload: userId }) {
  try {
    const result = yield call(getGasBalanceApi, userId)
    yield put(getGasBalanceSuccAction(result.data?.gasBalance))
  } catch (error) {
    if (error.response) {
      notify({ title: error?.response?.message })
    }
    yield put(getGasBalanceFailAction(error))
  }
}

export default [takeLatest(GET_GAS_BALANCE_REQ, getGasBalanceSaga)]
