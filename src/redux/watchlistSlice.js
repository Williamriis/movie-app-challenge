import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from '../utils';
import config from '../config';


const initialState = {
    filmList: []
};

const watchlistSlice = createSlice({
    name: "watchlistSlice",
    initialState: getInitialState(initialState, config.WATCHLIST_KEY),
    reducers: {
        addFilm: (state, action) => {
            state.filmList.push(action.payload.filmId)
        },
        removeFilm: (state, action) => {
            state.filmList = state.filmList.filter(filmId => filmId !== action.payload.filmId)
        }
    }
});

export const { addFilm, removeFilm } = watchlistSlice.actions

export default watchlistSlice.reducer