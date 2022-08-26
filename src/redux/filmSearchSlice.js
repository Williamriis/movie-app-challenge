import { createSlice } from "@reduxjs/toolkit";
import queryString from 'query-string';

import config from '../config';


const initialState = {
    filmList: [],
    filmId: '',
    filmDetail: false,
    totalResults: 0
};

const filmSearchSlice = createSlice({
    name: "filmSearchSlice",
    initialState: initialState,
    reducers: {

        updateFilmList: (state, action) => {
            const { filmList } = action.payload;
            state.filmList = filmList
        },
        setFilmId: (state, action) => {
            const { filmId } = action.payload
            state.filmId = filmId
        },
        setTotalResults: (state, action) => {
            const { totalResults } = action.payload
            state.totalResults = totalResults
        },
        setFilmDetail: (state, action) => {
            const { filmDetail } = action.payload
            state.filmDetail = filmDetail
        }
    }
});

export const getFilmList = ({ filters }) => {
    return (dispatch) => {
        const queryObject = {
            s: filters.searchTerm,
            y: filters.yearRange,
            type: filters.mediaType
        }
        const url = `${config.BASE_API}&${queryString.stringify(queryObject, { skipEmptyString: true })}`

        fetch(url).then(response => {
            if (!response.ok) {
                console.log('failed')
            }
            return response.json()
        }).then(data => {
            if (data.Response === 'True') {
                dispatch(updateFilmList({ filmList: data.Search }))
                dispatch(setTotalResults({ totalResults: data.totalResults }))
            } else {
                dispatch(updateFilmList({ filmList: [] }))
                dispatch(setTotalResults({ totalResults: 0 }))
            }

        }).catch(error => console.log(error))

    }
}

export const getFilmDetails = ({ filmId }) => {
    return (dispatch) => {
        const url = `${config.BASE_API}&i=${filmId}`

        fetch(url).then(response => {
            if (!response.ok) {
                console.log('failed')
            }
            return response.json()
        }).then(data => {
            if (data.Response === 'True') {
                dispatch(setFilmDetail({ filmDetail: data }))
            } else {
                console.log('Failure')
            }
        }).catch(error => console.log(error))

    }
}



export const { updateFilmList, setFilmId, setTotalResults, setFilmDetail } = filmSearchSlice.actions

export default filmSearchSlice.reducer