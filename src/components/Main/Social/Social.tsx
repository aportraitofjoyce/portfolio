import React from 'react'
import s from './Social.module.scss'
import {Github} from '../../Icons/Github/Github'
import {Telegram} from '../../Icons/Telegram/Telegram'
import {Email} from '../../Icons/Email/Email'
import {Phone} from '../../Icons/Phone/Phone'

export const Social = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.container}>
                <div className={s.iconsContainer}>
                    <a className={s.iconContainer} href={'https://github.com/aportraitofjoyce'} target={'_blank'}>
                        <Github/>
                    </a>
                    <a className={s.iconContainer} href={'https://t.me/aportraitofjoyce'} target={'_blank'}>
                        <Telegram/>
                    </a>
                    <a className={s.iconContainer} href={'mailto:aportraitofjoyce@gmail.com'} target={'_blank'}>
                        <Email/>
                    </a>
                    <a className={s.iconContainer} href={'tel:+375259514089'}>
                        <Phone/>
                    </a>
                </div>
            </div>
        </section>
    )
}