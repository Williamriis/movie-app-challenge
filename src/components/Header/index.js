import React from 'react';

import SearchField from './SearchField';
import YearRange from './YearRange'
import RadioButton from './RadioButton'
import config from '../../config';
import './header.css';

const Header = ({ setSearchTerm, setYearRange, setMediaType, mediaType, yearRange }) => {
    const onSubmit = (e) => {
        e.preventDefault()
    }

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