import React from 'react'
import './RadioButton.css'

const RadioButton = ({ name, formSetting, selectType }) => {

    return (
        <label className="radio">
            <div className="radio__icon">
                { formSetting === `${name} Vectors` ?
                <div className="radio__icon--on"></div> :
                <></>}
            </div>
            <input type="radio" name="vector-type" id="all"
                className="radio__input"
                value={`${name} Vectors`}
                onClick={selectType}
                checked={formSetting === `${name} Vectors`}></input>
                {name}
        </label>
    )
}

export default RadioButton
