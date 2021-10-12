import React, {FormEvent, FormEventHandler} from 'react'
import s from '../ContactMe.module.scss'
import emailjs from 'emailjs-com'
import {ScrollReveal} from '../../../../utils/ScrollReveal'
import {Slide} from 'react-awesome-reveal'

export const Form = () => {
    const onSubmit = async (e: any) => {
        e.preventDefault()

        /*try {
            const response = await emailjs.sendForm('gmail', 'template_7eyueer', e.target, 'user_22VRdmcJd0uaKf5W0EuQ4')
            alert(response.text)
            e.target.reset()
        } catch (e) {
            alert(e.text)
        }*/
    }

    return (
        <form onSubmit={onSubmit} className={s.formContainer}>
            <input type='text' name={'name'} placeholder={'Name'}/>
            <input type='text' name={'email'} placeholder={'Email'}/>
            <textarea name='message' placeholder={'Say something about your project...'}/>
            <button type={'submit'}>Send</button>
        </form>
    )
}