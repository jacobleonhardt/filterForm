import React from 'react'
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
                    selectType(e) }}
                onChange={() => check}></input>
            <span className="radio__label">{name}</span>
        </label>
    )
}

export default RadioButton
