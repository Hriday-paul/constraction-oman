import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const Api = createApi({
    reducerPath: 'api',
    tagTypes: ['chairman', 'managingDirector', 'projectManager', 'peoples', 'clients', 'sectors', 'projects', 'contact', 'message'],
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
            query: ({ id }) => ({
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
        allClients: builder.query({
            query: () => `/clients`,
            providesTags: ['clients']
        }),
        addNewClient: builder.mutation({
            query: (data) => ({
                url: `/clients`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['clients']
        }),
        updateClient: builder.mutation({
            query: (data) => ({
                url: `/clients`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['clients']
        }),
        deleteClient: builder.mutation({
            query: ({ id }) => ({
                url: `/clients?id=${id}`,
                method: 'DELETE',
                body: {}
            }),
            invalidatesTags: ['clients']
        }),
        allSectors: builder.query({
            query: () => `/sectors`,
            providesTags: ['sectors']
        }),
        addSector: builder.mutation({
            query: (data) => ({
                url: `/sectors`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['sectors']
        }),
        editSector: builder.mutation({
            query: (data) => ({
                url: `/sectors`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['sectors']
        }),
        deleteSector: builder.mutation({
            query: ({ id }) => ({
                url: `/sectors?id=${id}`,
                method: 'DELETE',
                body: {}
            }),
            invalidatesTags: ['sectors']
        }),
        fileUpload: builder.mutation({
            query: (data) => ({
                url: `/upload`,
                method: 'POST',
                body: data
            })
        }),
        uploadedFiles: builder.query({
            query: ({limit}) => `/upload?limit=${limit}`,
        }),
        addProject: builder.mutation({
            query: (data) => ({
                url: `/projects`,
                method: 'POST',
                body: data
            }),
        }),
        allProjects: builder.query({
            query: () => `/projects`,
            providesTags: ['projects']
        }),
        editProject: builder.mutation({
            query: (data) => ({
                url: `/projects/${data?.id}`,
                method: 'PUT',
                body: data?.formData
            }),
            invalidatesTags: ['projects']
        }),
        deleteProject: builder.mutation({
            query: (data) => ({
                url: `/projects/${data?.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['projects']
        }),
        contact: builder.query({
            query: () => `/contact`,
            providesTags: ['contact']
        }),
        updateContact: builder.mutation({
            query: (data) => ({
                url: `/contact`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['contact']
        }),
        postMessage: builder.mutation({
            query: (data) => ({
                url: `/message`,
                method: 'POST',
                body: data
            }),
        }),
        messages: builder.query({
            query: () => `/message`,
            providesTags: ['message']
        }),
        singleMessage: builder.query({
            query: ({ id }) => `/message/${id}`,
        }),
        sendReplyMessage: builder.mutation({
            query: (data) => ({
                url: `/message/${data?.id}`,
                method: 'POST',
                body: data
            }),
        }),
        updateNewMessage: builder.mutation({
            query: (id) => ({
                url: `/message/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['message']
        }),
    })
});

export const { useLoginAdminMutation, useChairmenInfoQuery, useUpdateChairmanMutation, useManagingDirectorInfoQuery, useUpdateManagingDirectorMutation, useAddProjectManagerMutation, usePeoplesQuery, useUpdateProjectManagerMutation, useDeleteProjectManagerMutation, useAddNewClientMutation, useAllClientsQuery, useUpdateClientMutation, useDeleteClientMutation, useAddSectorMutation, useAllSectorsQuery, useEditSectorMutation, useDeleteSectorMutation, useFileUploadMutation, useUploadedFilesQuery, useAddProjectMutation, useAllProjectsQuery, useEditProjectMutation, useDeleteProjectMutation, useContactQuery, useUpdateContactMutation, usePostMessageMutation, useMessagesQuery, useSingleMessageQuery, useSendReplyMessageMutation, useUpdateNewMessageMutation } = Api;

export const { useGetPokemonByNameQuery } = Api;