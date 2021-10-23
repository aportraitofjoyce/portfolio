import React from 'react'
import s from '../Header.module.scss'
import {linksType} from '../Header'
import {Link} from 'react-scroll'

type HeaderNavPropsType = {
    links: linksType[]
}

export const HeaderNav: React.FC<HeaderNavPropsType> = ({links}) => {
    return (
        <nav className={s.linksContainer}>
            {links.map(l => <Link key={l.name}
                                  to={l.link}
                                  spy
                                  smooth
                                  offset={-71}
                                  duration={450}>
                {l.name}
            </Link>)}
            <a href='https://drive.google.com/file/d/1G0MUHymu77gi2fK867RI7B3r5xKHkNct/view?usp=sharing'
               download target={'_blank'} rel={'noreferrer'} style={{color: '#f0a253'}}>CV</a>
        </nav>
    )
}