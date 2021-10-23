import React from 'react'
import s from '../Projects.module.scss'
import Tilt from 'react-parallax-tilt'

type ProjectPropsType = {
    name: string
    shortDescription: string
    image: string
    link: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (

        <div className={s.projectContainer}>
            <Tilt transitionSpeed={5500}>
                <div className={s.imageContainer}>
                    <img src={props.image} alt={props.name}/>
                    <a href={props.link} target={'_blank'} rel={'noreferrer'}>
                        <button className={s.button}>Look</button>
                    </a>
                </div>
            </Tilt>
            <a href={props.link} rel={'noreferrer'} target={'_blank'}>
                <strong>{props.name}</strong>
            </a>
            <div>{props.shortDescription}</div>
        </div>

    )
}