import React from 'react'
import s from './Projects.module.scss'
import {Project} from './Project/Project'
import {Fade} from 'react-awesome-reveal'

type ProjectsDataType = {
    id: number
    name: string
    shortDescription: string
    image: string
    link: string
}
export const Projects = () => {
    const projectsData: ProjectsDataType[] = [
        {
            id: 1,
            name: 'Social Network',
            shortDescription: 'Here realised some interesting features like simple web-socket chat, real users list and their profiles, private profile edit page.',
            image: 'https://img.freepik.com/free-vector/scared-anime-face-manga-style-big-blue-eyes-little-nose-and-kawaii-mouth-hand-drawn-vector-cartoon-illustration_163875-302.jpg?size=626&ext=jpg',
            link: 'https://github.com/aportraitofjoyce/social-network-react-ts'
        },
        {
            id: 2,
            name: 'Cards',
            shortDescription: 'Project where user can build you own cards packs with questions for interview or learning foreign languages.',
            image: 'https://img.freepik.com/free-vector/sad-anime-face-manga-style-closed-eyes-little-nose-and-kawaii-mouth-hand-drawn-vector-cartoon-illustration_163875-339.jpg?size=626&ext=jpg&ga=GA1.2.357312108.1628380800',
            link: 'https://github.com/aportraitofjoyce/cards-react'
        },
        {
            id: 3,
            name: 'Todolist',
            shortDescription: 'Classic todo with full CRUD flow and modern React/Redux approaches.',
            image: 'https://img.freepik.com/free-vector/happy-anime-face-manga-style-big-blue-eyes-little-nose-and-big-kawaii-mouth-yellow-sparkles-in-her-eyes-hand-drawn-illustration_163875-596.jpg?size=626&ext=jpg',
            link: 'https://github.com/aportraitofjoyce/todolist'
        },
        {
            id: 4,
            name: 'Counter',
            shortDescription: 'Simple counter with well-worked fields and values dependencies.',
            image: 'https://img.freepik.com/free-vector/happy-anime-woman-s-face_163875-361.jpg?size=626&ext=jpg&ga=GA1.2.458305372.1628899200',
            link: 'https://github.com/aportraitofjoyce/counter-react-ts'
        },
    ]

    const projects = projectsData.map(p => <Project key={p.name}
                                                    name={p.name}
                                                    shortDescription={p.shortDescription}
                                                    image={p.image}
                                                    link={p.link}/>)

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