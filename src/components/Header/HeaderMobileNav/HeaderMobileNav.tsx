import React, {useState} from 'react'
import s from '../Header.module.scss'
import {Menu} from '../../Icons/Menu/Menu'
import {linksType} from '../Header'
import {Link} from 'react-scroll'

type HeaderNavPropsType = {
    links: linksType[]
}

export const HeaderMobileNav: React.FC<HeaderNavPropsType> = ({links}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const mobileLinksContainerStyles = `${s.mobileLinksContainer} ${isOpen ? s.open : ''}`
    const onLinkClickHandler = () => setIsOpen(!isOpen)

    return (
        <div className={s.mobileMenuContainer}>
            <div onClick={onLinkClickHandler} style={{cursor: 'pointer'}}>
                <Menu/>
            </div>

            <nav className={mobileLinksContainerStyles}>
                {links.map(l => <Link key={l.name}
                                      onClick={() => setIsOpen(false)}
                                      to={l.link}
                                      spy
                                      smooth
                                      offset={-71}
                                      duration={450}>
                    {l.name}
                </Link>)}
                <a href='https://drive.google.com/file/d/1G0MUHymu77gi2fK867RI7B3r5xKHkNct/view?usp=sharing'
                   download target={'_blank'} style={{color: '#f0a253'}}>CV</a>
            </nav>
        </div>
    )
}