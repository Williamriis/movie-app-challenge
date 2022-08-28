import React from 'react';
import WatchlistButton from './WatchlistButton';
import MainDetails from './MainDetails';
import './selected-item.css';

const SelectedItem = ({ item }) => {

    return (
        <div className='selected-item__container'>
            <WatchlistButton filmId={item.imdbID} />
            <MainDetails item={item} />
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