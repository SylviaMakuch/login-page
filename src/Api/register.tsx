import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface RegisterRequest {
    email: string;
    password: string;
    confirmPassword: string;
}


export const RegisterApi = createApi({
    reducerPath: 'RegisterApi',
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

export const { usePostRegisterMutation } = RegisterApi;