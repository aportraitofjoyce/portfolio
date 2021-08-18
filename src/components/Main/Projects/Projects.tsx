import React from 'react'
import s from './Projects.module.css'
import Project from './Project/Project'

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
            name: 'Project #1',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus!',
            image: 'https://img.freepik.com/free-vector/happy-anime-face-manga-style-big-blue-eyes-little-nose-and-big-kawaii-mouth-yellow-sparkles-in-her-eyes-hand-drawn-illustration_163875-596.jpg?size=626&ext=jpg'
        },
        {
            id: 2,
            name: 'Project #2',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus!',
            image: 'https://img.freepik.com/free-vector/scared-anime-face-manga-style-big-blue-eyes-little-nose-and-kawaii-mouth-hand-drawn-vector-cartoon-illustration_163875-302.jpg?size=626&ext=jpg'
        },
        {
            id: 3,
            name: 'Project #3',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptatibus!',
            image: 'https://img.freepik.com/free-vector/happy-anime-woman-s-face_163875-361.jpg?size=626&ext=jpg&ga=GA1.2.458305372.1628899200'
        },
        {
            id: 4,
            name: 'Project #4',
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
                <div className={s.textContainer}>
                    <h2>Projects</h2>
                </div>
                <div className={s.projectsContainer}>
                    {projects}
                </div>
            </div>
        </section>
    )
}