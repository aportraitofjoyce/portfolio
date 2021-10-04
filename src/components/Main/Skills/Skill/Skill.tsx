import React from 'react'
import s from '../Skills.module.scss'

type SkillPropsType = {
    name: string
    description: string
}
export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skillContainer}>
                <div className={s.iconContainer}>
                    {props.children}
                </div>
                <h4>{props.name}</h4>
                <div>{props.description}</div>
        </div>
    )
}