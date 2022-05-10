import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./slices/user";
import { RegisterApi } from "../Api/register";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        [RegisterApi.reducerPath]: RegisterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RegisterApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;