import { skills } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 id="skills-heading" className="section-title">
          Technical focus
        </h2>
        <p className="section-subtitle">
          Tools and technologies I work with regularly.
        </p>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.tagList} aria-label={group.category}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
