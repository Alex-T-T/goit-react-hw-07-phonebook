import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactsApi } from "./contactsSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
    reducer: { 
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware),
})

// setupListeners(store.dispatch)
