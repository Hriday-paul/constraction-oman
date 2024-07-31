import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const Api = createApi({
    reducerPath: 'api',
    tagTypes: ['chairman', 'managingDirector', 'projectManager', 'peoples'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
    endpoints: (builder) => ({

        loginAdmin: builder.mutation({
            query: ({ user_name, password }) => ({
                url: `/admin/login`,
                method: 'POST',
                body: { user_name, password }
            }),
            // invalidatesTags: ['tests']
        }),
        updateChairman: builder.mutation({
            query: (data) => ({
                url: `/chairman`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['chairman', 'peoples']
        }),

        chairmenInfo: builder.query({
            query: () => `/chairman`,
            providesTags: ['chairman']
        }),
        managingDirectorInfo: builder.query({
            query: () => `/managing_director`,
            providesTags: ['managingDirector']
        }),
        updateManagingDirector: builder.mutation({
            query: (data) => ({
                url: `/managing_director`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['managingDirector', 'peoples']
        }),
        peoples: builder.query({
            query: () => `/peoples`,
            providesTags: ['peoples']
        }),
        updateProjectManager: builder.mutation({
            query: (data) => ({
                url: `/peoples`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['projectManager', 'peoples']
        }),
        deleteProjectManager: builder.mutation({
            query: ({id}) => ({
                url: `/peoples?id=${id}`,
                method: 'DELETE',
                body: {}
            }),
            invalidatesTags: ['projectManager', 'peoples']
        }),
        addProjectManager: builder.mutation({
            query: (data) => ({
                url: `/peoples`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['projectManager', 'peoples']
        }),
    })
});

export const { useLoginAdminMutation, useChairmenInfoQuery, useUpdateChairmanMutation, useManagingDirectorInfoQuery, useUpdateManagingDirectorMutation, useAddProjectManagerMutation, usePeoplesQuery, useUpdateProjectManagerMutation, useDeleteProjectManagerMutation } = Api;

export const { useGetPokemonByNameQuery } = Api;