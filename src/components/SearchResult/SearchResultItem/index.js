import React from 'react';

import './search-result-item.css';

const SearchResultItem = ({ film, clickEvent }) => {

    return (
        <li onClick={() => clickEvent(film.imdbID)} className='search-item__container'>

            <img src={film.Poster} className='search-item__image' />

            <div className='search-item__text-container'>
                <p className='search-item__title'>{film.Title}</p>
                <p className='search-item__year'>{film.Year}</p>
            </div>
        </li>
    )
}

export default SearchResultItem