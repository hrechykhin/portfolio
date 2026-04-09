import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.inner}`}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <h2 className={styles.title}>{profile.title}</h2>
        <p className={styles.intro}>{profile.intro}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            LinkedIn ↗
          </a>
          <a href={profile.cvUrl} download className={styles.btnSecondary}>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
