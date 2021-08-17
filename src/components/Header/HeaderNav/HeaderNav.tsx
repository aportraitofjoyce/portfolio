import React, {useState} from 'react'
import s from './HeaderNav.module.css'
import {MenuIcon} from '../../Icons/MenuIcon/MenuIcon'

export const HeaderNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const linksContainerStyles = `${s.linksContainer} ${isOpen && s.open} `
    const onLinkClickHandler = () => setIsOpen(!isOpen)

    return (
        <nav>
            <div className={s.menuContainer} onClick={onLinkClickHandler}>
                <MenuIcon/>
            </div>

            <div className={linksContainerStyles}>
                <a href="#">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact-me">Contact me</a>
            </div>

        </nav>
    )
}