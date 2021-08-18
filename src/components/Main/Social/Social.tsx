import React from 'react'
import s from './Social.module.css'
import {MaximizeIcon} from '../../Icons/MaximizeIcon/MaximizeIcon'

export const Social = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.container}>
                <a className={s.iconContainer}>
                    <MaximizeIcon/>
                </a>
                <a className={s.iconContainer}>
                    <MaximizeIcon/>
                </a>
                <a className={s.iconContainer}>
                    <MaximizeIcon/>
                </a>
            </div>
        </section>
    )
}