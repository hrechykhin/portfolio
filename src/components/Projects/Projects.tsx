import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-heading">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 id="projects-heading" className="section-title">
          Selected work
        </h2>
        <p className="section-subtitle">
          A selection of projects I've built: APIs, data-driven services, and full-stack applications.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
