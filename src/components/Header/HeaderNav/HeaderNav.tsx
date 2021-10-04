import React from 'react'
import s from '../Header.module.scss'
import {linksType} from '../Header'

type HeaderNavPropsType = {
    links: linksType[]
}

export const HeaderNav: React.FC<HeaderNavPropsType> = ({links}) => {
    return (
        <nav className={s.linksContainer}>
            {links.map(l => <a key={l.name} href={l.link}>{l.name}</a>)}
        </nav>
    )
}