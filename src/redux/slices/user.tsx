import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    email: string;
    password: string;
    confirmPassword: string;
    loggedIn: boolean,
}

const initialState: UserState = {
    email: "",
    password: "",
    confirmPassword: "",
    loggedIn: false,
};

export const userSlice = createSlice({
    name: "user",   // name of the slice
    initialState,
    reducers: {
        login: (state, action : PayloadAction<UserState>) => {
            state.loggedIn = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.confirmPassword = action.payload.confirmPassword;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.email = "";
            state.password = "";
            state.confirmPassword = "";
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
export  const selectUser = (state: any) => state.user; 