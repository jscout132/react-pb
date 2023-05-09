// store is like a mini temp in-the-middle database
// state lives in the browser

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/RootSlice';

export const store = configureStore({
    reducer,
    devTools: true,
})