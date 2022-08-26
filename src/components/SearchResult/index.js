import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmDetails } from '../../redux/filmSearchSlice';
import SearchResultItem from './SearchResultItem';
import SelectedItem from './SelectedItem';
import './search-result.css';


const SearchResult = () => {
    const dispatch = useDispatch()
    const [filmId, setFilmId] = useState('')
    const filmList = useSelector((store) => store.filmSearchSlice.filmList)
    const totalResults = useSelector((store) => store.filmSearchSlice.totalResults)
    const filmDetail = useSelector((store) => store.filmSearchSlice.filmDetail)

    useEffect(() => {
        if (filmId) {
            dispatch(getFilmDetails({ filmId }))
        }
    }, [filmId])

    return (
        <section className='search-result__container'>
            {Number(totalResults) > 0 &&
                <div className='search-result__content-container'>
                    <div className='search-result__list-container'>
                        <p className='search-result__total-count'>{totalResults} RESULTS</p>
                        <ul className='search-result__list'>
                            {filmList.map((film) => <SearchResultItem film={film} clickEvent={setFilmId} key={film.imdbID} />)}
                        </ul>
                    </div>
                    {filmDetail &&
                        <div className='search-result__selected-container'>
                            <SelectedItem item={filmDetail} />
                        </div>}
                </div>
            }
            {!Number(totalResults) &&
                <h1>NO RESULT COMPONENT.</h1>}
        </section>
    )
}

export default SearchResult