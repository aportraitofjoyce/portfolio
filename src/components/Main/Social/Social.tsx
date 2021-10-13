import React from 'react'
import s from './Social.module.scss'
import {Github} from '../../Icons/Github/Github'
import {Telegram} from '../../Icons/Telegram/Telegram'
import {Email} from '../../Icons/Email/Email'
import {Phone} from '../../Icons/Phone/Phone'
import {Fade} from 'react-awesome-reveal'

export const Social = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.container}>
                <Fade direction={'left'} triggerOnce={true}>
                    <div className={s.iconsContainer}>
                        <a className={s.iconContainer} href={'https://github.com/aportraitofjoyce'} target={'_blank'}
                           rel='noreferrer'>
                            <Github/>
                        </a>
                        <a className={s.iconContainer} href={'https://t.me/aportraitofjoyce'} target={'_blank'}
                           rel='noreferrer'>
                            <Telegram/>
                        </a>
                        <a className={s.iconContainer} href={'mailto:aportraitofjoyce@gmail.com'} target={'_blank'}
                           rel='noreferrer'>
                            <Email/>
                        </a>
                        <a className={s.iconContainer} href={'tel:+375259514089'} rel='noreferrer'>
                            <Phone/>
                        </a>
                    </div>
                </Fade>
            </div>

        </section>
    )
}