import { getEducation, getSkills, getAchievements, getLeadership } from "./api/data";
import styles from "@/styles/About.module.css";

export default function AboutPage({ education, skills, achievements, leadership }) {
    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Crew Profile // About</h1>
                <p className={styles.pageDesc}>Background, training, and qualifications</p>
            </div>

            <div className={styles.profileGrid}>
                <div className={styles.profileCard}>
                    <div className={styles.cardLabel}>
                        <span className={styles.cardLabelDot}></span>
                        Education
                    </div>
                    {education.map((edu, i) => (
                        <div className={styles.eduItem} key={i}>
                            <div className={styles.eduName}>{edu.name}</div>
                            <div className={styles.eduCourse}>{edu.course}</div>
                            <div className={styles.eduMeta}>
                                {edu.graduation} · GPA: {edu.gpa}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.profileCard}>
                    <div className={styles.cardLabel}>
                        <span className={styles.cardLabelDot}></span>
                        Leadership
                    </div>
                    <ul className={styles.achieveList}>
                        {leadership.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {skills.map((group) => (
                    <div className={styles.profileCard} key={group.title}>
                        <div className={styles.cardLabel}>
                            <span className={styles.cardLabelDot}></span>
                            {group.title.replace(/-/g, " ")}
                        </div>
                        {group.categories.map((cat) => (
                            <div className={styles.skillGroup} key={cat.name}>
                                <div className={styles.skillGroupTitle}>{cat.name}</div>
                                <div className={styles.skillTags}>
                                    {cat.value.split(", ").map((s) => (
                                        <span className={styles.skillTag} key={s}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <div className={`${styles.profileCard} ${styles.fullCard}`}>
                    <div className={styles.cardLabel}>
                        <span className={styles.cardLabelDot}></span>
                        Achievements
                    </div>
                    <ul className={styles.achieveList}>
                        {achievements.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "About",
            education: getEducation(),
            skills: getSkills(),
            achievements: getAchievements(),
            leadership: getLeadership(),
        },
    };
}
