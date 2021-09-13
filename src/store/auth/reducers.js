import { createReducer } from "@reduxjs/toolkit"
import * as types from "./types"

const initState = {
  loading: false,
  error: undefined,
  user: {},
  isLoggedIn: false,
  isMetaMaskLoggedIn: false,
}

const authReducer = createReducer(initState, {
  [types.AUTHENTICATION_SUCC]: (state, action) => {
    let isLoggedIn = false
    if (action.payload.token) {
      localStorage.setItem("RiotRacersToken", action.payload.token)
    }
    if (action.payload.user.email) {
      isLoggedIn = true
    }
    state.loading = false
    state.error = null
    state.isLoggedIn = isLoggedIn
    state.isMetaMaskLoggedIn = true
    state.user = action.payload.user
  },
  [types.AUTHENTICATION_FAIL]: (state, action) => {
    state.loading = false
    state.error = action.payload.error
    state.isLoggedIn = false
    state.isMetaMaskLoggedIn = false
  },
  [types.OPT_SEND_REQ]: (state, action) => {
    if (state.user) {
      state.user.email = action.payload.email
      state.user.publicAddress = action.payload.publicAddress
      state.user.username = action.payload.username
    }
  },
  [types.OTP_SEND_SUCC]: (state, action) => {
    state.error = null
    state.user = { ...state.user, ...action.payload }
  },
  [types.OTP_SEND_FAIL]: (state, action) => {
    state.error = action.payload
  },
  [types.VERIFY_OTP_SUCC]: (state, action) => {
    state.error = null
    state.user = { ...state.user, ...action.payload }
  },
  [types.VERIFY_OTP_FAIL]: (state, action) => {
    state.error = action.payload
  },
  [types.INITIAL_AUTHENTICATE_SUCC]: (state, action) => {
    state.loading = false
    state.error = null
    state.isLoggedIn = true
    state.isMetaMaskLoggedIn = true
    state.user = action.payload
  },
  [types.INITIAL_AUTHENTICATE_FAIL]: (state, action) => {
    state.loading = false
    state.error = action.payload
    state.isLoggedIn = false
    state.isMetaMaskLoggedIn = false
    state.user = {}
  },
  [types.LOGIN_USER_SUCC]: (state, action) => {
    if (action.payload.token) {
      localStorage.setItem("RiotRacersToken", action.payload.token)
    }
    state.loading = false
    state.isLoggedIn = true
    state.isMetaMaskLoggedIn = true
    state.user = action.payload.user
  },
  [types.LOGIN_USER_FAIL]: (state) => {
    state.loading = false
    state.isLoggedIn = false
    state.isMetaMaskLoggedIn = false
  },
  [types.LOGOUT_USER]: (state) => {
    localStorage.removeItem("RiotRacersToken")
    state.loading = false
    state.isLoggedIn = false
    state.isMetaMaskLoggedIn = false
    state.user = {}
  },
})

export default authReducer
