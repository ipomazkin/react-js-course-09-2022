import { queryStatus } from "../../../utils/query-status";
import { getProductsList } from "../../../api/products-api";

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

/**
 * Actions' types
 */
const LOAD_START = `${namespace}/LOAD_START`
const LOAD_END = `${namespace}/LOAD_END`

/**
 * Actions' creators
 */
export function loadStart() {
  return {
    type: LOAD_START,
  }
}

export function loadEnd(data = [], error = null) {
  return {
    type: LOAD_END,
    payload: {
      data,
      error
    }
  }
}

export function load() {
  return (dispatch) => {
    dispatch(loadStart())

    return getProductsList().then((data) => {
      dispatch(loadEnd(data))
    }).catch((e) => {
      dispatch(loadEnd([], e.message))
    })
  }
}

/**
 * Duck reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_START: {
      return {
        ...state,
        status: queryStatus.loading
      }
    }

    case LOAD_END: {
      return {
        ...state,
        status: action.payload.error === null ? queryStatus.success : queryStatus.error,
        data: action.payload.data,
        error: action.payload.error
      }
    }

    default: {
      return state
    }
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

