import { createStore, combineReducers, applyMiddleware } from "redux";
import * as categoriesDuck from './ducks/categories'
import { loggerMiddleware } from "./middlewares";

const rootReducer = combineReducers({
  [categoriesDuck.namespace]: categoriesDuck.reducer,
})

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(loggerMiddleware)
)