import React from 'react'
import {Header} from './components/Header/Header'
import {HelloBlock} from './components/Main/HelloBlock/HelloBlock'
import {Skills} from './components/Main/Skills/Skills'


export function App() {
    return (
        <>
            <Header/>
            <main className={'mainWrapper'}>
                <HelloBlock/>
                <Skills/>
            </main>

        </>
    )
}
