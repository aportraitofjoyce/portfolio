import React from 'react'
import s from './ContactMe.module.scss'
import {Form} from './Form/Form'
import scrollReveal from 'scrollreveal'
import {Slide} from 'react-awesome-reveal'

export const ContactMe = () => {
    scrollReveal().reveal('.contact-me')

    return (
        <section id={'contact-me'} className={s.wrapper}>
            <Slide direction={'up'} className={s.container}>
                <div className={s.container}>
                    <h2>Contact Me</h2>
                    <Form/>
                </div>
            </Slide>
        </section>
    )
}