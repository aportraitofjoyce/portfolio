import React, {useState} from 'react'
import s from './HeaderNav.module.css'
import {Menu} from '../../Icons/Menu/Menu'

export const HeaderNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const linksContainerStyles = `${s.linksContainer} ${isOpen && s.open}`

    const onLinkClickHandler = () => setIsOpen(!isOpen)

    return (
        <nav>
            <div className={s.menuContainer} onClick={onLinkClickHandler}>
                <Menu/>
            </div>

            <div className={linksContainerStyles}>
                <a href="#" onClick={onLinkClickHandler}>Home</a>
                <a href="#skills" onClick={onLinkClickHandler}>Skills</a>
                <a href="#projects" onClick={onLinkClickHandler}>Projects</a>
                <a href="#contact-me" onClick={onLinkClickHandler}>Contact me</a>
            </div>

        </nav>
    )
}