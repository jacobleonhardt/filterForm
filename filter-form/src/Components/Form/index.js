import React, { useState } from 'react'
import './Form.css'

const Form = ({ formSetting, setFormSetting }) => {

    const selectType = (e) => {
        setFormSetting(e.target.value)
    }

    return (
        <form className="form">
            <div className="form__inputs">
                <label for="all">
                    <input type="radio" id="all" value="All Vectors"
                    onClick={selectType}></input>
                    All
                </label>
                <label for="free">
                 <input type="radio" id="free" value="Free Vectors"
                 onClick={selectType}></input>
                    Free
             </label>
                <label for="pro">
                    <input type="radio" id="pro" value="Pro Vectors"
                    onClick={selectType}></input>
                    Pro
                </label>
            </div>
        </form>
    )
}

export default Form
