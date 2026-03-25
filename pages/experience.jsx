import { getExperience } from "./api/data";
import styles from "@/styles/Experience.module.css";

export default function ExperiencePage({ experience }) {
    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Mission Log // Experience</h1>
                <p className={styles.pageDesc}>Flight history and mission assignments</p>
            </div>

            <div className={styles.timeline}>
                {experience.map((exp, i) => {
                    const isActive = exp.endDate === "date.now()";
                    const dateLabel = isActive
                        ? `${exp.startDate} — Present`
                        : `${exp.startDate} — ${exp.endDate}`;

                    return (
                        <div className={styles.timelineItem} key={exp.id}>
                            <div className={`${styles.timelineDot} ${isActive ? styles.timelineDotActive : ""}`}></div>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardRole}>{exp.role}</h3>
                                    <span className={styles.cardDate}>{dateLabel}</span>
                                </div>
                                <p className={styles.cardCompany}>{exp.company}</p>
                                <p className={styles.cardLocation}>{exp.location}</p>
                                <ul className={styles.cardSummary}>
                                    {exp.summary.map((point, j) => (
                                        <li key={j}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Experience",
            experience: getExperience(),
        },
    };
}
