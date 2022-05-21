import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export const RegisterApi = createApi({
    reducerPath: 'RegisterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    endpoints: (builder) => ({
        postRegister: builder.mutation<{ message: string }, RegisterRequest>({
            query: ({ name, email, password, confirmPassword, }) => ({
                url: "signup",
                method: "POST",
                body: {
                    name,
                    email,
                    password,
                    confirmPassword,
                }
            })
        })
    })
});

export const { usePostRegisterMutation } = RegisterApi;