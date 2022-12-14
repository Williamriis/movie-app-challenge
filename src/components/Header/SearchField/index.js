import React from 'react';

import SearchIcon from '../../Icons/Search/SearchIcon';
import './search-field.css'

const SearchField = ({ changeEvent }) => {

    return (
        <div className='header__search-container'>
            <SearchIcon className='header__search-icon' />
            <input
                type='text'
                onChange={(e) => changeEvent(e.target.value)}
                className='header__search-input'
                autoFocus
                placeholder='Discover here..'
            />
        </div>
    )
}
export default SearchField