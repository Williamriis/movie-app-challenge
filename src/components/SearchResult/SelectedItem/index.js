import React from 'react';
import WatchlistButton from './WatchlistButton';
import './selected-item.css';

const SelectedItem = ({ item }) => {

    return (
        <div className='selected-item__container'>
            <div className="selected-item__main-container">
                <WatchlistButton filmId={item.imdbID} />
                <img className='selected-item__main-image' src={item.Poster} alt={item.Title} />
                <div className='selected-item__main-details'>
                    <h1 className='selected-item__main-title'>{item.Title}</h1>
                    <div className='selected-item__main-extra'>
                        <span className='selected-item__main-rated'>{item.Rated}</span>
                        <span className='selected-item__main-year'>{item.Year}</span>
                        <span className='selected-item__main-genre'>
                            <span className='selected-item__main-genre-dots'>•</span>{item.Genre}<span className='selected-item__main-genre-dots'>•</span>
                        </span>
                        <span>{item.Runtime}</span>
                    </div>
                    <p className='selected-item__main-actors'>{item.Actors}</p>
                </div>
            </div>
            <div className='selected-item__description-container'>
                <p className='selected-item__description'>{item.Plot}</p>
            </div>
            <div className='selected-item__review-container'>
                {item.Ratings.map((rating) => {
                    return <div className='selected-item__review' key={rating.Source}>
                        <p className='selected-item__review-score'>{rating.Value}</p>
                        <p className='selected-item__review-source'>{rating.Source}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SelectedItem