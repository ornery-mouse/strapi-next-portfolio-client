import { useState } from 'react'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'

export default function ProjectCard({project, setSelectedProject}) {

    const [mouseover, setMouseOver] = useState(false)

    function mouseEnterHandler() {
        setMouseOver(true)
    }

    function mouseLeaveHandler() {
        setMouseOver(false)
    }

    const frameStyle = {
        background: `url("${project.attributes.cover}")`,
        backgroundPosition: "top",
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        height: '100%',
        margin: '0px 10px'
    }

    return (
        <div className={styles.projectCard} 
            onClick={() => setSelectedProject(project)}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            >
            {!mouseover && <div className={styles.projectShort}>
                <h3>{project.attributes.short}</h3>
            </div>}
            {mouseover && <div className={styles.projectShortImage}>
                <div style={frameStyle}>

                </div>
                {/* <Image src={project.attributes.cover} width="100%" height="100%" layout="intrinsic" alt="Project thumbnail"/> */}
            </div>}
            
            <div className={styles.projectName}>
                <h2>{project.attributes.name}</h2>
            </div>
        </div>
    )
}