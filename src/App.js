import React, { useState, useEffect, useCallback } from "react";
import queryString from 'query-string';
import _ from 'lodash';

import config from './config';
import Header from './components/Header';
import SearchResult from "./components/SearchResult";

const API_URL = config.BASE_API


const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [yearRange, setYearRange] = useState('')
    const [mediaType, setMediaType] = useState('')
    const [filmList, setFilmList] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [selectedFilm, setSelectedFilm] = useState(false)
    const [searchId, setSearchId] = useState('')

    const makeRequest = async (apiUrl, onSuccess, onFailure) => {
        fetch(apiUrl).then(response => {
            if (!response.ok) {
                console.log('failed')
            }
            return response.json()
        }).then(data => {
            console.log(data)
            if (data.Response === 'True') {
                onSuccess(data)
            } else {
                onFailure()
            }

        }).catch(error => console.log(error))
    }

    const delayedQuery = useCallback(_.debounce((url, onSuccess, onFailure) => makeRequest(url, onSuccess, onFailure), 500), [])

    useEffect(() => {
        if (searchTerm) { //TODO: Remove so that clearing search input wipes search
            const queryObject = {
                s: searchTerm,
                y: yearRange,
                type: mediaType
            }
            const url = `${API_URL}&${queryString.stringify(queryObject, { skipEmptyString: true })}`
            const onSuccess = (data) => {
                if (Number(data.totalResults) === 1) {
                    setSearchId(data.Search[0].imdbID)
                }
                setFilmList(data.Search)
                setTotalResults(data.totalResults)
            }
            const onFailure = () => {
                setFilmList([])
                setTotalResults(0)
            }
            delayedQuery(url, onSuccess, onFailure)
        }
    }, [searchTerm, yearRange, mediaType])

    useEffect(() => {
        if (searchId) {
            const url = `${API_URL}&i=${searchId}`
            const onSuccess = (data) => {
                setSelectedFilm(data)
            }
            const onFailure = (data) => {
                console.log('error')
            }
            makeRequest(url, onSuccess, onFailure)
        }
    }, [searchId])

    return (
        <div>
            <Header setSearchTerm={setSearchTerm} setYearRange={setYearRange} setMediaType={setMediaType} mediaType={mediaType} yearRange={yearRange} />
            <SearchResult filmList={filmList} totalResults={totalResults} selectedFilm={selectedFilm} setSearchId={setSearchId} />
        </div>

    )
}

export default App