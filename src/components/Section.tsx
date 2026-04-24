import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;       // e.g. "02 — About"
  title: ReactNode;      // section heading
  aside?: ReactNode;     // right-aligned meta (item count, year range, etc.)
  children: ReactNode;
}

/**
 * Consistent section chrome: full-width top rule, aligned eyebrow
 * in the left gutter, heading and optional aside on the same baseline.
 * Every major section on the page flows through this component so
 * vertical rhythm and eyebrow positions stay identical.
 */
export default function Section({ id, eyebrow, title, aside, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-[color:var(--rule)]">
      <div className="container-site py-20 md:py-28">
        <header className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-6 md:gap-10 items-baseline">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="text-h2 md:text-h1 font-medium text-[color:var(--fg)]">
            {title}
          </h2>
          {aside && (
            <div className="font-mono text-meta uppercase text-[color:var(--fg-3)] md:text-right">
              {aside}
            </div>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
