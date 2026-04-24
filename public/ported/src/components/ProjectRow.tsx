import type { Project } from '../data/projects';

interface Props { project: Project; index: number }

const STATUS_COLOR: Record<Project['status'], string> = {
  'Completed':   'text-signal',
  'In Progress': 'text-[color:var(--fg-2)]',
  'MVP':         'text-[color:var(--fg-3)]',
};

export default function ProjectRow({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className="
        group grid
        grid-cols-1
        md:grid-cols-[60px_1fr_260px]
        gap-6 md:gap-12
        py-10 md:py-14
      "
    >
      {/* Index */}
      <div className="font-mono text-meta uppercase text-[color:var(--fg-3)]">№ {num}</div>

      {/* Main */}
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
          <h3 className="text-h3 md:text-h2 font-medium text-[color:var(--fg)] tracking-tight">
            {project.title}
          </h3>
          <span className={`font-mono text-meta uppercase ${STATUS_COLOR[project.status]}`}>
            — {project.status}
          </span>
        </div>

        <p className="text-body md:text-lede text-[color:var(--fg-2)] max-w-reading mb-5 leading-snug">
          {project.summary}
        </p>

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
            <p className="text-body text-[color:var(--fg-2)] max-w-reading">
              {project.contribution}
            </p>
            <ul className="space-y-1.5 max-w-reading">
              {project.highlights.map((h, i) => (
                <li key={i} className="
                  grid grid-cols-[24px_1fr] gap-2
                  text-sm text-[color:var(--fg-2)] leading-relaxed
                ">
                  <span className="font-mono text-[color:var(--fg-4)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>

        <ul className="flex flex-wrap gap-1.5 mt-6">
          {project.stack.map(s => (
            <li
              key={s}
              className="
                font-mono text-[11px] leading-none
                text-[color:var(--fg-3)]
                px-2 py-1.5 rounded
                border border-[color:var(--rule)]
              "
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Aside: links */}
      <div className="md:text-right space-y-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank" rel="noreferrer"
            className="
              block text-sm font-medium text-[color:var(--fg)]
              hover:text-signal transition-colors
            "
          >
            Live demo <span aria-hidden>↗</span>
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank" rel="noreferrer"
          className="
            block font-mono text-meta uppercase text-[color:var(--fg-3)]
            hover:text-[color:var(--fg)] transition-colors
          "
        >
          Source ↗
        </a>
      </div>
    </article>
  );
}
