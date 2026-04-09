import type { Project } from '../../data/projects';
import styles from './ProjectCard.module.css';

interface Props {
  project: Project;
}

const statusColors: Record<Project['status'], string> = {
  Completed: styles.statusCompleted,
  'In Progress': styles.statusInProgress,
  MVP: styles.statusMVP,
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card} aria-label={project.title}>
      <div className={styles.top}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={`${styles.status} ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
        <p className={styles.summary}>{project.summary}</p>
      </div>

      <div className={styles.body}>
        <div className={styles.section}>
          <p className={styles.sectionLabel}>My contribution</p>
          <p className={styles.contribution}>{project.contribution}</p>
        </div>

        <div className={`${styles.section} ${styles.sectionGrow}`}>
          <p className={styles.sectionLabel}>Technical highlights</p>
          <ul className={styles.highlights}>
            {project.highlights.map((h, i) => (
              <li key={i} className={styles.highlight}>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.stackRow}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.stackTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkGithub}
          aria-label={`View ${project.title} on GitHub`}
        >
          GitHub ↗
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkLive}
            aria-label={`View live demo of ${project.title}`}
          >
            Live demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
