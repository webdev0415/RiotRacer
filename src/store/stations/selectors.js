import { createSelector } from "@reduxjs/toolkit"

export const stateSelector = (state) => state.stations

export const getStationsSelector = createSelector(stateSelector, (state) => ({
  stations: state.stations,
  loading: state.loading,
}))

export const countOfStationSelector = createSelector(
  getStationsSelector,
  (state) => state?.stations?.length || 0
)
