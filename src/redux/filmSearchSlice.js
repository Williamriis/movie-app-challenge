import { createSlice } from "@reduxjs/toolkit";
import queryString from 'query-string';
import config from '../config';


const initialState = {
    filmList: [],
    filmId: '',
    filmDetail: false,
    totalResults: 0,
    errorMessage: '',
    listLoading: false,
    detailLoading: false
};

const filmSearchSlice = createSlice({
    name: "filmSearchSlice",
    initialState: initialState,
    reducers: {
        setState: (state, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                state[key] = value
            }
        }
    }
});

export const getFilmList = ({ filters }) => {
    return (dispatch) => {
        dispatch(setState({ listLoading: true }))
        const queryObject = {
            s: filters.searchTerm,
            y: filters.yearRange,
            type: filters.mediaType
        }
        const url = `${config.BASE_API}&${queryString.stringify(queryObject, { skipEmptyString: true })}`

        fetch(url).then(response => {
            if (!response.ok) {
                dispatch(setState({ errorMessage: 'An error occurred. Please try again.', listLoading: false }))
            }
            return response.json()
        }).then(data => {
            if (data.Response === 'True') {
                dispatch(setState({ filmList: data.Search, totalResults: data.totalResults, errorMessage: '', listLoading: false }))
            } else {
                dispatch(setState({ filmList: [], totalResults: 0, errorMessage: `No results matched your search for '${filters.searchTerm}'.`, listLoading: false }))
            }

        }).catch(error => dispatch(setState({ errorMessage: error, listLoading: false })))

    }
}

export const getFilmDetails = ({ filmId }) => {
    return (dispatch) => {
        dispatch(setState({ detailLoading: true }))
        const url = `${config.BASE_API}&i=${filmId}`

        fetch(url).then(response => {
            if (!response.ok) {
                dispatch(setState({ errorMessage: 'An error occurred. Please try again.', detailLoading: false }))
            }
            return response.json()
        }).then(data => {
            if (data.Response === 'True') {
                dispatch(setState({ filmDetail: data, errorMessage: '', detailLoading: false }))
            } else {
                dispatch(setState({ errorMessage: 'An error occurred. Please try again.', detailLoading: false }))
            }
        }).catch(error => dispatch(setState({ errorMessage: error, detailLoading: false })))

    }
}

export const { setState } = filmSearchSlice.actions

export default filmSearchSlice.reducer