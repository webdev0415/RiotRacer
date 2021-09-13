import { createReducer } from "@reduxjs/toolkit"
import {
  GET_ACTIVITIES_REQ,
  GET_ACTIVITIES_SUCC,
  GET_ACTIVITIES_FAIL,
} from "./types"

const initialState = {
  loading: true,
  error: undefined,
  entities: [],
}

const activitiesReducer = createReducer(initialState, {
  [GET_ACTIVITIES_REQ]: (state) => {
    state.loading = true
    state.entities = []
  },
  [GET_ACTIVITIES_SUCC]: (state, action) => {
    state.error = null
    state.loading = false
    state.entities = action.payload
  },
  [GET_ACTIVITIES_FAIL]: (state, action) => {
    state.loading = false
    state.error = action.payload
  },
})

export default activitiesReducer
