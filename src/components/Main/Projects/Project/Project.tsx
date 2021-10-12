import React from 'react'
import s from '../Projects.module.scss'
import Tilt from 'react-parallax-tilt'

type ProjectPropsType = {
    name: string
    shortDescription: string
    image: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (

        <div className={s.projectContainer}>
            <Tilt transitionSpeed={5500}>
                <div className={s.imageContainer}>
                    <img src={props.image} alt={props.name}/>
                    <button className={s.button}>Look</button>
                </div>
            </Tilt>
            <strong>{props.name}</strong>
            <div>{props.shortDescription}</div>
        </div>

    )
}