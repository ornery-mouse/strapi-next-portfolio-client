import styles from '../styles/Projects.module.css'

export default function ProjectModal({project, setSelectedProject}) {
    return (
        <div className={styles.projectModal}>
            <div className={styles.modalContent}>
                <div className={styles.ModalMedia}>

                </div>
                <div className={styles.ModalInfo}>
                    <h3>{project.attributes.name}</h3>
                    <p>{project.attributes.description}</p>
                </div>
                <p onClick={() => setSelectedProject(null)}>Back</p>
            </div>
        </div>
    )
}