import React from 'react'
import s from './Footer.module.scss'
import {Slide} from 'react-awesome-reveal'

export const Footer = () => {
    return (
        <footer id='footer' className={s.wrapper}>
            <div className={s.container}>
                <Slide direction={'right'} triggerOnce={true} style={{width: 'inherit'}}>
                    <div>
                        <h4 style={{paddingBottom: 16}}>Ilya Sadosky</h4>
                        <h4 style={{paddingBottom: 16}}>aportraitofjoyce@gmail.com</h4>
                        <h4>+375 (25) 951-40-89</h4>
                    </div>
                </Slide>
            </div>
        </footer>
    )
}