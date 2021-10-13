import React from 'react'
import s from './Projects.module.scss'
import {Project} from './Project/Project'
import {Fade} from 'react-awesome-reveal'

type ProjectsDataType = {
    id: number
    name: string
    shortDescription: string
    image: string
}
export const Projects = () => {
    const projectsData: ProjectsDataType[] = [
        {
            id: 1,
            name: 'Todolist',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus!',
            image: 'https://img.freepik.com/free-vector/happy-anime-face-manga-style-big-blue-eyes-little-nose-and-big-kawaii-mouth-yellow-sparkles-in-her-eyes-hand-drawn-illustration_163875-596.jpg?size=626&ext=jpg'
        },
        {
            id: 2,
            name: 'Social Network',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus!',
            image: 'https://img.freepik.com/free-vector/scared-anime-face-manga-style-big-blue-eyes-little-nose-and-kawaii-mouth-hand-drawn-vector-cartoon-illustration_163875-302.jpg?size=626&ext=jpg'
        },
        {
            id: 3,
            name: 'Counter',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus!',
            image: 'https://img.freepik.com/free-vector/happy-anime-woman-s-face_163875-361.jpg?size=626&ext=jpg&ga=GA1.2.458305372.1628899200'
        },
        {
            id: 4,
            name: 'Cards',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus!',
            image: 'https://img.freepik.com/free-vector/sad-anime-face-manga-style-closed-eyes-little-nose-and-kawaii-mouth-hand-drawn-vector-cartoon-illustration_163875-339.jpg?size=626&ext=jpg&ga=GA1.2.357312108.1628380800'
        }
    ]

    const projects = projectsData.map(p => <Project key={p.name}
                                                    name={p.name}
                                                    shortDescription={p.shortDescription}
                                                    image={p.image}/>)

    return (
        <section id={'projects'} className={s.wrapper}>
            <div className={s.container}>
                <h2>Projects</h2>
                <Fade direction={'right'} triggerOnce={true}>
                    <div className={s.projectsContainer}>
                        {projects}
                    </div>
                </Fade>
            </div>
        </section>
    )
}