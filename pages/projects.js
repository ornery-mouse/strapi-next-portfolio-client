import Link from "next/link"
import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from "../components/ProjectModal"
import getProjects from './api/getProjects'
import styles from '../styles/Projects.module.css'

export default function Projects(){
    const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState(null)
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(()=> {
        setLoading(true)
        getProjects()
        .then(resp => {
            setProjects(resp.data.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

    let allProjects

    if(projects){
        allProjects = projects.map(project => {
            return (<ProjectCard project={project} key={project.id} setSelectedProject={setSelectedProject}></ProjectCard>)
        })
    }

    return (
        <div className={styles.container}>
            {selectedProject && <ProjectModal project={selectedProject} setSelectedProject={setSelectedProject}/>}
            <div className={styles.projects}>
                <div className={styles.cardDisplay}>
                    {!loading && allProjects}
                </div>
                <Link href='/'>Back</Link>
            </div>
            
        </div>
    )
}