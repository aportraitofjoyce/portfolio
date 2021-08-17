import React from 'react'
import s from './Skills.module.css'
import {MaximizeIcon} from '../../Icons/MaximizeIcon/MaximizeIcon'
import {Skill} from './Skill/Skill'

type skillsDataType = {
    id: number
    name: string
    description: string
}

export const Skills = () => {

    const skillsData: skillsDataType[] = [
        {id: 1, name: 'React', description: 'Blablabla'},
        {id: 2, name: 'Redux', description: 'Blablabla'},
        {id: 3, name: 'JavaScript', description: 'Blablabla'},
        {id: 4, name: 'TypeScript', description: 'Blablabla'},
        {id: 5, name: 'HTML', description: 'Blablabla'},
        {id: 6, name: 'CSS', description: 'Blablabla'}
    ]

    const skills = skillsData.map(s => {
        return (
            <Skill key={s.id} name={s.name} description={s.description}>
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


