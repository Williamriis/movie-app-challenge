import React from 'react';
import config from '../../../../config';
import './main-details.css';


const MainDetails = ({ item }) => {

    return (
        <div className="selected-item__main-container">
            <img className='selected-item__main-image' src={item.Poster} alt={item.Title} />
            <div className='selected-item__main-details'>
                <h1 className='selected-item__main-title'>{item.Title}</h1>
                <div className='selected-item__main-extra'>
                    {config.VALID_RATINGS.includes(item.Rated) &&
                        <span className='selected-item__main-rated'>{item.Rated}</span>
                    }
                    <span className='selected-item__main-year'>{item.Year}</span>
                    <span className='selected-item__main-genre'>
                        <span className='selected-item__main-genre-dots'>•</span>{item.Genre}<span className='selected-item__main-genre-dots'>•</span>
                    </span>
                    <span>{item.Runtime}</span>
                </div>
                <p className='selected-item__main-actors'>{item.Actors}</p>
            </div>
        </div>
    )
}

export default MainDetails