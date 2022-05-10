import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/user";
import { RegisterApi } from "../Api/api";

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        [RegisterApi.reducerPath]: RegisterApi.reducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;