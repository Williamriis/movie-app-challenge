import React from 'react';

import SearchResultItem from './SearchResultItem';
import SelectedItem from './SelectedItem';
import './search-result.css';


const SearchResult = ({ filmList, selectedFilm, setSearchId, totalResults }) => {

    return (
        <section className='search-result__container'>
            {Number(totalResults) > 0 &&
                <div className='search-result__content-container'>
                    <div className='search-result__list-container'>
                        <p className='search-result__total-count'>{totalResults} RESULTS</p>
                        <ul className='search-result__list'>
                            {filmList.map((film) => <SearchResultItem film={film} clickEvent={setSearchId} />)}
                        </ul>
                    </div>
                    {selectedFilm &&
                        <div className='search-result__selected-container'>
                            <SelectedItem item={selectedFilm} />
                        </div>}
                </div>
            }
            {!Number(totalResults) &&
                <h1>NO RESULT COMPONENT.</h1>}
        </section>
    )
}

export default SearchResult