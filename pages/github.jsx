import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";
import styles from "@/styles/Github.module.css";

const GithubPage = ({ repos, user }) => {
    const theme = {
        dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Telemetry // GitHub</h1>
                <p className={styles.pageDesc}>Open source contributions and activity</p>
            </div>

            <div className={styles.userCard}>
                <Image
                    src={user.avatar_url}
                    alt={user.login}
                    width={60}
                    height={60}
                    className={styles.avatar}
                />
                <div className={styles.userInfo}>
                    <h3>{user.login}</h3>
                    <div className={styles.userStats}>
                        <span className={styles.stat}>
                            <span className={styles.statValue}>{user.public_repos}</span> repos
                        </span>
                        <span className={styles.stat}>
                            <span className={styles.statValue}>{user.followers}</span> followers
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.repoGrid}>
                {repos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.repoCard}>
                        <div className={styles.repoName}>{repo.name}</div>
                        <p className={styles.repoDesc}>
                            {repo.description || "No description"}
                        </p>
                        <div className={styles.repoMeta}>
                            {repo.language && <span>{repo.language}</span>}
                            <span>★ {repo.stargazers_count}</span>
                        </div>
                    </a>
                ))}
            </div>

            <div className={styles.calendarSection}>
                <div className={styles.calendarLabel}>Contribution Activity</div>
                <GitHubCalendar
                    username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
                    theme={theme}
                    hideColorLegend
                    hideMonthLabels
                />
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const userRes = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
        {
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
        }
    );
    const user = await userRes.json();

    const repoRes = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
        {
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
        }
    );
    let repos = await repoRes.json();
    repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

    return {
        props: { title: "GitHub", repos, user },
        revalidate: 3600,
    };
}

export default GithubPage;
