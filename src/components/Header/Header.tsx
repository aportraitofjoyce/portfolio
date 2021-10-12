import React from 'react'
import s from './Header.module.scss'
import {HeaderNav} from './HeaderNav/HeaderNav'
import {HeaderMobileNav} from './HeaderMobileNav/HeaderMobileNav'
import * as Scroll from 'react-scroll'
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

export type linksType = {
    name: string
    link: string
}

export const Header = () => {
    const links: linksType[] = [
        {name: 'Home', link: 'hero'},
        {name: 'Skills', link: 'skills'},
        {name: 'Projects', link: 'projects'},
        {name: 'Contact Me', link: 'contact-me'}
    ]


    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <h4 onClick={() => scroll.scrollToTop()}>My portfolio</h4>
                <HeaderNav links={links}/>
                <HeaderMobileNav links={links}/>
            </div>
        </header>
    )
}