import React from 'react';
import './loader.css';

const Loader = ({ loading }) => {
    return (
        <div className={loading ? 'loader-container' : 'no-display'}>
            <div class='loader'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader