import React from 'react'
import s from '../Projects.module.css'
import {ScrollReveal} from '../../../../utils/ScrollReveal'

type ProjectPropsType = {
    name: string
    shortDescription: string
    image: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (

        <div className={s.projectContainer}>
            <div className={s.imageContainer}>
                <img src={props.image} alt={props.name}/>
                <button className={s.button}>Look</button>
            </div>
            <h4>{props.name}</h4>
            <div>{props.shortDescription}</div>
        </div>

    )
}