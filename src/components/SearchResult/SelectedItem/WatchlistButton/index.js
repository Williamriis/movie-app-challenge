import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilm, removeFilm } from '../../../../redux/watchlistSlice';
import AddBookmark from '../../../Icons/Bookmark';
import './watchlist-button.css';

const WatchlistButton = ({ filmId }) => {
    const dispatch = useDispatch()
    const isOnWatchlist = useSelector((store) => store.watchlistSlice.filmList).includes(filmId)

    const onClick = useCallback(() => {
        if (isOnWatchlist) {
            dispatch(removeFilm({ filmId }))
        } else {
            dispatch(addFilm({ filmId }))
        }
    }, [filmId, isOnWatchlist])

    return (
        <button className='watchlist__button' onClick={onClick}>
            <AddBookmark add={!isOnWatchlist} />
            <span className='watchlist__button-text'>Watchlist</span>
        </button>
    )
}

export default WatchlistButton