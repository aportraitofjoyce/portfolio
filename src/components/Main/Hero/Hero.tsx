import React from 'react'
import s from './Hero.module.scss'
import src from '../../../assets/img/hero.png'

export const Hero: React.FC = () => {
    return (
        <section id={'hello'} className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textContainer}>
                    <h1>Web Development on React</h1>
                    <button>Download CV</button>
                </div>

                <div className={s.imageContainer}>
                    <img src={src} alt='hero'/>
                </div>
            </div>
        </section>

    )
}