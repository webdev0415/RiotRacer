import { createSelector } from "@reduxjs/toolkit"

export const stateSelector = (state) => state.cars

export const getCarSelector = createSelector(stateSelector, (state) => ({
  loading: state.loading,
  selectedCar: state.selectedCar,
}))
