import React, {FC} from 'react'
import {Header} from './components/Header/Header'
import {Hero} from './components/Main/Hero/Hero'
import {Skills} from './components/Main/Skills/Skills'
import {Projects} from './components/Main/Projects/Projects'
import {ContactMe} from './components/Main/ContactMe/ContactMe'
import {Footer} from './components/Footer/Footer'
import {Social} from './components/Main/Social/Social'
import './index.scss'

export const App: FC = () => (
    <>
        <Header/>
        <main>
            <Hero/>
            <Skills/>
            <Projects/>
            <ContactMe/>
            <Social/>
        </main>
        <Footer/>
    </>
)
