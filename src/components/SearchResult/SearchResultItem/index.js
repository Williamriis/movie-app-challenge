import React from 'react';

const SearchResultItem = ({ film }) => {

    return (
        <li>
            {film.Title}
        </li>
    )
}

export default SearchResultItem