import { queryStatus } from "../../../utils/query-status";
import { getProductsList } from "../../../api/products-api";
import { createSlice } from "@reduxjs/toolkit";

/**
 * Duck namespace
 */
export const namespace = 'products'

/**
 * Initial reducer state
 */
const initialState = {
  status: queryStatus.initial,
  data: [],
  error: null,
}

export const {
  actions: {
    loadStart,
    loadEnd
  },
  reducer
} = createSlice({
  name: namespace,
  initialState,
  reducers: {
    loadStart(state, action) {
      state.status = queryStatus.loading
    },
    loadEnd(state, action) {
      const {data, error} = action.payload
      state.status = error ? queryStatus.error : queryStatus.success
      state.data = data
      state.error = error
    },
  }
})

export function load() {
  return (dispatch) => {
    dispatch(loadStart())

    return getProductsList().then((data) => {
      dispatch(loadEnd({data}))
    }).catch((e) => {
      dispatch(loadEnd({data: [], error: e.message}))
    })
  }
}

/**
 * Selectors
 */
export function selectAll(rootState) {
  return rootState[namespace]
}

export function selectStatus(rootState) {
  return selectAll(rootState).status
}

export function selectData(rootState) {
  return selectAll(rootState).data
}

export function selectError(rootState) {
  return selectAll(rootState).error
}

