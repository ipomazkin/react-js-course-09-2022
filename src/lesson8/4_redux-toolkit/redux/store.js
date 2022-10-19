import { configureStore } from '@reduxjs/toolkit'
import * as productsDuck from './ducks/products'
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    [productsDuck.namespace]: productsDuck.reducer,
  },
  middleware: [thunk]
})