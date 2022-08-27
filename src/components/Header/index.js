import React, { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { getFilmList } from '../../redux/filmSearchSlice';
import SearchField from './SearchField';
import YearRange from './YearRange'
import RadioButton from './RadioButton'
import config from '../../config';
import './header.css';

const Header = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const [yearRange, setYearRange] = useState('')
    const [mediaType, setMediaType] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const delayedQuery = useCallback(_.debounce((filters) => dispatch(getFilmList({ filters })), 300), [])

    useEffect(() => {
        if (searchTerm) { // Remove so that clearing search input wipes search?
            const filters = {
                searchTerm, yearRange, mediaType
            }
            delayedQuery(filters)
        }
    }, [searchTerm, yearRange, mediaType])


    return (
        <header className='header__container'>
            <form onSubmit={(e) => onSubmit(e)} className='header__form'>
                <SearchField changeEvent={setSearchTerm} />
                <div className='header__filter-container'>
                    <YearRange
                        changeEvent={setYearRange}
                        min={config.YEAR_OPTIONS_MIN}
                        max={config.YEAR_OPTIONS_MAX}
                        current={yearRange}
                    />
                    <RadioButton
                        optionsArray={config.MEDIA_TYPE_OPTIONS}
                        changeEvent={setMediaType}
                        current={mediaType}
                        setName='media'
                    />
                </div>
            </form>
        </header>
    )
}

export default Header