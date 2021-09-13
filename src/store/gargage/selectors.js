import { createSelector } from "@reduxjs/toolkit"

export const stateSelector = (state) => state.gargage

export const currentCarSelector = createSelector(stateSelector, (state) => ({
  currentCar: state.currentCar,
  loading: state.loading,
}))

export const gargagesSelector = createSelector(
  stateSelector,
  (state) => state.gargages
)

export const gargageLoadingSelector = createSelector(
  stateSelector,
  (state) => ({ loading: state.loading, internalLoad: state.internalLoad })
)
