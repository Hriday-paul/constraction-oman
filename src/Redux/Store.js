import { configureStore } from '@reduxjs/toolkit'
import { Api } from './Api/Api'

export const Store = () => {
    return configureStore({
        reducer: {
            [Api.reducerPath]: Api.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(Api.middleware),
        // devTools: process.env.NODE_ENV === 'dev', // hide redux dev tool in production server
    })
}