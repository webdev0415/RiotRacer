import { createAction } from "@reduxjs/toolkit"
import * as types from "./types"

export const authenticateReqAction = createAction(types.AUTHENTICATION_REQ)
export const authenticateSuccAction = createAction(types.AUTHENTICATION_SUCC)
export const authenticateFailAction = createAction(types.AUTHENTICATION_FAIL)

export const sendOtpReqAction = createAction(types.OPT_SEND_REQ)
export const sendOtpSuccAction = createAction(types.OTP_SEND_SUCC)
export const sendOtpFailAction = createAction(types.OTP_SEND_FAIL)

export const verifyOtpReqAction = createAction(types.VERIFY_OTP_REQ)
export const verifyOtpSuccAction = createAction(types.VERIFY_OTP_SUCC)
export const verifyOtpFailAction = createAction(types.VERIFY_OTP_FAIL)

export const initAuthReqAction = createAction(types.INITIAL_AUTHENTICATE_REQ)
export const initAuthSuccAction = createAction(types.INITIAL_AUTHENTICATE_SUCC)
export const initAuthFailAction = createAction(types.INITIAL_AUTHENTICATE_FAIL)

export const loginReqAction = createAction(types.LOGIN_USER_REQ)
export const loginSuccAction = createAction(types.LOGIN_USER_SUCC)
export const loginFailAction = createAction(types.LOGIN_USER_FAIL)

export const updateUserAction = createAction(types.UPDATE_USER_REQ)

export const logoutAction = createAction(types.LOGOUT_USER)

export const userInactiveAction = createAction(types.USER_INACTIVE)

export const renewTokenAction = createAction(types.RENEW_TOKEN_REQ)
