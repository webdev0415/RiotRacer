import { createSelector } from "@reduxjs/toolkit"
import { orderBy } from "lodash"

export const stateSelector = (state) => state.activities

export const activitiesSelector = createSelector(stateSelector, (state) => {
  const { entities, loading } = state
  const orderedByDate = orderBy(entities, ["createdAt"], ["desc"])
  return {
    loading,
    activities: orderedByDate,
  }
})
