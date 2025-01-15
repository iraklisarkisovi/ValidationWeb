import { configureStore } from "@reduxjs/toolkit";
import { MainRed } from "./ReduxMainSlice";


export const store = configureStore({
    reducer: {
        mainSore: MainRed
    }
})

export type RootState = ReturnType<typeof store.getState>;