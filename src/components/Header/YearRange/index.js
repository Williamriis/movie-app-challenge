import React from 'react';

import './year-range.css';

const YearRange = ({ changeEvent, min, max, current }) => {

    return (
        <div className='year-range__container'>
            <p className='year-range__title'>YEAR</p>
            <div className='year-range__sub-container'>
                <span>{min}</span>
                <input type="range" min={min} max={max} onChange={(e) => changeEvent(e.target.value)}></input>
                <span>{current}</span>
            </div>
        </div>
    )
}

export default YearRange