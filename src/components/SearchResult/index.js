import React from 'react';

import SearchResultItem from './SearchResultItem';
import SelectedItem from './SelectedItem';
import './search-result.css';


const SearchResult = ({ filmList, selectedFilm, setSearchId, totalResults }) => {

    return (
        <section>
            {Number(totalResults) > 0 &&
                <div>
                    <div>
                        <p>{totalResults} RESULTS</p>
                        <ul className='search-result__list'>
                            {filmList.map((film) => <SearchResultItem film={film} clickEvent={setSearchId} />)}
                        </ul>
                    </div>
                    {selectedFilm &&
                        <div>
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