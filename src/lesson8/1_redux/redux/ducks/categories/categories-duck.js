/**
 * Duck namespace
 */
export const namespace = 'categories'

/**
 * Initial reducer state
 */
const initialState = {
  selected: []
}

/**
 * Actions' types
 */
const ADD_CATEGORY = `${namespace}/ADD_CATEGORY`
const REMOVE_CATEGORY = `${namespace}/REMOVE_CATEGORY`

/**
 * Actions' creators
 */
export function addCategory(categoryId) {
  return {
    type: ADD_CATEGORY,
    payload: {
      categoryId
    }
  }
}

export function removeCategory(categoryId) {
  return {
    type: REMOVE_CATEGORY,
    payload: {
      categoryId
    }
  }
}

/**
 * Duck reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY: {
      return {
        ...state,
        selected: [...state.selected, action.payload.categoryId]
          .filter((id, index, array) => array.indexOf(id) === index)
      }
    }

    case REMOVE_CATEGORY: {
      return {
        ...state,
        selected: state.selected.filter((id) => id !== action.payload.categoryId)
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

export function selectSelectedCategories(rootState) {
  return selectAll(rootState).selected
}

export function selectIsCategorySelected(rootState, categoryId) {
  const selectedCategories = selectSelectedCategories(rootState)
  return selectedCategories.includes(categoryId)
}
