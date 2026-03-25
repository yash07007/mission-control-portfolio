import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import StatusBar from "./StatusBar";
import styles from "../styles/Layout.module.css";

const navItems = [
    { label: "Overview", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Publications", path: "/publications" },
    { label: "GitHub", path: "/github" },
];

const secondaryNav = [
    { label: "Profile", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const Layout = ({ children }) => {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className={styles.layout}>
            {/* Mobile header */}
            <div className={styles.mobileHeader}>
                <button className={styles.hamburger} onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? "✕" : "☰"}
                </button>
                <span className={styles.mobileTitle}>Mission Control</span>
                <span style={{ width: 28 }}></span>
            </div>

            <div className={styles.main}>
                {/* Overlay for mobile */}
                <div
                    className={`${styles.overlay} ${sidebarOpen ? styles.overlayVisible : ""}`}
                    onClick={closeSidebar}
                />

                {/* Sidebar */}
                <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
                    <div className={styles.sidebarHeader}>
                        <div className={styles.sidebarLabel}>Mission Control</div>
                        <div className={styles.sidebarName}>Yash Solanki</div>
                        <div className={styles.sidebarRole}>Software Engineer</div>
                    </div>

                    <nav className={styles.navSection}>
                        <div className={styles.navSectionTitle}>Systems</div>
                        {navItems.map(({ label, path }) => (
                            <Link href={path} key={path} onClick={closeSidebar}>
                                <div className={`${styles.navItem} ${router.pathname === path ? styles.navItemActive : ""}`}>
                                    <span className={styles.navDot}></span>
                                    {label}
                                </div>
                            </Link>
                        ))}

                        <div className={styles.navSectionTitle}>Operations</div>
                        {secondaryNav.map(({ label, path }) => (
                            <Link href={path} key={path} onClick={closeSidebar}>
                                <div className={`${styles.navItem} ${router.pathname === path ? styles.navItemActive : ""}`}>
                                    <span className={styles.navDot}></span>
                                    {label}
                                </div>
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.sidebarFooter}>
                        <a href="https://github.com/yash07007" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/yash07007/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                        </a>
                        <a href="mailto:yashsolanki777@gmail.com" className={styles.footerLink}>
                            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </a>
                    </div>
                </aside>

                {/* Main content */}
                <main className={styles.content} key={router.pathname}>
                    <div className="page-transition">{children}</div>
                </main>
            </div>

            <StatusBar />
        </div>
    );
};

export default Layout;
