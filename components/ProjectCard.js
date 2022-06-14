import styles from '../styles/Projects.module.css'
import Image from 'next/image'

export default function ProjectCard({project}) {

    const thumbStyle = {
        backgroundImage: "url('http://localhost:1337/uploads/Screenshot_from_2022_06_12_15_38_52_67803cb249.png?updated_at=2022-06-13T20:17:21.751Z')",
        backgroundPosition: '50% 50%',
        height: '100%',
    }

    return (
        <div className={styles.projectCard}>
            <div style={thumbStyle}>
                <h3>{project.attributes.short}</h3>
            </div>
        </div>
    )
}