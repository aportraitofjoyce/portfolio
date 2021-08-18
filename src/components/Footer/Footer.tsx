import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.wrapper}>
            <div className={s.container}>
                <div>Sadovskiy Ilya</div>
                <div>+375259514089</div>
                <div>Copyright</div>
            </div>
        </footer>
    )
}