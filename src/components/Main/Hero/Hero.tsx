import React from 'react'
import s from './Hero.module.scss'
import src from '../../../assets/img/hero.png'
import Tilt from 'react-parallax-tilt'
import ReactTypingEffect from 'react-typing-effect'
import {Slide} from 'react-awesome-reveal'

export const Hero: React.FC = () => {
    return (
        <section id={'hero'} className={s.wrapper}>
            <div className={s.container}>
                <Slide direction={'left'} triggerOnce={false}>
                    <div className={s.textContainer}>
                        <h1>Web Development</h1>
                        <ReactTypingEffect staticText={'on'}
                                           text={['React / Redux', 'JavaScript / TypeScript', 'CSS / SASS']}
                                           className={s.typingText}
                                           typingDelay={600}
                                           eraseDelay={600}
                                           speed={100}
                                           eraseSpeed={100}/>
                        <button>Download CV</button>
                    </div>
                </Slide>
                <Slide direction={'right'} triggerOnce={false}>
                    <div className={s.imageContainer}>
                        <Tilt transitionSpeed={7000} style={{width: 'inherit'}}>
                            <img src={src} alt='hero-image'/>
                        </Tilt>
                    </div>
                </Slide>
            </div>
        </section>

    )
}