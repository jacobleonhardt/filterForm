import React, { useState } from 'react'
import './Form.css'

const Form = ({ formSetting, setFormSetting }) => {

    const selectType = (e) => {
        setFormSetting(e.target.value)
    }

    return (
        <form className="form">
            <div className="form__content">
                <label className="form__content__inputs">
                    <div className="form__content__inputs__check">
                        { formSetting === 'All Vectors' ?
                        <div className="form__content__inputs__check--on"></div> :
                        <></>}
                    </div>
                    <input type="radio" name="vector-type" id="all"
                    className="form__content__inputs__option"
                    value="All Vectors"
                    onClick={selectType}
                    checked={formSetting === 'All Vectors'}></input>
                    All
                </label>
                <label className="form__content__inputs">
                    <div className="form__content__inputs__check">
                    { formSetting === 'Free Vectors' ?
                        <div className="form__content__inputs__check--on"></div> :
                        <></>}                    </div>
                    <input type="radio" name="vector-type" id="free"
                    className="form__content__inputs__option"
                    value="Free Vectors"
                    onClick={selectType}></input>
                    Free
             </label>
                <label className="form__content__inputs">
                    <div className="form__content__inputs__check">
                    { formSetting === 'Pro Vectors' ?
                        <div className="form__content__inputs__check--on"></div> :
                        <></>}                    </div>
                    <input type="radio" name="vector-type" id="pro"
                    className="form__content__inputs__option"
                    value="Pro Vectors"
                    onClick={selectType}></input>
                    Pro
                </label>
            </div>
        </form>
    )
}

export default Form
