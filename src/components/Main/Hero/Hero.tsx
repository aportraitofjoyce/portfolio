import React, {FC} from 'react'
import s from './Hero.module.scss'
import src from '../../../assets/img/hero.png'
import ReactTypingEffect from 'react-typing-effect'
import {Fade} from 'react-awesome-reveal'

export const Hero: FC = () => {
    return (
        <section id={'hero'} className={s.wrapper}>
            <div className={s.container}>
                <Fade direction={'left'} triggerOnce={true}>
                    <div className={s.textContainer}>
                        <h1>Web Development</h1>
                        <ReactTypingEffect
                            text={['React / Redux', 'JavaScript / TypeScript', 'CSS / SASS', 'Rest API / Unit Tests / Git and more...']}
                            className={s.typingText}
                            typingDelay={1000}
                            eraseDelay={1500}
                            speed={100}
                            eraseSpeed={100}/>
                    </div>
                </Fade>

                <Fade direction={'right'} triggerOnce={true}>
                    <div className={s.imageContainer}>
                        <img src={src} alt='hero'/>
                    </div>
                </Fade>
            </div>
        </section>

    )
}