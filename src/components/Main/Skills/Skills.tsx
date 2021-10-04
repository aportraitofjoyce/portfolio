import React from 'react'
import s from './Skills.module.css'
import {Skill} from './Skill/Skill'
import {ReactIcon} from '../../Icons/React/ReactIcon'
import {Redux} from '../../Icons/Redux/Redux'
import {JavaScript} from '../../Icons/JavaScript/JavaScript'
import {TypeScript} from '../../Icons/TypeScript/TypeScript'
import {HTML} from '../../Icons/HTML/HTML'
import {CSS} from '../../Icons/CSS/CSS'

type SkillsDataType = {
    id: number
    name: string
    description: string
}

export const Skills = () => {
    const skillsData: SkillsDataType[] = [
        {
            id: 1,
            name: 'React',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'
        },
        {
            id: 2,
            name: 'Redux',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'
        },
        {
            id: 3,
            name: 'JavaScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'
        },
        {
            id: 4,
            name: 'TypeScript',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'
        },
        {
            id: 5,
            name: 'HTML',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'
        },
        {
            id: 6,
            name: 'CSS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'
        }
    ]

    const skills = skillsData.map(s => <Skill key={s.name}
                                              name={s.name}
                                              description={s.description}>
            {s.name === 'React' && <ReactIcon/>}
            {s.name === 'Redux' && <Redux/>}
            {s.name === 'JavaScript' && <JavaScript/>}
            {s.name === 'TypeScript' && <TypeScript/>}
            {s.name === 'HTML' && <HTML/>}
            {s.name === 'CSS' && <CSS/>}
        </Skill>
    )

    return (
        <section id={'skills'} className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textContainer}>
                    <h2>Skills</h2>
                </div>

                <div className={s.skillsContainer}>
                    {skills}
                </div>
            </div>
        </section>
    )
}


