import Section from '../components/Section';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title={<>Selected work.</>}
      aside={`${projects.length} projects · '25–'26`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
