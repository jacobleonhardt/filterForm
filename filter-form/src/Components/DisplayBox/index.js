import React, { useState } from 'react'
import Form from '../Form'
import './DisplayBox.css'

const DisplayBox = ({isOpen, open}) => {

    const [formSetting, setFormSetting] = useState('All')
    let up = ''

    if(isOpen) up = '--up'

    return (
        <section className="display-box">
            <div className="display-box__title">
                <h2>{formSetting} Vectors</h2>
                <span className={`display-box__title__icon${up}`}><i className="fas fa-chevron-down"></i></span>
            </div>
            <div className="display-box__content">
                {isOpen ? <Form formSetting={formSetting} setFormSetting={setFormSetting} /> : <></>}
            </div>
        </section>
    )
}

export default DisplayBox
