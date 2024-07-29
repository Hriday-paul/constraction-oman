import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
    endpoints: (builder) => ({

        loginAdmin: builder.mutation({
            query: ({ user_name, password}) => ({
                url: `/admin/login`,
                method: 'POST',
                body: { user_name, password }
            }),
            // invalidatesTags: ['tests']
        }),

  })
});

export const {useLoginAdminMutation} = Api;

export const { useGetPokemonByNameQuery } = Api;