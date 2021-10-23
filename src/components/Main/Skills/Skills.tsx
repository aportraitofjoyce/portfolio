import React, {FC} from 'react'
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill'
import {ReactIcon} from '../../Icons/React/ReactIcon'
import {Redux} from '../../Icons/Redux/Redux'
import {JavaScript} from '../../Icons/JavaScript/JavaScript'
import {TypeScript} from '../../Icons/TypeScript/TypeScript'
import {HTML} from '../../Icons/HTML/HTML'
import {CSS} from '../../Icons/CSS/CSS'
import {Fade} from 'react-awesome-reveal'

type SkillsDataType = {
    id: number
    name: string
    description: string
}

export const Skills: FC = () => {
    const skillsData: SkillsDataType[] = [
        {
            id: 1,
            name: 'React',
            description: 'Functional React on hooks'
        },
        {
            id: 2,
            name: 'Redux',
            description: 'Native and Redux Toolkit, Thunks'
        },
        {
            id: 3,
            name: 'JavaScript',
            description: 'ES6+ syntax, still learning every day'
        },
        {
            id: 4,
            name: 'TypeScript',
            description: 'TS for typed programming'
        },
        {
            id: 5,
            name: 'HTML5',
            description: 'Semantic HTML, Local/Session Storage'
        },
        {
            id: 6,
            name: 'CSS3',
            description: 'Native CSS, SASS preprocessor'
        }
    ]

    return (
        <section id={'skills'} className={s.wrapper}>
            <div className={s.container}>
                <h2>Skills</h2>
                <Fade direction={'left'} triggerOnce={true}>
                    <div className={s.skillsContainer}>
                        {skillsData.map(s =>
                            <Skill key={s.name}
                                   name={s.name}
                                   description={s.description}>
                                {s.name === 'React' && <ReactIcon/>}
                                {s.name === 'Redux' && <Redux/>}
                                {s.name === 'JavaScript' && <JavaScript/>}
                                {s.name === 'TypeScript' && <TypeScript/>}
                                {s.name === 'HTML5' && <HTML/>}
                                {s.name === 'CSS3' && <CSS/>}
                            </Skill>
                        )}
                    </div>
                </Fade>
            </div>
        </section>
    )
}


