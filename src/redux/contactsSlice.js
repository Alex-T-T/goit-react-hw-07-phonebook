import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://635d1e0fcb6cf98e56ad41b8.mockapi.io/api/v1/' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => "contacts",
            providesTags: ["Contacts"]
        }),
    
        addContact: builder.mutation({
            query: (values) => ({
                url: "contacts",
                method: "POST",
                body: values,
            }),
            invalidatesTags: ["Contacts"]
        }),

        removeContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Contacts"]
        })
    }),
})

export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi
