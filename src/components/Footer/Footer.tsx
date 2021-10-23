import React from 'react'
import s from './Footer.module.scss'
import {Fade} from 'react-awesome-reveal'

export const Footer = () => {
    return (
        <footer id='footer' className={s.wrapper}>
            <div className={s.container}>
                <Fade direction={'left'} triggerOnce={true} style={{width: 'inherit'}}>
                    <div>
                        <h3 style={{paddingBottom: 32}}>Ilya Sadovsky</h3>
                        <h4 style={{paddingBottom: 16}}>
                            <a href={'mailto:aportraitofjoyce@gmail.com'} target={'_blank'} rel='noreferrer'>
                                aportraitofjoyce@gmail.com
                            </a>
                        </h4>
                        <h4><a href={'tel:+375259514089'} rel='noreferrer'>+375 (25) 951-40-89</a></h4>
                    </div>
                </Fade>
            </div>
        </footer>
    )
}