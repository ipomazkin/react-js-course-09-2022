import { createStore, combineReducers, applyMiddleware } from "redux";
import * as productsDuck from './ducks/products'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  [productsDuck.namespace]: productsDuck.reducer,
})

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk)
)