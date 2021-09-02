import React from 'react'
import s from './Hello.module.css'
import {Maximize} from '../../Icons/Maximize/Maximize'

export const Hello = () => {
    return (
        <section id={'hello'} className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textContainer}>
                    <h4>Hello</h4>
                    <h1>I'm Chris Wilson from Grinding Gear Games</h1>
                    <h4>Гони деньги</h4>
                </div>
                <div className={s.imageContainer}>
                    {/*<Maximize width={48} height={48} primary/>*/}
                    <img
                        src="https://pngimg.com/uploads/anime_girl/anime_girl_PNG96.png"
                        alt="me"/>
                </div>
            </div>
        </section>

    )
}