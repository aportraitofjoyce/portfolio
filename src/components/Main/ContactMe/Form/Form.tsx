import React from 'react'
import s from '../ContactMe.module.css'

export const Form = () => {
    const onSendButtonClick = (e: any) => {
        e.preventDefault()
        alert('Thank you!')
    }

    return (
        <form action="" className={s.formContainer}>
            <input type="text" placeholder={'Name'}/>
            <input type="text" placeholder={'Email'}/>
            <textarea name="" id="" placeholder={'Say something about your project...'}/>
            <button onClick={onSendButtonClick}>Send</button>
        </form>
    )
}