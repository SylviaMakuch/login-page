import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }   // reducer              
    }
});