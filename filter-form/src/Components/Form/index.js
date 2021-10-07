import React, { useState } from 'react'
import './Form.css'

const Form = ({ formSetting, setFormSetting }) => {

    const selectType = (e) => {
        setFormSetting(e.target.value)
    }

    return (
        <form className="form">
            <div className="form__content">
                <label htmlFor="all" className="form__inputs">
                    <input type="radio" name="vector-type" id="all" value="All Vectors"
                    onClick={selectType}></input>
                    All
                </label>
                <label htmlFor="free" className="form__inputs">
                 <input type="radio" name="vector-type" id="free" value="Free Vectors"
                 onClick={selectType}></input>
                    Free
             </label>
                <label htmlFor="pro" className="form__inputs">
                    <input type="radio" name="vector-type" id="pro" value="Pro Vectors"
                    onClick={selectType}></input>
                    Pro
                </label>
            </div>
        </form>
    )
}

export default Form
