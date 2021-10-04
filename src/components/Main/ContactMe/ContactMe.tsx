import React from 'react'
import s from './ContactMe.module.css'
import {Form} from './Form/Form'
import scrollReveal from 'scrollreveal'

export const ContactMe = () => {
    scrollReveal().reveal('.contact-me')

    return (
        <section id={'contact-me'} className={s.wrapper}>
            <div className={s.container}>
                <h2>Contact Me</h2>
                <Form/>
            </div>
        </section>

    )
}