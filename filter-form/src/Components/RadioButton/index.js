import React, { useState } from 'react'
import './RadioButton.css'

const RadioButton = ({ name, formSetting, selectType }) => {

    const check = (formSetting === `${name} Vectors`)
    let selected = ''

    if(check) selected = '--selected'

    return (
        <label className="radio">
            <div className={`radio__icon${selected}`}>
                <div className={`radio__icon__fill${selected}`}></div>
            </div>
            <input type="radio" name="vector-type" id="all"
                className="radio__input"
                value={`${name} Vectors`}
                onClick={selectType}
                checked={check}></input>
                {name}
        </label>
    )
}

export default RadioButton
