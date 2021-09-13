import request from "./request"

export const getStationsApi = () =>
  request({
    path: `station/`,
    opts: {
      method: "GET",
    },
  })

export const getStationsByEthApi = (address) =>
  request({
    path: `station/address/${address}`,
    opts: {
      method: "GET",
    },
  })
