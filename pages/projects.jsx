import { getProjects } from "./api/data";
import styles from "@/styles/Projects.module.css";

export default function ProjectsPage({ projects }) {
    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Mission Archives // Projects</h1>
                <p className={styles.pageDesc}>Systems built and deployed</p>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div className={styles.card} key={project.id}>
                        <div className={styles.cardId}>PRJ-{String(project.id).padStart(3, "0")}</div>
                        <h3 className={styles.cardName}>{project.name}</h3>
                        <p className={styles.cardDesc}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <span className={styles.tag} key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div className={styles.links}>
                            {project.source_code && (
                                <a href={project.source_code} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Source
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Live
                                </a>
                            )}
                            {project.publication && (
                                <a href={project.publication} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Paper
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Projects",
            projects: getProjects(),
        },
    };
}
