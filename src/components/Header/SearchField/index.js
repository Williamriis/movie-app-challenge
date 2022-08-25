import React from 'react';

import SearchIcon from './SearchIcon';
import './searchfield.css'

const SearchField = ({ changeEvent }) => {

    return (
        <div className='header__search-container'>
            <SearchIcon className='header__search-icon' />
            <input
                type='text'
                onChange={(e) => changeEvent(e.target.value)}
                className='header__search-input'
                autoFocus
            />
        </div>
    )
}
export default SearchField