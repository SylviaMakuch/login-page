import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const userSlice = createSlice({
    name: "user",   // name of the slice
    initialState: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    } as UserState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        }   as (state: UserState, action: PayloadAction<string>) => void,
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        }   as (state: UserState, action: PayloadAction<string>) => void,
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }   as (state: UserState, action: PayloadAction<string>) => void,
        setConfirmPassword: (state, action: PayloadAction<string>) => {
            state.confirmPassword = action.payload;
        }   as (state: UserState, action: PayloadAction<string>) => void,
    }   
});

export const { setName, setEmail, setPassword, setConfirmPassword } = userSlice.actions;
export default userSlice.reducer;