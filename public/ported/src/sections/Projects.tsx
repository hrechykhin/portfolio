import Section from '../components/Section';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title={<>Selected work.</>}
      aside={`${projects.length} projects · '25–'26`}
    >
      <div className="[&>*]:border-t [&>*]:border-[color:var(--rule)] [&>*:last-child]:border-b">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
