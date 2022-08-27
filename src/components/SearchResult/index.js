import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmDetails } from '../../redux/filmSearchSlice';
import SearchResultItem from './SearchResultItem';
import SelectedItem from './SelectedItem';
import Loader from '../Loader';
import InfoMessage from '../InfoMessage';
import './search-result.css';


const SearchResult = () => {
    const dispatch = useDispatch()
    const [filmId, setFilmId] = useState('')
    const { filmList, totalResults, filmDetail, listLoading, detailLoading, listError, detailError } = useSelector((store) => store.filmSearchSlice)

    useEffect(() => {
        if (filmId) {
            dispatch(getFilmDetails({ filmId }))
        }
    }, [filmId])

    return (
        <section className='search-result__container'>
            <div className='search-result__content-container'>
                <div className='search-result__list-container'>
                    {Number(totalResults) > 0 && !listLoading && !listError &&
                        <>
                            <p className='search-result__total-count'>{totalResults} RESULTS</p>
                            <ul className='search-result__list'>
                                {filmList.map((film) => <SearchResultItem film={film} clickEvent={setFilmId} key={film.imdbID} />)}
                            </ul>
                        </>
                    }
                    <Loader loading={listLoading} />
                    <InfoMessage message={listError} />
                </div>
                <div className='search-result__selected-container'>
                    {!detailLoading && filmDetail && !detailError && <SelectedItem item={filmDetail} />}
                    <Loader loading={detailLoading} />
                    <InfoMessage message={detailError} />
                </div>
            </div>
        </section>
    )
}

export default SearchResult