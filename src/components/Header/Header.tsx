import React, {FC} from 'react'
import s from './Header.module.scss'
import {HeaderNav} from './HeaderNav/HeaderNav'
import {HeaderMobileNav} from './HeaderMobileNav/HeaderMobileNav'
import {animateScroll as scroll} from 'react-scroll'

export type linksType = {
    name: string
    link: string
    download?: boolean
}

export const Header: FC = () => {
    const links: linksType[] = [
        {name: 'Home', link: 'hero'},
        {name: 'Skills', link: 'skills'},
        {name: 'Projects', link: 'projects'},
        {name: 'Contact Me', link: 'contact-me'},
    ]

    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <h4 onClick={() => scroll.scrollToTop()}>
                    My portfolio
                </h4>
                <HeaderNav links={links}/>
                <HeaderMobileNav links={links}/>
            </div>
        </header>
    )
}