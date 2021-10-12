import React from 'react'
import s from '../Skills.module.scss'

type SkillPropsType = {
    name: string
    description: string
}
export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skillContainer}>
            <div className={s.iconContainer}>{props.children}</div>
            <strong>{props.name}</strong>
            <div>{props.description}</div>
        </div>
    )
}