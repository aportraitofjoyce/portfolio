import React from 'react'
import {Header} from './components/Header/Header'
import {Hello} from './components/Main/Hello/Hello'
import {Skills} from './components/Main/Skills/Skills'
import {Projects} from './components/Main/Projects/Projects'
import {ContactMe} from './components/Main/ContactMe/ContactMe'
import {Footer} from './components/Footer/Footer'
import {Social} from './components/Main/Social/Social'


export function App() {
    return (
        <>
            <Header/>
            <main className={'mainWrapper'}>
                <Hello/>
                <Skills/>
                <Projects/>
                <ContactMe/>
                <Social/>
            </main>
            <Footer/>
        </>
    )
}
