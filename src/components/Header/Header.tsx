import React from 'react'
import s from './Header.module.scss'
import {HeaderNav} from './HeaderNav/HeaderNav'
import {HeaderLogo} from './HeaderLogo/HeaderLogo'
import {HeaderMobileNav} from './HeaderMobileNav/HeaderMobileNav'

export type linksType = {
    name: string
    link: string
}

export const Header = () => {
    const links: linksType[] = [
        {name: 'Home', link: '#'},
        {name: 'Skills', link: '#skills'},
        {name: 'Projects', link: '#projects'},
        {name: 'Contact Me', link: '#contact-me'}
    ]

    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <HeaderLogo/>
                <HeaderNav links={links}/>
                <HeaderMobileNav links={links}/>
            </div>
        </header>
    )
}