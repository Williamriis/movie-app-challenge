import { configureStore } from '@reduxjs/toolkit'

import filmSearchSlice from './filmSearchSlice'
import watchlistSlice from './watchlistSlice'

export const store = configureStore({
    reducer: {
        filmSearchSlice: filmSearchSlice,
        watchlistSlice: watchlistSlice
    },
})