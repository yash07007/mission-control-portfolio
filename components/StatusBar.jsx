import styles from "../styles/StatusBar.module.css";

const StatusBar = () => {
    const now = new Date();
    const utc = now.toISOString().slice(11, 19) + " UTC";

    return (
        <footer className={styles.statusbar}>
            <div className={styles.left}>
                <div className={styles.indicator}>
                    <span className={`${styles.dot} ${styles.green} pulse`}></span>
                    <span>SYSTEMS NOMINAL</span>
                </div>
                <span>MET: {utc}</span>
            </div>
            <div className={styles.right}>
                <span>Next.js 15</span>
                <span>|</span>
                <span>React 19</span>
            </div>
        </footer>
    );
};

export default StatusBar;
