import React from 'react'
import RadioButton from '../RadioButton'
import './Form.css'

const Form = ({ formSetting, setFormSetting }) => {

    const selectType = (e) => {
        setFormSetting(e.target.value)
    }

    return (
        <form className="form">
            <RadioButton name={'All'} formSetting={formSetting}
                selectType={selectType} />
            <RadioButton name={'Free'} formSetting={formSetting}
                selectType={selectType} />
            <RadioButton name={'Pro'} formSetting={formSetting}
                selectType={selectType} />
        </form>
    )
}

export default Form
