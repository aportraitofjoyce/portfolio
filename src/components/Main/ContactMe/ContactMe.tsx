import React from 'react'
import s from './ContactMe.module.scss'
import {Form} from './Form/Form'
import scrollReveal from 'scrollreveal'
import {Fade} from 'react-awesome-reveal'

export const ContactMe = () => {
    scrollReveal().reveal('.contact-me')

    return (
        <section id={'contact-me'} className={s.wrapper}>
            <div className={s.container}>
                <h2>Contact Me</h2>
                <Fade direction={'left'} triggerOnce={true} style={{width: '100%'}}>
                    <Form/>
                </Fade>
            </div>
        </section>
    )
}