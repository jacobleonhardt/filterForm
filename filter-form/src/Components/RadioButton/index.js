import React, { useState } from 'react'
import './RadioButton.css'

const RadioButton = ({ name, formSetting, selectType }) => {

    const check = (formSetting === name)
    let selected = ''

    if(check) selected = '--selected'

    return (
        <label className="radio">
            <div className={`radio__icon${selected}`}>
                <div className={`radio__icon__fill${selected}`}></div>
            </div>
            <input type="radio" name="vector-type" id="all"
                className="radio__input"
                value={name}
                onClick={e => {
                    e.stopPropagation()
                    selectType(e) }}
                onChange={() => check}></input>
                {name}
        </label>
    )
}

export default RadioButton
