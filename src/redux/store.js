import { configureStore } from '@reduxjs/toolkit'

import filmSearchSlice from './filmSearchSlice'

export const store = configureStore({
    reducer: {
        filmSearchSlice: filmSearchSlice,
    },
})