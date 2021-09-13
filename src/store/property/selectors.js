import { createSelector } from "@reduxjs/toolkit"

export const stateSelector = (state) => state.property

export const getGasBalanceSelector = createSelector(
  stateSelector,
  (state) => state?.gasBalance
)
