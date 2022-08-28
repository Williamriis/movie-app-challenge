import React from 'react';
import InfoIcon from '../Icons/Info/InfoIcon';
import './info-message.css';

const InfoMessage = ({ message }) => {

    return (
        <div className={message ? 'info-message__container' : 'no-display'}>
            <div className='info-message__content-container'>
                <InfoIcon color='#fcbb3a' />
                <span className='info-message__message'>{message}</span>
            </div>
        </div>
    )
}

export default InfoMessage