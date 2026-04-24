import type { Project } from '../data/projects';

interface Props { project: Project; index: number }

const STATUS_BADGE: Record<Project['status'], string> = {
  'Completed':   'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30',
  'In Progress': 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30',
  'MVP':         'bg-[color:var(--bg-sunken)] text-[color:var(--fg-3)] border border-[color:var(--rule)]',
};

export default function ProjectRow({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="
      bg-[color:var(--bg-raised)] rounded-xl border border-[color:var(--rule)]
      p-6 md:p-8 flex flex-col gap-5
    ">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-meta text-[color:var(--fg-4)]">№ {num}</span>
          <h3 className="text-h3 font-medium text-[color:var(--fg)] tracking-tight">
            {project.title}
          </h3>
        </div>
        <span className={`
          shrink-0 font-mono text-[11px] uppercase tracking-widest
          px-2.5 py-1 rounded-full
          ${STATUS_BADGE[project.status]}
        `}>
          {project.status}
        </span>
      </div>

      {/* Summary */}
      <p className="text-body text-[color:var(--fg-2)] leading-relaxed">
        {project.summary}
      </p>

      {/* Expandable detail */}
      <details className="group/details">
        <summary className="
          cursor-pointer list-none
          font-mono text-meta uppercase text-[color:var(--fg-3)]
          inline-flex items-center gap-2
          hover:text-[color:var(--fg)]
          transition-colors
        ">
          <span className="group-open/details:hidden">Read more</span>
          <span className="hidden group-open/details:inline">Close</span>
          <span aria-hidden className="transition-transform group-open/details:rotate-45">+</span>
        </summary>
        <div className="mt-5 space-y-5">
          <p className="text-body text-[color:var(--fg-2)]">
            {project.contribution}
          </p>
          <ul className="space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="grid grid-cols-[24px_1fr] gap-2 text-sm text-[color:var(--fg-2)] leading-relaxed">
                <span className="font-mono text-[color:var(--fg-4)]">{String(i + 1).padStart(2, '0')}</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>

      {/* Stack tags */}
      <ul className="flex flex-wrap gap-1.5">
        {project.stack.map(s => (
          <li key={s} className="
            font-mono text-[11px] leading-none
            text-[color:var(--fg-3)]
            px-2 py-1.5 rounded
            border border-[color:var(--rule)]
          ">
            {s}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex gap-4 mt-auto pt-1">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer"
            className="font-mono text-meta uppercase text-[color:var(--fg-3)] hover:text-[color:var(--fg)] transition-colors">
            Live demo ↗
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noreferrer"
          className="font-mono text-meta uppercase text-[color:var(--fg-3)] hover:text-[color:var(--fg)] transition-colors">
          Source ↗
        </a>
      </div>
    </article>
  );
}
