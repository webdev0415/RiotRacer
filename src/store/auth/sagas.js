import { put, call, takeLatest, select } from "redux-saga/effects"
import i18n from "i18n"
import notify from "components/commons/notification"
import jwtDecode from "jwt-decode"
import {
  authApi,
  updateUserApi,
  authenticateApi,
  createUserApi,
  checkEmailApi,
  renewTokenApi,
} from "api/users"
import { verifyOtpApi, sendOtpApi } from "api/auth0Request"
import {
  loginSuccAction,
  loginFailAction,
  sendOtpFailAction,
  sendOtpSuccAction,
  initAuthSuccAction,
  initAuthFailAction,
  verifyOtpSuccAction,
  verifyOtpFailAction,
  authenticateFailAction,
  authenticateSuccAction,
  logoutAction,
} from "./actions"
import { openModalAction, closeModalAction } from "../modal/actions"
import {
  LOGIN_USER_REQ,
  OPT_SEND_REQ,
  UPDATE_USER_REQ,
  VERIFY_OTP_REQ,
  AUTHENTICATION_REQ,
  INITIAL_AUTHENTICATE_REQ,
  USER_INACTIVE,
  RENEW_TOKEN_REQ,
} from "./types"
import { isEmpty } from "lodash"
/** ============================================================== */

function* loginUserSaga({
  payload: { publicAddress, username, email, history },
}) {
  try {
    const result = yield call(createUserApi, { publicAddress, username, email })
    yield put(loginSuccAction(result.data))
    if (history && history.push) {
      yield call(history.push, "/dashboard/overview")
    }
  } catch (err) {
    yield put(loginFailAction(err.message))
  }
}

function* authSaga({ payload: { publicAddress, signature, email, history } }) {
  try {
    const result = yield call(authApi, publicAddress, signature, email)
    yield put(authenticateSuccAction(result.data))
    if (history && history.push) {
      if (!isEmpty(result.data?.user)) {
        yield put(closeModalAction())
        yield call(history.push, "/dashboard/overview")
      }
    }
  } catch (err) {
    if (err.response) {
      notify({ title: err.response.message })
    }
    yield put(authenticateFailAction(err.message))
  }
}

function* sendOtpSaga({
  payload: { email, publicAddress, onSuccess, onError },
}) {
  try {
    const usersRes = yield call(checkEmailApi, email)
    if (!usersRes.data.isEmailValid) {
      const errMsg = publicAddress
        ? i18n.t("addressNotAssociated")
        : i18n.t("emailExit")
      yield call(onError, errMsg)
      if (publicAddress) {
        yield put(sendOtpFailAction(errMsg))
      }
      return
    }

    const result = yield call(sendOtpApi, email)
    yield put(sendOtpSuccAction(result.data))
    yield call(onSuccess)
  } catch (err) {
    yield call(onError, i18n.t("emailExit"))
    yield put(sendOtpFailAction(err.message))
  }
}

function* verifyOtpSaga({ payload: { otp, email, onSuccess, onError } }) {
  try {
    const result = yield call(verifyOtpApi, otp, email)
    yield put(verifyOtpSuccAction(result.data))
    yield call(onSuccess)
  } catch (err) {
    yield call(onError)
    yield put(verifyOtpFailAction(err.message))
  }
}

function* initAuthSaga({ payload: { history } }) {
  try {
    const token = localStorage.getItem("RiotRacersToken")
    if (token) {
      const { exp } = jwtDecode(token)
      if (!(Date.now() >= exp * 1000)) {
        const result = yield call(authenticateApi)
        yield put(initAuthSuccAction(result.data.user))
        if (history && history?.push) {
          if (history?.location?.pathname === "/") {
            yield call(history.push, "/dashboard/overview")
          }
        }
      } else {
        yield put(logoutAction())
      }
    }
  } catch (err) {
    yield put(initAuthFailAction(err.message))
  }
}

function* updateUserSaga({ payload }) {
  try {
    const cUser = yield select((state) => state.auth.user)
    const { data } = yield call(updateUserApi, payload, cUser.id)
    notify({ type: "success", title: i18n.t("updateSucc") })

    yield put(sendOtpSuccAction(data.user))

    if (typeof payload.cb === "function") {
      payload.cb()
    }
  } catch (error) {
    const errMsg = error?.response?.data?.message || i18n.t("apologize")
    notify({ title: errMsg })
  }
}

function* userInactiveSaga() {
  yield put(logoutAction())
  yield put(openModalAction({ type: "authModal", step: 2 }))
}

function* renewTokenSaga() {
  try {
    const { data } = yield call(renewTokenApi)
    localStorage.setItem("RiotRacersToken", data.token)
  } catch (error) {
    yield put(logoutAction())
  }
}

export default [
  takeLatest(AUTHENTICATION_REQ, authSaga),
  takeLatest(OPT_SEND_REQ, sendOtpSaga),
  takeLatest(VERIFY_OTP_REQ, verifyOtpSaga),
  takeLatest(INITIAL_AUTHENTICATE_REQ, initAuthSaga),
  takeLatest(LOGIN_USER_REQ, loginUserSaga),
  takeLatest(UPDATE_USER_REQ, updateUserSaga),
  takeLatest(USER_INACTIVE, userInactiveSaga),
  takeLatest(RENEW_TOKEN_REQ, renewTokenSaga),
]
