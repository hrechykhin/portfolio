import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>{profile.name}</p>
        <p className={styles.copy}>
          © {year} · Python Software Engineer
        </p>
        <nav className={styles.links} aria-label="Footer navigation">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className={styles.link}>
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
