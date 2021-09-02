import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer id="footer" className={s.wrapper}>
            <div className={s.container}>
                <div>
                    <h3 style={{paddingBottom: 16}}>Ilya Sadosky</h3>
                    <h3 style={{paddingBottom: 16}}>aportraitofjoyce@gmail.com</h3>
                    <h3>+375 (25) 951-40-89</h3>
                </div>
            </div>
        </footer>
    )
}