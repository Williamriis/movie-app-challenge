import React from 'react';

import './radio-button.css'

const RadioButton = ({ optionsArray, changeEvent, current, setName }) => {

    return (
        <fieldset className="radio-button__field-set">

            <p className='radio-button__title'>TYPE</p>
            <div className='radio-button__container'>
                {optionsArray.map((option) => {
                    return (
                        <div key={option.name} className="radio-button__button-container">
                            <input
                                className="radio-button__button"
                                type='radio'
                                name={setName}
                                id={option.name}
                                value={option.value}
                                checked={current === option.value}
                                onChange={(e) => changeEvent(e.target.value)} />
                            <label htmlFor={option.name}
                                className="radio-button__label">{option.name}</label>
                        </div>
                    )
                })}
            </div>
        </fieldset>
    )
}
export default RadioButton