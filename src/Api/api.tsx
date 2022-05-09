import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface RegisterRequest {
    email: string;
    password: string;
    confirmPassword: string;
}


export const signUp = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    endpoints: (builder) => ({
        postRegister: builder.mutation<{ message: string }, RegisterRequest>({
            query: ({ email, password, confirmPassword, }) => ({
                url: "auth/register/",
                method: "POST",
                body: {
                    email,
                    password,
                    confirmPassword,
                }
            })
        })
    })
});