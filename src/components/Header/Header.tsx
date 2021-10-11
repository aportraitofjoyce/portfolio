import React from 'react'
import s from './Header.module.scss'
import {HeaderNav} from './HeaderNav/HeaderNav'
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
                <div>
                    <h4>My portfolio</h4>
                </div>
                <HeaderNav links={links}/>
                <HeaderMobileNav links={links}/>
            </div>
        </header>
    )
}