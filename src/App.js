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

    const makeRequest = async (apiUrl) => {
        fetch(apiUrl).then(response => {
            if (!response.ok) {
                console.log('failed')
            }
            return response.json()
        }).then(data => {
            console.log(data)
            setFilmList(data.Search)
            setTotalResults(data.totalResults)
        }).catch(error => console.log(error))
    }

    const delayedQuery = useCallback(_.debounce((url) => makeRequest(url), 500), [])

    useEffect(() => {
        if (searchTerm) {
            const queryObject = {
                s: searchTerm,
                y: yearRange,
                type: mediaType
            }
            const url = `${API_URL}&${queryString.stringify(queryObject, { skipEmptyString: true })}`
            delayedQuery(url)
        }
    }, [searchTerm, yearRange, mediaType])

    return (
        <div>
            <Header setSearchTerm={setSearchTerm} setYearRange={setYearRange} setMediaType={setMediaType} mediaType={mediaType} yearRange={yearRange} />
            <SearchResult filmList={filmList} totalResults={totalResults} selectedFilm={selectedFilm} setSelectedFilm={setSelectedFilm} />
        </div>

    )
}

export default App