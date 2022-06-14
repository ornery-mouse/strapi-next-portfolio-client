import Link from "next/link"
import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import getProjects from './api/getProjects'
import styles from '../styles/Projects.module.css'

export default function Projects(){
    const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState(null)

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
            return (<ProjectCard project={project} key={project.id}></ProjectCard>)
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.projects}>
                {!loading && allProjects}
                
            </div>
            <Link href='/'>Back</Link>
        </div>
    )
}