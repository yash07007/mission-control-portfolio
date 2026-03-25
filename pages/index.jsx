import Link from "next/link";
import { getBio, getExperience, getSkills } from "./api/data";
import styles from "@/styles/Home.module.css";

export default function HomePage({ bio, experience, skills }) {
    const current = experience[0];
    const allSkills = skills.flatMap((s) =>
        s.categories.flatMap((c) => c.value.split(", "))
    );

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <p className={styles.missionLabel}>Mission Control // Portfolio</p>
                <h1 className={styles.name}>{bio.name}</h1>
                <p className={styles.role}>Software Engineer — Wireless Protocol (MAC Layer)</p>
                <div className={styles.actions}>
                    <a
                        href="/Yash_Solanki_Resume_USC_2025_04.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnPrimary}>
                        Resume
                    </a>
                    <Link href="/contact">
                        <button className={styles.btnOutline}>Open Channel</button>
                    </Link>
                </div>
            </div>

            <div className={styles.panels}>
                <div className={styles.panel}>
                    <div className={styles.panelLabel}>Years Active</div>
                    <div className={styles.panelValue}>5+</div>
                    <div className={styles.panelDetail}>Since May 2020</div>
                </div>
                <div className={styles.panel}>
                    <div className={styles.panelLabel}>Publications</div>
                    <div className={styles.panelValue}>5</div>
                    <div className={styles.panelDetail}>IEEE, Springer</div>
                </div>
                <div className={styles.panel}>
                    <div className={styles.panelLabel}>Missions</div>
                    <div className={styles.panelValue}>{experience.length}</div>
                    <div className={styles.panelDetail}>Organizations served</div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className={`${styles.sectionDot} pulse`}></span>
                    <span className={styles.sectionTitle}>Current Mission</span>
                </div>
                <div className={styles.missionCard}>
                    <div className={styles.missionTitle}>{current.role}</div>
                    <div className={styles.missionSub}>
                        {current.company} · {current.location}
                    </div>
                    <div className={styles.missionDesc}>
                        {current.summary[0]}
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionDot}></span>
                    <span className={styles.sectionTitle}>Systems & Technologies</span>
                </div>
                <div className={styles.skillsRow}>
                    {allSkills.slice(0, 18).map((skill) => (
                        <span key={skill} className={styles.skillTag}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Home",
            bio: getBio(),
            experience: getExperience(),
            skills: getSkills(),
        },
    };
}
