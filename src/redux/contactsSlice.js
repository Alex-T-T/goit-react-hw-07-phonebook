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










// import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import * as contactActions from './contactActions';

// const contactsSlise = createSlice({
//     name: 'contacts',
//     initialState: {
//         contacts: {
//             items: [],
//             isLoading: false,
//             error: null
//         },
//         filter: '',
//     },
//     reducers: {
//         addContact(state, action) {
//             console.log(state.contacts)
//             state.contacts.items.push({
//                 name: action.payload.name,
//                 number: action.payload.number,
//             })
//         },
//         removeContact(state, action) { 
//             state.contacts = state.contacts.items.filter(contact => contact.id !== action.payload.id)
//         },
        // filterContact(state, action) {
        //     console.log(action)
        //     state.filter = action.payload
        // }
//     }
// })


// const persistConfig = {
//     key: "phonebook",
//     storage,
//     blacklist: "filter",
// }

// export const persistPhonebookReducer = persistReducer(persistConfig, contactsSlise.reducer )


// export const { addContact, removeContact, filterContact } = contactsSlise.actions


