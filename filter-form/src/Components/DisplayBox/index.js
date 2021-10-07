import React, { useState } from 'react'
import Form from '../Form'
import './DisplayBox.css'

const DisplayBox = ({setIsOpen, isOpen}) => {

    const [formSetting, setFormSetting] = useState('All Vectors')

    const open = () => {
        rotate()
        setIsOpen(!isOpen)
    }

    const rotate = () => {
        if(isOpen) {
            document.querySelector('.display-box__icon').classList.add('display-box__icon--rotate')
        } else {
            document.querySelector('.display-box__icon').classList.remove('display-box__icon--rotate')
        }
    }

    return (
        <section className="display-box">
            <div className="display-box__title" onClick={open}>
                <h2>{formSetting}</h2>
                <span className="display-box__icon"><i className="fas fa-chevron-up"></i></span>
            </div>
            <div className="display-box__content">
                {isOpen ? <Form formSetting={formSetting} setFormSetting={setFormSetting} /> : <></>}
            </div>
        </section>
    )
}

export default DisplayBox
