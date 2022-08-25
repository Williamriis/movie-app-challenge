import React from 'react';

import SearchResultItem from './SearchResultItem';
import SelectedItem from './SelectedItem';


const SearchResult = ({ filmList, selectedFilm, totalResults }) => {

    return (
        <section>
            {filmList && filmList.length > 0 &&
                <div>
                    <div>
                        <p>{totalResults} RESULTS</p>
                        <ul>
                            {filmList.map((film) => <SearchResultItem film={film} />)}
                        </ul>
                    </div>
                    {selectedFilm &&
                        <div>
                            <SelectedItem item={selectedFilm} />
                        </div>}
                </div>
            }
            <h1>NO RESULT COMPONENT.</h1>
        </section>
    )
}

export default SearchResult