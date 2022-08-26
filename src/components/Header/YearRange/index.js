import React from 'react';

import './year-range.css';

const YearRange = ({ changeEvent, min, max, current }) => {

    return (
        <div className='year-range__container'>
            <p className='year-range__title'>YEAR: {current}</p>
            <div className='year-range__sub-container'>
                <span>{min}</span>
                <input className='year-range__slider' type='range' min={min} max={max} onChange={(e) => changeEvent(e.target.value)}></input>
                <span>{max}</span>
            </div>
        </div>
    )
}

export default YearRange