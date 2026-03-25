import { useState, useEffect } from "react";
import styles from "../styles/StatusBar.module.css";

const StatusBar = () => {
    const [utc, setUtc] = useState("--:--:-- UTC");

    useEffect(() => {
        const update = () => setUtc(new Date().toISOString().slice(11, 19) + " UTC");
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

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
