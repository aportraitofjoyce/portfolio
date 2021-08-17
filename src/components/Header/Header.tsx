import React from 'react'
import s from './Header.module.css'
import {HeaderNav} from './HeaderNav/HeaderNav'
import {HeaderLogo} from './HeaderLogo/HeaderLogo'

export const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <HeaderLogo/>
                <HeaderNav/>
            </div>
        </header>
    )
}