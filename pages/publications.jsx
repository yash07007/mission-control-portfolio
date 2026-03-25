import { getPublications } from "./api/data";
import styles from "@/styles/Publications.module.css";

export default function PublicationsPage({ publications }) {
    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Transmissions // Publications</h1>
                <p className={styles.pageDesc}>Research papers and conference proceedings</p>
            </div>

            <div className={styles.list}>
                {publications.map((pub, i) => (
                    <div className={styles.card} key={i}>
                        <h3 className={styles.cardTitle}>{pub.title}</h3>
                        <div className={styles.cardMeta}>
                            <span>{pub.publication_date}</span>
                            <span className={styles.metaDivider}>|</span>
                            <span>{pub.publisher}</span>
                        </div>
                        <p className={styles.cardAuthors}>{pub.authors}</p>
                        <p className={styles.cardVenue}>
                            {pub.conference || pub.book}
                        </p>
                        {pub.url && (
                            <a href={pub.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                                View Publication →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Publications",
            publications: getPublications(),
        },
    };
}
