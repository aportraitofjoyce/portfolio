import React from 'react'
import s from './Skills.module.css'
import {MaximizeIcon} from '../../Icons/MaximizeIcon/MaximizeIcon'
import {Skill} from './Skill/Skill'

type SkillsDataType = {
    id: number
    name: string
    description: string
}

export const Skills = () => {

    const skillsData: SkillsDataType[] = [
        {id: 1, name: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.' },
        {id: 2, name: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'},
        {id: 3, name: 'JavaScript', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'},
        {id: 4, name: 'TypeScript', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'},
        {id: 5, name: 'HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'},
        {id: 6, name: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptatum.'}
    ]

    const skills = skillsData.map(s => {
        return (
            <Skill key={s.name} name={s.name} description={s.description}>
                {s.name === 'React' && <MaximizeIcon/>}
                {s.name === 'Redux' && <MaximizeIcon/>}
                {s.name === 'JavaScript' && <MaximizeIcon/>}
                {s.name === 'TypeScript' && <MaximizeIcon/>}
                {s.name === 'HTML' && <MaximizeIcon/>}
                {s.name === 'CSS' && <MaximizeIcon/>}
            </Skill>
        )
    })

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


