import styles from '../styles/Projects.module.css'
import Image from 'next/image'

export default function ProjectCard({project, setSelectedProject}) {

    return (
        <div className={styles.projectCard} onClick={() => setSelectedProject(project)}>
            <div className={styles.projectShort}>
                <h3>{project.attributes.short}</h3>
            </div>
            <div className={styles.projectName}>
                <h2>{project.attributes.name}</h2>
            </div>
        </div>
    )
}