import { useState } from "react";
import { getContacts } from "./api/data";
import styles from "@/styles/Contact.module.css";

export default function ContactPage({ contacts }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:yashsolanki777@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        window.open(mailtoLink);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Open Channel // Contact</h1>
                <p className={styles.pageDesc}>Establish a communication link</p>
            </div>

            <div className={styles.grid}>
                <div className={styles.left}>
                    {contacts.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contactCard}>
                            <div>
                                <div className={styles.contactLabel}>{item.social}</div>
                                <div className={styles.contactValue}>{item.link}</div>
                            </div>
                            <span className={styles.contactArrow}>→</span>
                        </a>
                    ))}
                </div>

                <div className={styles.right}>
                    <div className={styles.formTitle}>Send Transmission</div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text" id="name"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email" id="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text" id="subject"
                                value={subject} onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message" rows="5"
                                value={message} onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Transmit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            title: "Contact",
            contacts: getContacts(),
        },
    };
}
