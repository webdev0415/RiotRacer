import { createSelector } from "@reduxjs/toolkit"

export const stateSelector = (state) => state.coin

export const getBalanceSelector = createSelector(
  stateSelector,
  (state) => state.balances
)
