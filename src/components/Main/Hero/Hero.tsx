import React from 'react'
import s from './Hero.module.scss'
import g1 from '../../../assets/img/g1.jpg'

export const Hero: React.FC = () => {
    return (
        <section id={'hello'} className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textContainer}>
                    <h1>Web Development on React</h1>
                    <h3>Clear, modern and effective</h3>
                </div>
                <div className={s.imageContainer}>
                    <img src={g1} alt='hero'/>
                </div>
            </div>
        </section>

    )
}