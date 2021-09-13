import request from "./request"

export const getCarsApi = () =>
  request({
    path: `cars/all`,
    opts: {
      method: "GET",
    },
  })

export const getSelectedCarApi = (userId) =>
  request({
    path: `cars/u/${userId}`,
    opts: {
      method: "GET",
    },
  })

export const getGargageApi = (carId) =>
  request({
    path: `cars/c/${carId}`,
    opts: {
      method: "GET",
    },
  })

export const getGargagesApi = () =>
  request({
    path: `cars/u/`,
    opts: {
      method: "GET",
    },
  })

export const updateCarNameApi = async (carId, carName) =>
  request({
    path: `cars/c/${carId}`,
    opts: {
      method: "PUT",
      data: {
        id: carId,
        name: carName,
      },
    },
  })

export const checkCarNameApi = async (carName) =>
  request({
    path: `cars/checkname/${carName}`,
    opts: {
      method: "GET",
    },
  })
