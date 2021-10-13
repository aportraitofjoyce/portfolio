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
                                {s.name === 'HTML' && <HTML/>}
                                {s.name === 'CSS' && <CSS/>}
                            </Skill>
                        )}
                    </div>
                </Fade>
            </div>
        </section>
    )
}


