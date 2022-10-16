import { createStore, combineReducers } from 'redux'

const categoriesReducer = (state = {
  selectedCategories: []
}, action) => {

  if (action.type === 'select') {
    const newState = {
      ...state,
      selectedCategories: [...state.selectedCategories, action.payload.id]
    }
    newState.selectedCategories = newState.selectedCategories.filter((item, index, items) => items.indexOf(item) === index)


    return newState
  }

  if (action.type === 'unselect') {
    return {
      ...state,
      selectedCategories: state.selectedCategories.filter((catId) => catId !== action.payload.id)
    }
  }

  return state
}

const counterReducer = () => 1;

const postsReducer = () => ({
  status: 'initial',
  error: null,
  data: []
});

const uiReducer = () => ({
  isMenuOpen: false,
  isHeaderSticky: false
})

const rootReducer = combineReducers({
  categories: categoriesReducer,
  counter: counterReducer,
  posts: postsReducer,
  ui: uiReducer,
})

// function rootReducer(state, action) {
//   return {
//     categories: categoriesReducer(state.categories, action),
//     counter: counterReducer(state.counter, action),
//     posts: postsReducer(state.posts, action),
//     ui: uiReducer(state.ui, action),
//   }
// }


export const store = createStore(rootReducer)