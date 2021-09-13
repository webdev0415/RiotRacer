import request from "./request"

export const createUserApi = (data) =>
  request({
    path: "users",
    opts: {
      method: "POST",
      data,
    },
  })

export const authenticateApi = () =>
  request({
    path: "users/authenticate",
    opts: {
      method: "GET",
    },
  })

export const authApi = (publicAddress, signature, email) =>
  request({
    path: "auth",
    opts: {
      method: "POST",
      data: {
        publicAddress,
        signature,
        email,
      },
    },
  })

export const fetchActivitiesApi = () =>
  request({
    path: "users/activities",
    opts: {
      method: "GET",
    },
  })

export const setCarApi = (userId, carId) =>
  request({
    path: `users/select-car`,
    opts: {
      method: "POST",
      data: {
        carId,
        userId,
      },
    },
  })

export const getGasBalanceApi = (userId) =>
  request({
    path: `users/${userId}/gas-balance`,
    opts: {
      method: "GET",
    },
  })

export const checkUsernameApi = (username) =>
  request({
    path: `users/username/${username}`,
    opts: {
      method: "GET",
    },
  })

export const updateUserApi = (payload, userId) =>
  request({
    path: `users/${userId}`,
    opts: {
      method: "PUT",
      data: payload,
    },
  })

export const checkEmailApi = (email, publicAddress) =>
  request({
    path: `users?email=${email}&publicAddress=${publicAddress}`,
    opts: {
      method: "GET",
    },
  })

export const renewTokenApi = () =>
  request({
    path: "users/renew-token",
    opts: {
      method: "GET",
    },
  })
