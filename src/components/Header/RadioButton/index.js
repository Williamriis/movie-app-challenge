import React from 'react';

import './radiobutton.css'

const RadioButton = ({ optionsArray, changeEvent, current, setName }) => {

    return (
        <fieldset className="radio-button__field-set">
            {optionsArray.map((option) => {
                return (
                    <div key={option.name} className="radio-button__container">
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
        </fieldset>
    )
}
export default RadioButton