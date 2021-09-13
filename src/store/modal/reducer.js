import { createReducer } from "@reduxjs/toolkit"
import { OPEN_MODAL, CLOSE_MODAL } from "./types"

const initialState = {
  isOpen: false,
  type: null,
  step: null,
}

const modalReducer = createReducer(initialState, {
  [OPEN_MODAL]: (state, action) => {
    state.isOpen = true
    state.type = action.payload.type
    state.step = action.payload.step
  },
  [CLOSE_MODAL]: (state) => {
    state.isOpen = false
    state.type = null
    state.step = null
  },
})

export default modalReducer
