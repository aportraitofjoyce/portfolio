import React, {useState} from 'react'
import s from '../Header.module.scss'
import {Menu} from '../../Icons/Menu/Menu'
import {linksType} from '../Header'

type HeaderNavPropsType = {
    links: linksType[]
}

export const HeaderMobileNav: React.FC<HeaderNavPropsType> = ({links}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const mobileLinksContainerStyles = `${s.mobileLinksContainer} ${isOpen ? s.open : ''}`
    const onLinkClickHandler = () => setIsOpen(!isOpen)

    return (
        <nav className={s.mobileMenuContainer} onClick={onLinkClickHandler}>
            <Menu/>

            <div className={mobileLinksContainerStyles}>
                {links.map(l => <a key={l.name} href={l.link}>{l.name}</a>)}
            </div>
        </nav>
    )
}